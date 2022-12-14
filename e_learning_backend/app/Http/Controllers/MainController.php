<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Announcement;
use App\Models\Assignment;
use App\Models\Submit;
use App\Models\Enrolled;
use App\Models\User;
use App\Models\UserType;

use Illuminate\Support\Facades\Auth;




class MainController extends Controller
{
    //get all Courses that enrolled by specific student  
    function getCourse($code)
    {
        $user_id = Auth::id();
        $result = Course::where("code", $code)->get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }
    function getEnrolled()
    {
        $user_id = Auth::id();
        $result = Enrolled::where("user_id", $user_id)->with("course")->get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }
    // getAllCourses
    function getAllCourses()
    {
        $result = Course::get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }
    //get all Announcements for specific Course
    function getAnnouncements($code)
    {

        $result = Announcement::where("course_code", $code)->get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }
    //get all Assignments for specific Course that not submit yet
    function getAssignments($code)
    {
        $user_id = Auth::id();
        $result = Assignment::where("course_code", $code)
            ->with("submit")
            ->where("submit", null)
            ->get();
        // $result =Submit::select('assignment_id')
        // ->where("user_id", $user_id) ->project(['_id' => 0])
        // ->get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }

    //submit Assignment
    function submitAssignment(Request $request)
    {
        $id = Auth::id();
        $submit = new Submit;
        if ($request->assignment_id && $request->file) {
            $submit->user_id = $id;
            $submit->assignment_id = $request->assignment_id;
            $submit->file_path = "request->file";
            if ($submit->save()) {
                return response()->json([
                    "status" => "Success",
                    "data" => $submit
                ]);
            }
        }

        return response()->json([
            "status" => "Error",
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }

    // get instructor info
    function getInstructor($id)
    {
        $result = User::where("_id", $id)
            ->get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }

    // get instructor info
    function getInstructors()
    {
        $type = UserType::where("type", "instructor")->get();
        $result = User::where("type_id", $type[0]->_id)
            ->get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }


    //add Course
    function addCourse(Request $request)
    {
        $submit = new Course;
        if ($request->code && $request->name && $request->instructorId) {
            $submit->code = $request->code;
            $submit->name = $request->name;
            $submit->assign_to = $request->instructorId;
            $submit->image_path = "NA";
            if ($submit->save()) {
                return response()->json([
                    "status" => "Success",
                    "data" => $submit
                ]);
            }
        }

        return response()->json([
            "status" => "Error",
            "data" => "Error -Some Thing went wrong "
        ], 400);
    }
}
