<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;




class MainController extends Controller
{
    //get all Courses that enrolled by specific student
    function getCourses()
    {
        $user_id = Auth::id();
        $result = Course::with("enrolled")->where("user_id", $user_id)->get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }

    function getAnnouncements($code)
    {
        
        $result = Course::with("enrolled")->where("course_code", $code)->get();
        if ($result)
            return response()->json([
                "status" => true,
                "result" => $result
            ]);
        return response()->json([
            "status" => false
        ]);
    }
}
