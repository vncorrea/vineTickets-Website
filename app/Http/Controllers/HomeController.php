<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public static function index()
    {
        return view('home');
    }

   public function getEvents() {
        $events = Event::all();

        return response()->json($events);
   }

   public function register() {
    return view('register');
   }
}
