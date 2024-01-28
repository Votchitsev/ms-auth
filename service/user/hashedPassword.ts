import bcrypt from 'bcrypt'

class Password {
    static toHash (password: string, callback: (err: any, hash: string) => void) {
        bcrypt.hash(password, 10, callback)
    }
}

export default Password
