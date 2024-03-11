import Input from "../../../components/input"
import Button from "../../../components/button/button"
import Error from "../../../components/error/Error"
import Question from "../../../components/question/Question"
import Window from "../../../components/window/Window"
import Area from "../../../components/area/area"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import signInSchema from "./schemas"
import { zodResolver } from '@hookform/resolvers/zod'
import { sendRequest } from "../../../utils"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Answer from "../../../components/answer/Answer"

type SignInSchema = z.infer<typeof signInSchema>

const Login = () => {

    const [answer, setAnswer] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema)
    })

    const navigate = useNavigate()

    const signIn = async (properties: SignInSchema) => {
        const { data, ok } = await sendRequest('/user/login', {
            method: 'POST', body: JSON.stringify(properties)
        })
        setAnswer(data.message)

        if (ok) {
            localStorage.setItem('token', data.token)
            navigate('/MainPage')
        }
    }

    return (
        <Window>
            <h4>Sign In</h4>
            <form onSubmit={handleSubmit(signIn)} className="auth-container">
                <Area>
                    <Input {...register('email')} placeholder="email" type="text" register={register} name="email" />
                    {errors.email && (
                        <Error top="0" className='error'>{`${errors.email.message}`}</Error>
                    )}
                </Area>
                <Area>
                    <Input {...register('password')} type="password" placeholder="password" register={register} name="password" />
                    {errors.password && (
                        <Error top="0" className='error'>{`${errors.password.message}`}</Error>
                    )}
                </Area>
                <Answer>{answer}</Answer>
                <Button width="204px" height="30px" type="submit">{isSubmitting ? 'Loading...' : 'Sign Up'}</Button>
                <Question>Don't have an account <Link to='/'>Sign Up</Link></Question>
            </form>
        </Window>
    )
}

export default Login