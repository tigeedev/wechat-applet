<template>
	<view class="law">
		<view class="tabs">
			<view class="nav">
				<u-tabs :list="tabsLsit" @click="tabsClick">
					<view slot="right" style="padding-left: 4px;color: #999;font-size: 24rpx;" @tap="moreClick">更多
					</view>
				</u-tabs>
			</view>

			<view class="table">
				<view v-for="(item, index) in tableList" :key="index">
					<view class="table_box" @click="goNewsDetails(item.id)">
						<view style="color: #333;">
							{{item.title.trim().length > 20 ? item.title.trim().slice(0,20)+"..." : item.title.trim()}}
						</view>
						<view style="color: #999;">{{item.begintime.split(' ')[0]}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		baseUrl
	} from "@/App.vue";
	export default {
		name: "law",
		props: {
			stype: {
				type: String,
				default: "",
			},
			navList: {
				type: Array,
				default: [{
						name: '法律法规'
					},
					{
						name: '政策文件'
					},
					{
						name: '规定'
					},
					{
						name: '通知信息'
					},
				]
			}
		},
		data() {
			return {
				activeName: "法律法规",
				tabsLsit: this.navList,
				tableList: [],
			};
		},

		mounted() {
			this.getTableList();
		},

		methods: {

			tabsClick(val) {
				this.activeName = val.name;
				this.getTableList();
			},

			goNewsDetails(id) {
				uni.navigateTo({
					url: "/pagesB/newsDetails/newsDetails?id=" + id
				})
			},

			moreClick() {
				uni.navigateTo({
					url: "/pagesB/latestAnnouncements/latestAnnouncements"
				})
			},

			getTableList() {
				uni.request({
					url: baseUrl + "/SX/sxzgsfqpropagandize/listing",
					method: 'POST',
					data: {
						entity: {
							context: this.activeName,
							stype: this.stype,
						},

						pager: {
							current: 1,
							size: 5
						}
					},
					success: ({
						data
					}) => {
						this.tableList = data.obj.records;
					}
				})
			},


		}
	}
</script>

<style scoped lang="scss">
	.law {
		margin: 30rpx auto;

		.tabs {
			margin: 0 10rpx;

			.nav {
				border-bottom: 2rpx solid #ccc;
			}

			.table {
				width: 680rpx;
				margin: 20rpx auto 0 auto;
				font-size: 24rpx;

				.table_box {
					height: 60rpx;
					line-height: 60rpx;
					border-bottom: 2rpx dashed #ccc;
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>