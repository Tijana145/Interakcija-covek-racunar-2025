import { UserModel } from "../app/models/user.model";

export class UserService {
    static getUsers(): UserModel[] {
        if (!localStorage.getItem('icr_users')) {
            localStorage.setItem('icr_users', JSON.stringify([
                {
                    firstName: "Example",
                    lastName: "Admin",
                    email: "example@123",
                    phone: "+38169123123",
                    password: "user123",
                    data:[]
                }
            ]))
        }
        return JSON.parse(localStorage.getItem('icr_users')!);
        }
        static findUserByMail(email: string) {
            const users = this.getUsers()
            const selectedUser = users.find(u => u.email === email)

            if (!selectedUser) 
                throw new Error('USER_NOT_FOUND')
            return selectedUser;
        }

        static login(email: string, password: string) {
            try {
                const user = this.findUserByMail(email)
                return user.password === password
            } catch {
                return false
            }
        }
        }
