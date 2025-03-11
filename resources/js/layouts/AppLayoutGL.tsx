import React, { ReactNode } from "react";
import { Link } from "@inertiajs/react";

interface Props {
    children: ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-blue-600 p-4 text-white flex justify-between">
                <div>
                    <Link href="/dashboard" className="font-bold">Inicio</Link>
                </div>
                <div>
                    <Link href="/logout" method="post" as="button" className="bg-red-500 px-4 py-2 rounded">Salir</Link>
                </div>
            </nav>
            <main className="p-6">{children}</main>
        </div>
    );
};

export default AppLayout;
