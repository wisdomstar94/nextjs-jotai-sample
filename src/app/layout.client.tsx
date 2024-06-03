"use client"

import Link from "next/link";
import { ReactNode, useState } from "react";

export function RootLayoutClient(props: { children: ReactNode }) {
  const [menus, setMenus] = useState([
    { name: '/test/test1', href: '/test/test1' },
    { name: '/test/test2', href: '/test/test2' },
    { name: '/test/test3', href: '/test/test3' },
  ]);

  return (
    <>
      <div className="w-full relative box-border px-4 py-2">
        <ul className="w-full relative flex flex-wrap gap-2">
          {
            menus.map(menu => {
              return (
                <li key={menu.href} className="inline-flex">
                  <Link href={menu.href} className="inline-flex flex-wrap px-3 py-1.5 text-sm text-black border border-slate-500 hover:bg-slate-200">
                    { menu.name }
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className="w-full relative box-border px-4 py-2">
        { props.children }
      </div>
    </>
  );
}