'use client'
import { login } from "./login";
import { useState } from "react"
import { InputField } from '@/components/InputField';
import { Card, CardBody, CardFooter, Button} from "@nextui-org/react"
import Link from "next/link"

export default function Login() {
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    
    const handleLogin = async () => {
        const res = await login({ "userName": userName, "password": password })
        setLoggedIn(res)
    }
    
    return (
        <main>
            <h1 className="text-3xl mb-4 font-bold">Welcome!</h1>
            <Card className="w-fit flex items-center">
                <CardBody>
                    <form action={() => login({"userName": userName, "password": password })}>
                        <InputField value="User Name" placeholder="Enter your username" setHook={setUserName}  />
                        <InputField value="Password" placeholder="Enter your password" setHook={setPassword}  />
                        <Button className="w-fit" type="submit" variant="ghost" color="primary">Submit</Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <p className="mt-3 text-gray-600">Already have an account? <Link href="/auth/login" className="text-sky-600">Log In</Link></p>
                </CardFooter>
            </Card>
        </main>
        )
    }