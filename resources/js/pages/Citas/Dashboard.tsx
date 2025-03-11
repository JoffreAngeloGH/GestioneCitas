import React from "react";
import { Head, usePage, Link } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";

import { PageProps } from "@inertiajs/core";

import { buttonVariants } from "@/components/ui/button"


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

interface DashboardProps extends PageProps {
    totalCitas: number;
    proximasCitas: number;
    citasCanceladas: number;
    citasRecientes: { id: number; nombre: string; fecha: string; estado: string }[];
}

const Dashboard: React.FC = () => {
    const { totalCitas, proximasCitas, citasCanceladas, citasRecientes } = usePage<DashboardProps>().props;

    return (
        <AppLayout>
            <Head title="Dashboard Citas" />
            
            {/* Sección del Dashboard con fondo blanco */}
            <div className="w-full max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-black">📊 Dashboard de Citas</h1>

                {/* Tarjetas de métricas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
                        <h3 className="text-lg">📅 Total de Citas</h3>
                        <p className="text-2xl font-bold">{totalCitas}</p>
                    </div>
                    <div className="bg-green-500 text-white p-4 rounded-lg shadow">
                        <h3 className="text-lg">🟢 Próximas Citas</h3>
                        <p className="text-2xl font-bold">{proximasCitas}</p>
                    </div>
                    <div className="bg-red-500 text-white p-4 rounded-lg shadow">
                        <h3 className="text-lg">❌ Citas Canceladas</h3>
                        <p className="text-2xl font-bold">{citasCanceladas}</p>
                    </div>
                </div>
            </div>

            {/* Tabla de citas recientes con estilos de shadcn/ui */}
            <h2 className="text-lg font-bold my-4">📌 Citas Recientes</h2>
            <Table>
                <TableCaption>Una lista de sus citas recientes.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Nombre</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acción</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {citasRecientes.length > 0 ? (
                        citasRecientes.map((cita) => (
                            <TableRow key={cita.id}>
                                <TableCell className="font-medium">{cita.nombre}</TableCell>
                                <TableCell>{cita.fecha}</TableCell>
                                <TableCell>{cita.estado}</TableCell>
                                <TableCell className="text-right">
                                    <Link href={route("citas.edit", cita.id)} className={buttonVariants({ variant: "secondary" })}>
                                        Editar
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center p-4 text-gray-500">
                                No hay citas recientes.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </AppLayout>
    );
};

export default Dashboard;
