<?php
namespace App\Http\Controllers;

class IndexController extends Controller
{
    /**
     * HomeController constructor.
     */
    public function __construct()
    {
    }

    public function index()
    {
        return view('front/home');
    }
}
