import React from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";

import { buttonVariants } from "@/components/ui/button"


const CreateCita: React.FC = () => {
    const { data, setData, post, processing, errors } = useForm({
        nombre: "",
        fecha: "",
        hora: "",
        motivo: "",
        estado: "Pendiente",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("citas.store"));
    };

    return (
        <AppLayout>
            <Head title="Agendar Cita" />
            <div className="w-full mt-10 mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl text-black font-bold mb-4">Agendar Nueva Cita</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Nombre:</label>
                        <input
                            type="text"
                            value={data.nombre}
                            onChange={(e) => setData("nombre", e.target.value)}
                            className="w-full p-2 border text-black rounded"
                        />
                        {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Fecha:</label>
                        <input
                            type="date"
                            value={data.fecha}
                            onChange={(e) => setData("fecha", e.target.value)}
                            className="w-full p-2 border text-black rounded"
                        />
                        {errors.fecha && <p className="text-red-500">{errors.fecha}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Hora:</label>
                        <input
                            type="time"
                            value={data.hora}
                            onChange={(e) => setData("hora", e.target.value)}
                            className="w-full p-2 border text-black rounded"
                        />
                        {errors.hora && <p className="text-red-500">{errors.hora}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Motivo:</label>
                        <textarea
                            value={data.motivo}
                            onChange={(e) => setData("motivo", e.target.value)}
                            className="w-full p-2 border text-black rounded"
                        />
                        {errors.motivo && <p className="text-red-500">{errors.motivo}</p>}
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
                        className={buttonVariants({ variant: "secondary" })}
                    >
                        {processing ? "Guardando..." : "Agendar Cita"}
                    </button>
                </form>
            </div>
        </AppLayout>
    );
};

export default CreateCita;
