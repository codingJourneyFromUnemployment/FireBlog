import {defineStore} from 'pinia'
import axios from 'axios'

const postViewDataStore = defineStore({
    id: 'postViewDataStore',
    state: () => ({
        postViewData: {
            welcomeScreen: {},
            blogPosts: [],
            navigationShow: true,
            footerShow: true,
        }
    }),
    actions: {
        async getpostViewData() {
            try {
                const res = await axios.get('http://localhost:5173/api/postViewData')
                this.postViewData = res.data
            } catch (err) {
                console.log(err)
            }
        }
    }
})

const blogsViewDataStore = defineStore({
    id: 'blogsViewDataStore',
    state: () => ({
        editPost: false,
    })
})

const userDataStore = defineStore({
    id: 'userDataStore',
    state: () => ({
        userData:{
            id: '',
            userInfo: {
                username: '',
                password: '',
                email: ''
            },
            userStatus: {
                loggedIn: false,
                registered: false,
                admin: false
            }
        },
        allUsers: [],
    }),
    actions: {
        userDataStoreInit () {
            this.userData = {
                id: '',
                userInfo: {
                    username: '',
                    password: '',
                    email: ''
                },
                userStatus: {
                    loggedIn: false,
                    registered: false,
                    admin: false
                }
            }
        },
        async register (userName, userEmail, userPassword) {
            await this.getallUsers() 
            let user = this.allUsers.find(user => userEmail === user.userInfo.email)
            if (user) {
                throw new Error('这个邮箱已经注册过了')
            }
            let id = Math.floor(Math.random() * 1000000000);
            user = this.userData
            user.id = id
            user.userInfo.username = userName
            user.userInfo.email = userEmail
            user.userInfo.password = userPassword
            user.userStatus.registered = true
            user.userStatus.loggedIn = true
            this.userData = user
            await axios.post('http://localhost:5173/api/userData', this.userData);
        },
        async getallUsers () {
            const res = await axios.get('http://localhost:5173/api/userData')
            this.allUsers = res.data
        },
        async login (userEmail, userPassword) { 
            await this.getallUsers()
            const user = this.allUsers.find(user => userEmail === user.userInfo.email)
            if (!user) {
                throw new Error('这个邮箱尚未注册')
            } else if (userPassword !== user.userInfo.password) {
                throw new Error('密码错误')
            }
            user.userStatus.loggedIn = true
            this.userData = user
            await axios.put(`http://localhost:5173/api/userData/${user.id}`, user);
        },
        async logout () {
            const user = this.userData
            user.userStatus.loggedIn = false
            await axios.put(`http://localhost:5173/api/userData/${user.id}`, user);
        },
        async resetPassword () {
            await this.getallUsers()
            const user = this.allUsers.find(user => this.userData.userInfo.email === user.userInfo.email)
            if (!user) {
                throw new Error('这个邮箱尚未注册')
            }
            this.userData.userStatus.loggedIn = false
            this.userData.userStatus.registered = true
            this.userData = user
        },
        async updateUserProfile (newUserName, newUserEmail) {
            await this.getallUsers();
            const user = this.allUsers.find(user => this.userData.userInfo.email === user.userInfo.email)
            if (newUserName !== '') {
                user.userInfo.username = newUserName;
            }
            if (newUserEmail !== '') {
                user.userInfo.email = newUserEmail;
            }
            await axios.put(`http://localhost:5173/api/userData/${user.id}`, user);
            this.userData = user
        },
        async adminAuth (newAdminEmail) {
            await this.getallUsers();
            const newAdmin = this.allUsers.find(user => newAdminEmail === user.userInfo.email)
            if (!newAdmin) {
                throw new Error('这个邮箱尚未注册')
            }
            if (newAdmin.userStatus.admin === true) {
                throw new Error('这个用户已经是管理员了')
            }
            newAdmin.userStatus.admin = true
            await axios.put(`http://localhost:5173/api/userData/${newAdmin.id}`, newAdmin);
        },
    }
})  

const modalDataStore = defineStore({
    id: 'modalDataStore',
    state: () => ({
        message: '这是一个测试的弹窗，点击按钮关闭',
        modalShow: false,
        loadingShow: false,
    }),
})

const NavViewDataStore = defineStore({
    id: 'NavViewDataStore',
    state: () => ({
        mobileNav: false,
        profileMenuShow: false,
        profileMenuDetailShow: false,
        loginButtonShow: true,
    }),
})

export { postViewDataStore, blogsViewDataStore, userDataStore, modalDataStore, NavViewDataStore }