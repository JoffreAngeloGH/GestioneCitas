import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import CitasTable from "@/components/CitasTable";
import { buttonVariants } from "@/components/ui/button"

interface Cita {
    id: number;
    nombre: string;
    fecha: string;
    hora: string;
    motivo: string;
    estado: string;
}

interface PageProps extends Record<string, unknown> {
    citas: Cita[];
}

const CitasIndex: React.FC = () => {
    const { citas } = usePage<PageProps>().props;

    console.log(citas); // Verificar los datos obtenidos

    return (
        <AppLayout>
            <Head title="Listado de Citas" />
            <div className="w-full mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl text-black font-bold mb-4">Listado de Citas</h2>
                
                <div className="flex justify-end mb-4">
                    <Link href={route("citas.create")} className={buttonVariants({ variant: "outline" })}>
                        Agendar Nueva Cita
                    </Link>
                </div>

                <CitasTable citas={citas} />

                <div className="flex justify-end mt-4">
                    <Link href={route("dashboardgl")} className={buttonVariants({ variant: "outline" })}>
                        Regresar
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
};

export default CitasIndex;