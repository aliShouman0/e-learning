<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class Enrolled extends Model
{
    protected $table = 'enrollees';

    public function course()
    {
        return $this->belongsTo(Course::class, "course_code", "code");
    }
    public function instructor()
    {
        return $this->belongsTo(User::class, "assign_to", "_id");
    }

    use HasFactory;
}
