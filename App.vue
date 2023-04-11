<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//获取保存在本地的用户信息
			let userInfo = uni.getStorageSync('userInfo');
			if (userInfo.id) {
				//更新登录状态
				this.login(userInfo)
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['login'])
		},
	}

	// 165服务器 http
	// export const baseUrl = "http://36.138.169.165:8081"
	// export const picUrl = 'http://36.138.169.165:8081/files/nqikaqimg/'
	
	// 165服务器 https
	export const baseUrl = "https://www.jnetdata.com.cn:18443"
	export const picUrl = 'https://www.jnetdata.com.cn:18443/files/nqikaqimg/'
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "@/static/index.scss";
	@import url('static/css/iconfont.css');
</style>