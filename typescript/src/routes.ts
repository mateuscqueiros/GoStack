import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: "mateuscqueiros@gmail.com",
        password: "123456"
    });

    console.log(user.email)

    return response.json({ message: 'Hello World!' })
}