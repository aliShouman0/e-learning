import Footer from "./Footer";
import Header from "./Header";
import Course from "./Course";
import courseImg from "../assets/course.png";
import userImg from "../assets/user.png";
import e_learning from "../scripts";




  return (
    <>
      <Header avatar={avatar}  name={name}/>
      <main className="student-main">
        <Course
          is_std={true}
          instructors={"Ali"}
          course_nb={"M1101"}
          img_instructors={userImg}
          img_course={courseImg}
        /> 
      </main>
      <Footer />
    </>
  );
}

export default Student;
