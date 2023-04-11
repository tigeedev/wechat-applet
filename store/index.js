import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 是否登录标识
		hasLogin: false,
		// 账号信息
		userInfo: {}
	},
	mutations: {
		//登录
		login(state, userInfo) {
			state.hasLogin = true
			// 从一个或多个源对象复制到目标对象, 相同属性会被覆盖
			state.userInfo = Object.assign({}, state.userInfo, userInfo);
			
			//将用户信息保存在本地
			uni.setStorageSync('userInfo', state.userInfo)
		},
		//退出登录
		logout(state) {
			state.userInfo = {}
			state.hasLogin = false
			uni.removeStorageSync('userInfo')
		}
	}
})

export default store