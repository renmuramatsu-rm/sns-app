import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { $fetch } from 'ofetch'

const LARAVEL_BASE = process.env.LARAVEL_API_BASE || 'http://localhost:8000/api'

export default NuxtAuthHandler({
    pages: {
        signIn: "/login",
	},
})