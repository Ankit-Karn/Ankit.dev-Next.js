"use client"
import React from 'react'
import Link from "next/link";
import styles from './Navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>ankit.dev</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map(link =>(
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        <button onClick={()=>console.log("Logged out")} className={styles.logout}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
