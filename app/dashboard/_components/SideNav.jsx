"use client";
import React from "react";
import Image from "next/image";
import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

function SideNav() {
    const { user } = useKindeBrowserClient();

    const menuList = [
        {
            id: 1,
            name: "Dashboard",
            icon: LayoutIcon,
            path: "/dashboard",
        },
        {
            id: 2,
            name: "Students",
            icon: GraduationCap,
            path: "/dashboard/students",
        },
        {
            id: 3,
            name: "Attendance",
            icon: Hand,
            path: "/dashboard/attendance",
        },
        {
            id: 4,
            name: "Settings",
            icon: Settings,
            path: "/dashboard/settings",
        },
    ];

    return (
        <div>
            <div className="border border-red-500 shadow-md h-screen p-5">
                <Image
                    src="/logo.svg"
                    width={180}
                    height={50}
                    alt="logo"
                />
                <hr className="my-5" />
                {menuList.map((menu) => (
                    <Link href={menu.path} key={menu.id}>
                        <div className="flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-slate-500 hover:text-white cursor-pointer rounded-lg my-2">
                            <menu.icon />
                            {menu.name}
                        </div>
                    </Link>
                ))}
                <div className="flex gap-2 items-center bottom-5 fixed">
                    <Image
                        src={
                            user && user.photoURL
                                ? user.photoURL
                                : "https://banner2.cleanpng.com/20240104/kpx/transparent-yellow-circle-yellow-circular-shape-with-white-face-tilted-1710940294899.webp"
                        }
                        width={35}
                        height={35}
                        alt="user"
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="text-sm font-bold">
                            {user?.given_name} {user?.family_name}
                        </h2>
                        <h2 className="text-xs text-slate-400">{user?.email}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
