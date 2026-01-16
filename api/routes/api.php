<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/blogs', [BlogController::class, 'getBlogs'])->middleware('auth:sanctum');
Route::post('/blog/add', [BlogController::class, 'addBlog'])->middleware('auth:sanctum');
