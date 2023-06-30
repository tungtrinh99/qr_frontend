import { defineStore } from "pinia"
import { reactive, ref, Ref } from "vue"
import { User } from "@/types/auth"
export const useAuthStore = defineStore('auth', () => {
    const token: Ref<string> = ref(localStorage.getItem('token') || '')
    const user = reactive<User>({
        id: 0,
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        avatar: ''
    })
    const setToken = (newToken: string) => {
        token.value = newToken;
    }
    const setUser = (newUser: User) => {
        user.id = newUser.id
        user.username = newUser.username
        user.email = newUser.email
        user.firstName = newUser.firstName
        user.lastName = newUser.lastName
        user.avatar = newUser.avatar
    }
    return {
        token,
        user,
        setUser,
        setToken
    }
})