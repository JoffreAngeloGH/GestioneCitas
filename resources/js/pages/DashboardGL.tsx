import React from "react";
import { Link, usePage } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import CitasTableView from "@/components/CitaTableView";
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

const DashboardGL: React.FC = () => {
    const { citas } = usePage<PageProps>().props;
    console.log(citas); // Verificar los datos obtenidos
    return (
        <AppLayout>
            <h1 className="text-2xl mt-10 font-bold">Gestionar citas</h1>
            <div className="mt-4">
                <Link
                    href="/citas/crear"
                    className={buttonVariants({ variant: "outline" })}
                >
                    Agendar Cita
                </Link>
                <Link
                    href="/citas"
                    className={buttonVariants({ variant: "outline" })}
                >
                    Editar citas
                </Link>
            </div>
            <div className="mt-8">
                {citas ? <CitasTableView citas={citas} /> : <p>Cargando citas...</p>}
            </div>
        </AppLayout>
    );
};

export default DashboardGL;