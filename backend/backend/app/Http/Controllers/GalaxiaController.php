<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGalaxiaRequest;
use App\Models\Galaxias;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class GalaxiaController extends Controller
{

    public function listar()
    {
    //    return response()->json('af');
       $galaxias = Galaxias::with('planetas')->get();
       return response()->json($galaxias);


    }

    public function criar(StoreGalaxiaRequest $request)

    {


      try {
        $galaxia = Galaxias::create($request->all()); //transforma o json no formado do PHP - pego na documentação.
        return response()->json([
            'success' => true,
            'galaxia' => $galaxia,
        ], 201);

      }
      catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => $e->getMessage(),
        ], 400);
      }

    }


    public function find($id)
{
    try {
        // galaxia c planats
        $galaxia = Galaxias::with('planetas')->findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $galaxia,
        ]);
    } catch (ModelNotFoundException) {
        return response()->json([
            'success' => false,
            'message' => "Galáxia não encontrada T-T",
        ], 404);
    }
}

public function atualizar(Request $request,$id){

    $nomenovo = $request->validate([
        'nome' => 'required|string|max:10',
    ]); //oi, é pra ter ceteza q é string

    try {

        $galaxia = Galaxias::findOrFail($id);
        $galaxia->nome = $nomenovo['nome'];
        $galaxia->save();

        return response()->json([
            'success' => true,
            'message' => 'Nome da galáxia atualizado com sucesso :D',
            'data' => $galaxia,
        ]);
    }
    catch (ModelNotFoundException ) {
        return response()->json([
            'success' => false,
            'message' => 'Galáxia não encontrada T-T',
        ], 404);
    }


    // catch (\Exception $e) {
    //     return response()->json([
    //         'success' => false,
    //         'message' => 'Erro ao atualizar galáxia',
    //     ], 500);
    // }

}

public function deletar($id){

    try {

        $galaxia = Galaxias::findOrFail($id);
        $galaxia->delete();

        return response()->json([
            'success' => true,
            'message' => 'Galáxia excluída com sucesso :D',
        ]);
    } catch (ModelNotFoundException) {
        return response()->json([
            'success' => false,
            'message' => 'Galáxia não encontrada T-T',
        ], 404);
    }
    // catch (\Exception $e) {
    //     return response()->json([
    //         'success' => false,
    //         'message' => 'Erro ao excluir galáxia',
    //     ], 500);
    // }

}


}
