'use client'

import {  
    Navbar,   
    NavbarBrand,   
    NavbarContent,   
    NavbarItem,   
    NavbarMenuToggle,  
    NavbarMenu,  
    NavbarMenuItem
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import Link from 'next/link'

export default function NavbarComponent({ loggedIn }: { loggedIn: boolean}) {
    return (
        <Navbar>
        <NavbarBrand>
        <p className="font-bold text-inherit">TATTVA BLOG</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <Link color="foreground" href="/">
            Home
            </Link>
        </NavbarItem>
        <NavbarItem>
            <Link href="/about" aria-current="page">
            About
            </Link>
        </NavbarItem>
        <NavbarItem>
            <Link color="foreground" href="/posts/">
            Posts
            </Link>
        </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
        <NavbarItem>
            {
                !loggedIn 
                 ? <Button as={Link} color="primary" href="/auth/register" variant="flat">Sign Up</Button>
                 : ''
            }
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
           { !loggedIn ? <Link href="/auth/login">Login</Link> :  <Link href="/auth/login">Logout</Link>}
        </NavbarItem>
        </NavbarContent>
    </Navbar>
    )
}