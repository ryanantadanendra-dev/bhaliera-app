<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/blogs', [BlogController::class, 'getBlogs']);
Route::post('/blog/add', [BlogController::class, 'addBlog'])->middleware('auth:sanctum');
Route::put('/blog/update/{id}', [BlogController::class, 'editBlog'])->middleware('auth:sanctum');
Route::delete('/blog/delete/{id}', [BlogController::class, 'deleteBlog'])->middleware('auth:sanctum');
Route::put('/blog/update/image/{id}', [BlogController::class, 'updateImage'])->middleware('auth:sanctum');
Route::get('/blogs/latest', [BlogController::class, 'latest']);
