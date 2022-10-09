<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;




class MainController extends Controller
{
    //
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
}
