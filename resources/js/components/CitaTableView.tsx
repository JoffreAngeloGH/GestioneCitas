import React from "react";
import { Link, router } from "@inertiajs/react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

interface Cita {
    id: number;
    nombre: string;
    fecha: string;
    hora: string;
    motivo: string;
    estado: string;
}

interface CitasTableViewProps {
    citas: Cita[];
}

const CitasTableView: React.FC<CitasTableViewProps> = ({ citas }) => {
    return (
        <div className="overflow-x-auto">
            <Table>
            <TableCaption>Lista completa de citas registradas.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Hora</TableHead>
                    <TableHead>Motivo</TableHead>
                    <TableHead className="text-right">Estado</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {citas.length > 0 ? (
                    citas.map((cita, index) => (
                        <TableRow key={cita.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{cita.nombre}</TableCell>
                            <TableCell>{cita.fecha}</TableCell>
                            <TableCell>{cita.hora}</TableCell>
                            <TableCell>{cita.motivo}</TableCell>
                            <TableCell className="text-right">{cita.estado}</TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={6} className="text-center p-4 text-gray-500">
                            No hay citas registradas.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </div>
    );
};

export default CitasTableView;