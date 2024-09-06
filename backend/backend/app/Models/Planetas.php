<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Planetas extends Model
{
    protected $table = 'tb_planetas';
    protected $fillable = ['nome', 'galaxia_id'];
    public function galaxia()
    {
        return $this->belongsTo(Galaxias::class, 'galaxia_id');
    }
}
