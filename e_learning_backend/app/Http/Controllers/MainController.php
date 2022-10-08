<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;
;


class MainController extends Controller
{
    //
    function test(){
        $res=Test::all();
        return response()->json([
            "status"=>"done",
            "res"=>$res
        ]);
    }
}
