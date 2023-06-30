import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any
const required = (value: string) => {
    if (!value.trim()) {
        return {
            validate: false,
            message: proxy.$t('validate.required')
        }
    }
    return {
        validate: true
    }
}

const email = (value: string) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!regex.test(value.trim())) {
        return {
            validate: false,
            message: proxy.$t('validate.email')
        }
    }
    return {
        validate: true
    }
}

const password = (value: string) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value.trim())) {
        return {
            validate: false,
            message: proxy.$t('validate.password')
        }
    }
    return {
        validate: true
    }
}

module.exports = {
    required,
    email,
    password
}
