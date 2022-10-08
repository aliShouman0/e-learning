<?php

use App\Http\Controllers\MainController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

*/

Route::group(["prefix"=>"v0.1"],function (){
    Route::group([

        'middleware' => 'api',
      //  'prefix' => 'auth'
    
    ], function () {
     // get my data
     Route::post('me', [AuthController::class, 'me']);
     // logout
     Route::post('logout', [AuthController::class, 'logout']);
     // get jwt info
     Route::post('payload', [AuthController::class, 'payload']);

     Route::post('refresh', [AuthController::class, 'refresh']);
     
    });
    Route::get("test",[MainController::class,"test"])->name("test");;
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