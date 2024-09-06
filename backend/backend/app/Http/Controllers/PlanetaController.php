<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlanetaRequest;
use App\Models\Planetas;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class PlanetaController extends Controller
{
    public function listar()
    {
       $planetas = Planetas::with('galaxia')->get();
       return response()->json($planetas);
    }

    public function criar(StorePlanetaRequest $request)
    {
      try {
        $planeta = Planetas::create($request->validated());
        return response()->json([
            'success' => true,
            'planeta' => $planeta,
        ], 201);
      } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => $e->getMessage(),
        ], 400);
      }
    }

    public function find($id)
    {
        try {

            $planeta = Planetas::with('galaxia')->findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $planeta,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => "Planeta não encontrado T-T",
            ], 404);
        }
    }

    public function atualizar(Request $request, $id)
    {
        $novonome = $request->validate([
            'nome' => 'required|string|max:50',
        ]);

        try {
            $planeta = Planetas::findOrFail($id);
            $planeta->nome = $novonome['nome'];
            $planeta->save();

            return response()->json([
                'success' => true,
                'message' => 'Nome do planeta atualizado ;)',
                'data' => $planeta,
            ]);
        } catch (ModelNotFoundException) {
            return response()->json([
                'success' => false,
                'message' => 'Planeta não encontrado T-T',
            ], 404);
        }
    }

    public function deletar($id)
    {
        try {
            $planeta = Planetas::findOrFail($id);
            $planeta->delete();

            return response()->json([
                'success' => true,
                'message' => 'Planeta excluído com sucesso',
            ]);
        } catch (ModelNotFoundException) {
            return response()->json([
                'success' => false,
                'message' => 'Planeta não encontrado',
            ], 404);
        }
    }
}
