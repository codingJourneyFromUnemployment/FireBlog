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
        async register () {
            try {
                await axios.post('http://localhost:5173/api/userData', this.userData)
            } catch (err) {
                console.log(err)
            }
        },
        async getallUsers () {
            try {
                const res = await axios.get('http://localhost:5173/api/userData')
                this.allUsers = res.data
            } catch (err) {
                console.log(err)
            }
        },
        async login () {
            await this.getallUsers()
            const user = this.allUsers.find(user => this.userData.userInfo.email === user.userInfo.email)
            if (!user) {
                throw new Error('这个邮箱尚未注册')
            } else if (this.userData.userInfo.password !== user.userInfo.password) { 
                throw new Error('密码错误')
            }
            this.userData = user
            this.userData.userStatus.loggedIn = true
            this.userData.userStatus.registered = true
        },
        async resetPassword () {
            await this.getallUsers()
            const user = this.allUsers.find(user => this.userData.userInfo.email === user.userInfo.email)
            if (!user) {
                throw new Error('这个邮箱尚未注册')
            }
            this.userData = user
            this.userData.userStatus.loggedIn = false
            this.userData.userStatus.registered = true
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

export { postViewDataStore, blogsViewDataStore, userDataStore, modalDataStore }