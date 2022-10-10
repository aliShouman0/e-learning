<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
//use Illuminate\Foundation\Auth\User as Authenticatable;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;



class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens,  Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
