<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_type', function (Blueprint $table) {
            $table->id();
            $table->string("type");
            $table->timestamps();
        });

        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string("code")->unique();
            $table->string("name");
            $table->string("credits");
            $table->string("assign_to")->default('NA')
                ->references('id')->on('users');
            $table->string('image_path')->default('NA');
            $table->timestamps();
        });

        Schema::create('enrollees', function (Blueprint $table) {
            $table->id();
            $table->string("user_id")->references('id')->on('users');
            $table->string("course_code")->references('code')->on('courses');
            $table->string("mark");
            $table->timestamps();
        });

        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->string("user_id")->references('id')->on('users');
            $table->string("course_code")->references('code')->on('courses');
            $table->string("text");
            $table->timestamps();
        });

        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            $table->string("user_id")->references('id')->on('users');
            $table->string("course_code")->references('code')->on('courses');
            $table->string("text");
            $table->timestamps("deadline");
            $table->timestamps();
        });

        Schema::create('submits', function (Blueprint $table) {
            $table->id();
            $table->string("user_id")->references('id')->on('users');
            $table->string("assignment_id");
            $table->string("file_path");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('submit');
        Schema::dropIfExists('assignments');
        Schema::dropIfExists('announcements');
        Schema::dropIfExists('courses');
        Schema::dropIfExists('enrollees');
        Schema::dropIfExists('users_type');
    }
};
