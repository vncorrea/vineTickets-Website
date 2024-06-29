<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;


Route::prefix('/')->group(function () {
    Route::get('/', [HomeController::class, 'index']);
});