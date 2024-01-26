// components/layout.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = " ";
export const siteTitle = "Unbound - Limitless careers";

export default function Layout({ children, home }) {
  return (
    <div className="flex min-h-screen items-center justify-between p-24 bg-black">
        {children}
    </div>
  );
}
