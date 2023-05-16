import {defineStore} from 'pinia'
import axios from 'axios'

const homeViewDataStore = defineStore({
    id: 'homeViewDataStore',
    state: () => ({
        homeViewData: {
            welcomeScreen: {},
            blogPosts: [],
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

export { homeViewDataStore }