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
    Route::get('get_courses', [MainController::class, 'getCourses']);
    //get all Announcements for specific Course
    Route::get('get_announcements/{code}', [MainController::class, 'getAnnouncements']);
    //get all Assignments for specific Course
    Route::get('get_assignments/{code}', [MainController::class, 'getAssignments']);
  });
  // add/signup  user
  // Route::post("signup", [AuthController::class, "signup"])->name("signup");
  //login
  Route::post('login', [AuthController::class, 'login'])->name("login");
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::group([

//     'middleware' => 'api',
//     'prefix' => 'auth'

// ], function ($router) {

//     Route::post('login', 'AuthController@login');
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::post('me', 'AuthController@me');

// });