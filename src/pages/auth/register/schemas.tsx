import z from 'zod'

const signUpSchema = z.object({
    username: z.string().max(10).min(3),
    email: z.string().email(),
    password: z.string().min(5)
})

export default signUpSchema
