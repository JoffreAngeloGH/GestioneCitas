<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CitaController extends Controller
{

    public function dashboard()
    {
        $totalCitas = Cita::count();
        $proximasCitas = Cita::whereDate('fecha', '>=', now())->count();
        $citasCanceladas = Cita::where('estado', 'cancelada')->count();
        $citasRecientes = Cita::latest()->take(5)->get();

        return Inertia::render('Citas/Dashboard', [
            'totalCitas' => $totalCitas,
            'proximasCitas' => $proximasCitas,
            'citasCanceladas' => $citasCanceladas,
            'citasRecientes' => $citasRecientes
        ]);
    }


    public function dashboardGL()
    {
        $citas = Cita::orderBy('fecha', 'asc')->get();
        return Inertia::render('DashboardGL', ['citas' => $citas]);
    }

    public function destroy(Cita $cita)
    {
        $cita->delete();
        return redirect()->route('citas.index')->with('success', 'Cita eliminada correctamente');
    }


    public function update(Request $request, Cita $cita)
    {
    $request->validate([
        'nombre' => 'required|string|max:255',
        'fecha' => 'required|date',
        'hora' => 'required',
        'motivo' => 'required|string|max:500',
        'estado' => 'required|string|in:pendiente,completada,cancelada',
    ]);

    $cita->update($request->all());

    return redirect()->route('citas.index')->with('success', 'Cita actualizada correctamente');
    }

    public function edit(Cita $cita){
        return Inertia::render('Citas/Edit', ['cita' => $cita]);
    } 

    public function index()
    {
        $citas = Cita::orderBy('fecha', 'asc')->get();
        return Inertia::render('Citas/Index', ['citas' => $citas]);
    }

    public function create()
    {
        return Inertia::render('Citas/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'fecha' => 'required|date',
            'hora' => 'required',
            'motivo' => 'required|string|max:500',
        ]);

        Cita::create($request->all());

        return Redirect::route('citas.index')->with('success', 'Cita agendada correctamente.');
    }
}
