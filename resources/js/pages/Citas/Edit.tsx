import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";

interface Cita {
    id: number;
    nombre: string;
    fecha: string;
    hora: string;
    motivo: string;
    estado: string;
}

interface PageProps {
    cita: Cita;
}

const EditCita: React.FC<PageProps> = ({ cita }) => {
    const { data, setData, put, processing, errors } = useForm({
        nombre: cita.nombre,
        fecha: cita.fecha,
        hora: cita.hora,
        motivo: cita.motivo,
        estado: cita.estado,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("citas.update", cita.id));
    };

    return (
        <AppLayout>
            <Head title="Editar Cita" />
            <div className="w-full mt-10 mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4 text-black">✏️ Editar Cita</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre:</label>
                        <input type="text" value={data.nombre} onChange={(e) => setData("nombre", e.target.value)}
                            className="w-full border text-black p-2 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Fecha:</label>
                        <input type="date" value={data.fecha} onChange={(e) => setData("fecha", e.target.value)}
                            className="w-full border text-black p-2 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Fecha:</label>
                        <input type="time" value={data.hora} onChange={(e) => setData("hora", e.target.value)}
                            className="w-full border text-black p-2 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre:</label>
                        <input type="text" value={data.motivo} onChange={(e) => setData("motivo", e.target.value)}
                            className="w-full border text-black p-2 rounded" required />
                    </div>

                    <div>
                    < label className="block font-bold text-gray-700">Estado:</label>
                        <select
                            value={data.estado}
                        onChange={(e) => setData("estado", e.target.value)}
                        className="border p-2 w-full text-black"
                        >
                            <option value="pendiente">Pendiente</option>
                            <option value="completada">Completada</option>
                            <option value="cancelada">Cancelada</option>
                        </select>
                            {errors.estado && <p className="text-red-500">{errors.estado}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                        {processing ? "💾 Guardando Cambio..." : "Guardar Cita"}
                    </button>
                </form>
            </div>
        </AppLayout>
    );
};

export default EditCita;
