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
  data.append("token", e_learning.token);
  await e_learning.postAPI(api_logout, data);
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_info");
  navigate("/login");
};

// check if login by checking data in  localStorage
// check if user are login in and chck if token are valid
e_learning.checkLogin = async () => {
  if (!localStorage.getItem("access_token")) {
    localStorage.removeItem("user_info");
    console.log("1111 ");

    return false;
  }
  // get user info
  const user_info_url = `${e_learning.baseUrl}me`;
  const api_userInfo = new FormData();
  api_userInfo.append("token", localStorage.getItem("access_token"));
  const user_info = await e_learning.postAPI(user_info_url, api_userInfo);
  if (user_info.status && user_info.status === 200) {
    localStorage.setItem("user_info", JSON.stringify(user_info.data));
    return true;
  } else {
    // localStorage.removeItem("access_token");
    // localStorage.removeItem("user_info");
    return false;
  }
};

// login
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

e_learning.getAnnouncements = (course_nb) =>
  fetch(
    `${
      e_learning.baseUrl
    }get_announcements/${course_nb}?token=${localStorage.getItem(
      "access_token"
    )}`
  );
export default e_learning;
// // like user
// e_learning.likeUser = async (btn) => {
//   const url = e_learning.baseUrl + "/favor"
//   const data = new FormData();
//   data.append("token", e_learning.token);
//   data.append("favorite_id", btn.getAttribute("data-value"));
//   const res = await e_learning.postAPI(url, data);
//   const p = document.createElement("span");
//   if (res.data.status === "exists") {
//     p.innerText = "Already in Fav"

//   }
//   if (res.data.status === "Success") {
//     p.innerText = "Added Done"

//   }
//   btn.parentElement.appendChild(p);
//   setTimeout(() => {
//     btn.parentElement.removeChild(btn.parentElement.lastChild)
//   }, 3000)

// }

// // block user
// e_learning.blockUser = async (btn) => {
//   const url = e_learning.baseUrl + "/block"
//   const data = new FormData();
//   data.append("token", e_learning.token);
//   data.append("blocked_user_id", btn.getAttribute("value"));
//   const res = await e_learning.postAPI(url, data);
//   window.location.reload();

// }

// chat user
//when click on chat button will redirect to chat page and open like a new tab to chat with this user
// e_learning.chat = async (btn) => {
//   localStorage.setItem("letsChat", btn.getAttribute("value"));
//   location.href = "chat.html"
// }

// // add Event Listener when all user are present on screen for like block and chat
// e_learning.loadEvents = () => {
//   // get all block   btn and add addEventListener
//   const block = document.querySelectorAll(".block");
//   block.forEach(element => {
//     element.addEventListener("click", () => {
//       e_learning.blockUser(element);
//     })
//   });

//   // get all like   btn and add addEventListener
//   const like = document.querySelectorAll(".like");
//   like.forEach(element => {
//     element.addEventListener("click", () => {
//       e_learning.likeUser(element);
//     })
//   });

//   // get all chat   btn and add addEventListener
//   const chat = document.querySelectorAll(".chat");
//   chat.forEach(element => {
//     element.addEventListener("click", () => {
//       e_learning.chat(element);
//     })
//   });
// }
