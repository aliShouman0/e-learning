<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;
    public function submit()
    {
        return $this->belongsTo(Submit::class, "assignment_id");
    }
}