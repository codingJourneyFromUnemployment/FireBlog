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