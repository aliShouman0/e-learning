<?php

use App\Http\Controllers\MainController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::group(["prefix" => "v0.1"], function () {
  Route::group([
    'middleware' => 'guard',
  ], function () {
    //get my data
    Route::post('me', [AuthController::class, 'me']);
    //logout
    Route::post('logout', [AuthController::class, 'logout']);
    //get jwt info
    Route::post('payload', [AuthController::class, 'payload']);
    //refresh jwt  
    Route::post('refresh', [AuthController::class, 'refresh']);
    //get all Courses that enrolled by specific student
    Route::get('get_course/{code}', [MainController::class, 'getCourse']);
    Route::get('get_enrolled', [MainController::class, 'getEnrolled']);
    //get all Announcements for specific Course
    Route::get('get_announcements/{code}', [MainController::class, 'getAnnouncements']);
    //get all Assignments for specific Course that not submit yet
    Route::get('get_assignments/{code}', [MainController::class, 'getAssignments']);
    //get Instructor info
    Route::get('get_instructor/{id}', [MainController::class, 'getInstructor']);
    //submit  Assignment 
    Route::post('submit_assignment', [MainController::class, 'submitAssignment']);
  });
  // add/signup  user
  // Route::post("signup", [AuthController::class, "signup"])->name("signup");
  //login
  Route::post('login', [AuthController::class, 'login'])->name("login");
});
 