import React from "react";
import { Link, router } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button"

interface Cita {
    id: number;
    nombre: string;
    fecha: string;
    hora: string;
    motivo: string;
    estado: string;
}

interface CitasTableProps {
    citas: Cita[];
}

const CitasTable: React.FC<CitasTableProps> = ({ citas }) => {
    const eliminarCita = (id: number) => {
        if (confirm("¿Estás seguro de que deseas eliminar esta cita?")) {
            router.delete(route("citas.destroy", id), {
                onSuccess: () => alert("Cita eliminada correctamente"),
                onError: (errors: unknown) => alert("Error al eliminar la cita"),
            });
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-black">
                        <th className="border text-black p-2">#</th>
                        <th className="border p-2">Nombre</th>
                        <th className="border p-2">Fecha</th>
                        <th className="border p-2">Hora</th>
                        <th className="border p-2">Motivo</th>
                        <th className="border p-2">Estado</th>
                        <th className="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {citas.length > 0 ? (
                        citas.map((cita, index) => (
                            <tr key={cita.id} className="text-center">
                                <td className="border text-black p-2">{index + 1}</td>
                                <td className="border text-black p-2">{cita.nombre}</td>
                                <td className="border text-black p-2">{cita.fecha}</td>
                                <td className="border text-black p-2">{cita.hora}</td>
                                <td className="border text-black p-2">{cita.motivo}</td>
                                <td className="border text-black p-2">{cita.estado}</td>
                                <td className="border text-black p-2">
                                    <button onClick={() => eliminarCita(cita.id)} className={buttonVariants({ variant: "destructive" })}>
                                        Eliminar
                                    </button>
                                    <Link href={route("citas.edit", cita.id)} className={buttonVariants({ variant: "secondary" })}>
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center p-4 text-gray-500">
                                No hay citas registradas.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CitasTable;