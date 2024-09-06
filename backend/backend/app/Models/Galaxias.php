<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galaxias extends Model
{
    protected $table = 'tb_galaxia';
    protected $fillable = ['nome'];
    public function planetas()
    {
        return $this->hasMany(Planetas::class, 'galaxia_id');
    }
}
