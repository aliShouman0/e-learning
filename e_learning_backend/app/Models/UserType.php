<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model  ;
class UserType extends Model
{
    protected $table = 'users_type';
    use HasFactory;
}
