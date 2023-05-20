import {defineStore} from 'pinia'
import axios from 'axios'

const homeViewDataStore = defineStore({
    id: 'homeViewDataStore',
    state: () => ({
        homeViewData: {
            welcomeScreen: {},
            blogPosts: [],
            navigationShow: true,
            footerShow: true,
        }
    }),
    actions: {
        async getHomeViewData() {
            try {
                const res = await axios.get('http://localhost:5000/homeViewData')
                this.homeViewData = res.data
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
        user: {
            username: '',
            password: '',
            email: '',
            login: false
        }
    }),
    actions: {
        valadateUserName() {
            if (!this.user.username.length) {
                return "用户名不能为空";
            } else if (this.user.username.length < 3) {
                return "用户名长度不能小于3位";
            } else {
                return true;
            }
        },
        valadatePassword() {
            if (!this.user.password.length) {
                return "密码不能为空";
            } else if (this.user.password.length < 6) {
                return "密码长度不能小于6位";
            } else {
                return true;
            }
        },
        valadateEmail() {
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!this.user.email.length) {
                return "邮箱不能为空";
            } else if (!regex.test(this.user.email)) {
                return "邮箱格式不正确";
            } else {
                return true;
            }
        },
    },
})

const modalDataStore = defineStore({
    id: 'modalDataStore',
    state: () => ({
        message: '这是一个测试的弹窗，点击按钮关闭',
        modalShow: false,
        loadingShow: false,
    }),
})

export { homeViewDataStore, blogsViewDataStore, userDataStore, modalDataStore }