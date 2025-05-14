import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-4">
            {/* Sidebar */}
            <aside className="bg-green-100 p-4 md:min-h-screen">
                <h2 className="text-xl font-semibold mb-4">Dashboard Menu</h2>
                <ul className="space-y-3">
                    <li><NavLink to="/dashboard/overview" className="hover:underline p-1">📊 Overview</NavLink></li>
                    <li><NavLink to="/dashboard/profile" className="hover:underline p-1">👤 Profile</NavLink></li>
                    <li><NavLink to="/dashboard/addEquipment" className="hover:underline p-1">➕ Add Equipment</NavLink></li>
                    <li><NavLink to="/dashboard/myEquipments" className="hover:underline p-1">📋 My Equipments</NavLink></li>
                </ul>
            </aside>

            {/* Content */}
            <main className="col-span-3 p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
