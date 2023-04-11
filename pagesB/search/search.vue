<template>
	<view class="main">
		<d-search-log color_border="#fff" color_text="#333" store_key="search_list" :search_list_hot="hot_list"
			@onClickDelAllApi="onClickDelAll" @onSearchNameApi="onSearchName">
		</d-search-log>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue'

	import {
		mapState
	} from 'vuex';

	export default {
		computed: {
			...mapState(['userInfo'])
		},
		data() {
			return {
				hot_list: [], //最近搜索
			}
		},
		onLoad() {
			// this.hot_list = ['食品认证', '强制认证', '国家标准']
		},
		methods: {
			onClickDelAll() {
				console.log('[父级接收事件]：删除全部搜索记录')
				
				
				
				
				
			},
			onSearchName(e) {
				console.log('[父级接收事件]：点击搜索:' + e)

				// 历史记录接口
				uni.$u.http.post(baseUrl + '/SX/sxsearchrecord', {
					"searchValue": e,
					"userid": this.userInfo.id
				}).then(res => {
					// console.log("ressss",res);
				})

				// 搜索接口
				let httpData = {
					"entity": {
						"name": e
					},
					"pager": {
						"current": 1,
						"size": 10
					}
				}
				uni.$u.http.post(baseUrl + '/SX/sxzgsfqmechanism/listing', httpData, {
					header: {
						'Content-Type': 'application/json'
					}
				}).then(res => {
					console.log("res", res);
					if (res.data.success) {
						// 获取机构列表 保存在本地
						let mechList = res.data.obj.records
						uni.setStorageSync('mechList', mechList)

						uni.navigateTo({
							url: '/pagesB/listInstitution/listInstitution',
						})
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		padding-bottom: 40rpx;
	}
</style>