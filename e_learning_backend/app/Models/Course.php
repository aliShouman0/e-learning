<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;


class Course extends Model
{
    use HasFactory;
    public function enrolled()
    {
        return $this->belongsTo(Enrolled::class, "course_code", "code");
    }

    public function instructor()
    {
        return $this->belongsTo(User::class, "assign_to", "id");
    }
}
