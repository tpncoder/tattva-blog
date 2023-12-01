'use client'
import {  
    Navbar,   
    NavbarBrand,   
    NavbarContent,   
    NavbarItem,   
    NavbarMenuToggle,  
    NavbarMenu,  
    NavbarMenuItem
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import Link from 'next/link'
import { usePathname } from "next/navigation";

const itemStyles = {
    active: [
        "data-[active=true]:bg-blue-300",
        "data-[active=true]:p-2",
        "data-[active=true]:px-5",
        "data-[active=true]:rounded-full",
    ]
};

export default function NavbarComponent({ loggedIn }: { loggedIn: boolean }) {
    const pathname = usePathname();

    return (
        <Navbar 
            isBordered 
            classNames={{ 
                item: itemStyles.active
            }}
        >
            <NavbarBrand>
                <p className="font-bold text-inherit">TATTVA BLOG</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem {...(pathname == '/' ? { isActive: true } : {})}>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem {...(pathname == '/about' ? { isActive: true } : {})}>
                    <Link href="/about" aria-current="page" >
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem {...(pathname.includes('/posts') ? { isActive: true } : {})}>
                    <Link color="foreground" href="/posts/">
                        Posts
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    {!loggedIn && (
                        <Button as={Link} color="primary" href="/auth/register" variant="flat">
                            Sign Up
                        </Button>
                    )}
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    { 
                        !loggedIn 
                            ? <Link href="/auth/login">Login</Link>
                            : <Avatar src="/pfp.png" isBordered/>
                    }
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}