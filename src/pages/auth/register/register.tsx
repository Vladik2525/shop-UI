import Input from "../../../components/input"
import Button from "../../../components/button/button"
import Error from "../../../components/error/Error"
import Question from "../../../components/question/Question"
import Window from "../../../components/window/Window"
import Area from "../../../components/area/area"
import Answer from "../../../components/answer/Answer"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import signUpSchema from "./schemas"
import { zodResolver } from '@hookform/resolvers/zod'
import { sendRequest } from "../../../utils"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

type SignUpSchema = z.infer<typeof signUpSchema>

const Register = () => {
    const [answer, setAnswer] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema)
    })

    const navigate = useNavigate()

    const signUp = async (properties: SignUpSchema) => {
        const { data, ok } = await sendRequest('/user/register', {
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
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit(signUp)} className="auth-container">
                <Area>
                    <Input name="username" register={register} placeholder="username" type="text" />
                    {errors.username && (
                        <Error top="0" className='error'>{`${errors.username.message}`}</Error>
                    )}
                </Area>
                <Area>
                    <Input name="email" register={register} placeholder="email" type="text" />
                    {errors.email && (
                        <Error top="0" className='error'>{`${errors.email.message}`}</Error>
                    )}
                </Area>
                <Area>
                    <Input name="password" register={register} type="password" placeholder="password" />
                    {errors.password && (
                        <Error top="0" className='error'>{`${errors.password.message}`}</Error>
                    )}
                </Area>
                <Answer>{answer}</Answer>
                <Button height="30px" width="204px" type="submit">{isSubmitting ? 'Loading...' : 'Sign Up'}</Button>
                <Question>Alheady have an account <Link to='/Login'>Sign In</Link></Question>
            </form>
        </Window>
    )
}

export default Register