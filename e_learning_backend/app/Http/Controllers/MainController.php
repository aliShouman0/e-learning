<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Announcement;
use App\Models\Assignment;
use App\Models\Submit;
use App\Models\Enrolled;
use Illuminate\Support\Facades\Auth;




class MainController extends Controller
{
    //get all Courses that enrolled by specific student whereIn("code", Enrolled::select("course_code")
           // ->where("user_id", $user_id)->get())with("enrolled")->get();
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
            ->whereNot("id", Submit::select('assignment_id')
                ->where("user_id", $user_id)
                ->where("course_code", $code)
                ->get())
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

    //submit Assignment
    function submitAssignment(Request $request)
    {
        $id = Auth::id();
        $submit = new Submit;
        if ($request->assignment_id && $request->file) {
            $submit->user_id = $id;
            $submit->assignment_id = $request->assignment_id;
            $submit->file_path = $request->file;
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
