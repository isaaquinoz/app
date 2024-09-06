<?php
use App\Http\Controllers\PlanetaController;
use App\Http\Controllers\GalaxiaController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});
Route::get('/galaxias', [GalaxiaController::class, 'listar'])->name('galaxias.listar');
Route::post('/galaxias', [GalaxiaController::class, 'criar'])->name('galaxias.criar');
Route::get('/galaxias/{id}', [GalaxiaController::class, 'find'])->name('galaxias.find');
Route::post('/galaxias/{id}', [GalaxiaController::class, 'atualizar'])->name('galaxias.atualizar');
Route::delete('/galaxias/{id}', [GalaxiaController::class, 'deletar'])->name('galaxias.deletar');


Route::get('/planetas', [PlanetaController::class, 'listar'])->name('planetas.listar');
Route::post('/planetas', [PlanetaController::class, 'criar'])->name('planetas.criar');
Route::get('/planetas/{id}', [PlanetaController::class, 'find'])->name('planetas.find');
Route::post('/planetas/{id}', [PlanetaController::class, 'atualizar'])->name('planetas.atualizar');
Route::delete('/planetas/{id}', [PlanetaController::class, 'deletar'])->name('planetas.deletar');
