import axios from "./axios.min.js";

const e_learning = {};

e_learning.baseUrl = "http://127.0.0.1:8000/api/v0.1/";

e_learning.token = localStorage.getItem("access_token");

e_learning.Console = (title, values, oneValue = true) => {
  console.log("___" + title + "___");
  if (oneValue) {
    console.log(values);
  } else {
    for (let i = 0; i < values.length; i++) {
      console.log(values[i]);
    }
  }
  console.log("___/" + title + "___");
};

e_learning.getAPI = async (api_url) => {
  try {
    return await axios(api_url);
  } catch (error) {
    // console.log(error);
    return error;
  }
};

e_learning.postAPI = async (api_url, api_data) => {
  try {
    return await axios.post(api_url, api_data);
  } catch (error) {
    //console.log(error);
    return error;
  }
};

e_learning.logout = async (navigate) => {
  const api_logout = `${e_learning.baseUrl}logout`;
  const data = new FormData();
  data.append("token", localStorage.getItem("access_token"));
  await e_learning.postAPI(api_logout, data);
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_info");
  navigate("/login");
};

// check if login by checking data in  localStorage
// check if user are login in and chck if token are valid
e_learning.checkLogin = async (
  navigate,
  setIsLogin = null,
  fromLogin = false
) => {
  if (!localStorage.getItem("access_token")) {
    localStorage.removeItem("user_info");
    if (!fromLogin) {
      setIsLogin(false);
      navigate("/login", { state: { wrong: true } });
    }
    return;
  }
  // get user info
  const user_info_url = `${e_learning.baseUrl}me`;
  const api_userInfo = new FormData();
  api_userInfo.append("token", localStorage.getItem("access_token"));
  const user_info = await e_learning.postAPI(user_info_url, api_userInfo);
  if (user_info.status && user_info.status === 200) {
    localStorage.setItem("user_info", JSON.stringify(user_info.data));
    if (fromLogin) navigate("/student");
    else setIsLogin(true);
    return;
  } else {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_info");
    if (!fromLogin) {
      navigate("/login", { state: { wrong: true } });
      setIsLogin(false);
    }
    return;
  }
};

// login if login not valid set error/while testing data  setdisabled for login and
//apply anmition login
e_learning.login = async (email, password, setError, setdisabled, navigate) => {
  const data = new FormData();
  const url = `${e_learning.baseUrl}login`;
  data.append("email", email);
  data.append("password", password);
  const login_info = await e_learning.postAPI(url, data);
  if (login_info.status && login_info.status === 200) {
    // if done save toke and get user info by api
    const access_token = login_info.data.access_token;
    localStorage.setItem("access_token", access_token);
    // get user info
    const user_info_url = `${e_learning.baseUrl}me`;
    // this api need token
    const api_userInfo = new FormData();
    api_userInfo.append("token", access_token);
    const user_info = await e_learning.postAPI(user_info_url, api_userInfo);
    //  if token valid will get user info and save in local storage then redirect to home page
    if (user_info.status && user_info.status === 200) {
      localStorage.setItem("user_info", JSON.stringify(user_info.data));
      navigate("/student");
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_info");
      setError(true);
      setdisabled(false);
    }
  } else {
    setError(true);
    setdisabled(false);
  }
};

//get all Announcements for specific Course
e_learning.getAnnouncements = (course_nb) =>
  fetch(
    `${
      e_learning.baseUrl
    }get_announcements/${course_nb}?token=${localStorage.getItem(
      "access_token"
    )}`
  );

//get all Assignments for specific Course that not submit yet
e_learning.getAssignments = (course_nb) =>
  fetch(
    `${
      e_learning.baseUrl
    }get_assignments/${course_nb}?token=${localStorage.getItem("access_token")}`
  );

//get Instructor info
e_learning.getInstructorInfo = async (setError, id) => {
  const url = `${
    e_learning.baseUrl
  }get_instructor/${id}?token=${localStorage.getItem("access_token")}`;
  const res = await e_learning.getAPI(url);
  if (res.status && res.status === 200) {
    return res.data.result[0];
  } else {
    setError(true);
  }
};
//submit  Assignment
e_learning.submit_assignment = async (dataToSubmit, close, setsubmit) => {
  const api = `${e_learning.baseUrl}submit_assignment`;
  const res = await e_learning.postAPI(api, dataToSubmit);
  if (res.status && res.status === 200) {
    close(false);
    setsubmit(true);
  }
};
//get all Courses that enrolled by specific student
e_learning.getCourses = async (setError) => {
  const url = `${e_learning.baseUrl}get_enrolled?token=${localStorage.getItem(
    "access_token"
  )}`;
  const res = await e_learning.getAPI(url);
  if (res.status && res.status === 200) {
    return res.data;
  } else {
    setError(true);
  }
};

//get all Courses that enrolled by specific student
e_learning.getAllCourses = async (setError) => {
  const url = `${
    e_learning.baseUrl
  }get_all_Courses?token=${localStorage.getItem("access_token")}`;
  const res = await e_learning.getAPI(url);
  if (res.status && res.status === 200) {
    return res.data;
  } else {
    setError(true);
  }
};

//save Instructor info to load them on seach coures
e_learning.getInstructor = async (data, setError) => {
  let ins = await Promise.all(
    data.map((d) => e_learning.getInstructorInfo(setError, d.course.assign_to))
  );
  return ins;
};

//save Instructor info to load them on seach coures
e_learning.getInstructorForAdmin = async (data, setError) => {
  let ins = await Promise.all(
    data.map((d) => e_learning.getInstructorInfo(setError, d.assign_to))
  );
  return ins;
};

//get Instructor info
e_learning.getInstructors = async (setError) => {
  const url = `${
    e_learning.baseUrl
  }get_instructors?token=${localStorage.getItem("access_token")}`;
  const res = await e_learning.getAPI(url);
  if (res.status && res.status === 200) {
    return res.data.result;
  } else {
    setError(true);
  }
};

e_learning.addCourse = async (
  code,
  name,
  instructorId,
  setError,
  close,
  addedCourse
) => {
  const api = `${e_learning.baseUrl}add_course`;
  const dataToSubmit = new FormData();
  dataToSubmit.append("token", localStorage.getItem("access_token"));
  dataToSubmit.append("code", code);
  dataToSubmit.append("name", name);
  dataToSubmit.append("instructorId", instructorId);
  const res = await e_learning.postAPI(api, dataToSubmit);
  if (res.status && res.status === 200) {
    close(false);
    addedCourse(true);
  } else {
    setError(true);
  }
};

export default e_learning;
