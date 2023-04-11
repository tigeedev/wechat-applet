<template>
	<view class="latest_announcements">
		<u-sticky bgColor="#fff">
			<view class="tabs">
				<u-tabs :list="tabsList" @click="tabsClick"></u-tabs>
			</view>
			<view class="dates">
				<u-tabs :list="dateList" @click="datesClick" lineWidth="0"
					:inactiveStyle="{color: '#666','background-color': '#f5f5f5','border-radius': '52rpx', padding: '0 22rpx'}"
					:activeStyle="{color: '#3466cc', 'background-color': '#dfe9ff','border-radius': '52rpx', padding: '0 22rpx'}"></u-tabs>
			</view>
		</u-sticky>

		<view class="list">
			<u-list height="100%">
				<u-list-item v-for="(item, index) in list" :key="index">
					<view class="list_box" @click="goNewsDetails(item.id)">
						<view class="list_box_title">
							{{item.title.trim().length > 30 ? item.title.trim().slice(0,30)+"..." : item.title}}</view>
						<view class="flex list_box_bottom">
							<view class="list_box_bottom_img"><u-image :src="picUrl+'time.svg'" :width="13"
									:height="13"></u-image></view>
							<view>{{item.begintime}}</view>
						</view>
					</view>
				</u-list-item>
			</u-list>
		</view>

		<view @click="scrolltolower" class="load_more" v-show="list.length > 0">加载更多</view>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from "@/App.vue"
	import dayjs from "dayjs";
	export default {
		data() {
			return {
				picUrl,
				activeName: '最新公告',
				activeDate: '全部',
				tabsList: [{
						name: '最新公告'
					},
					{
						name: '法律法规'
					},
					{
						name: '本月热点'
					},
					{
						name: '通知公告'
					},
					{
						name: '政策文件'
					},
					{
						name: '规定'
					},
					{
						name: '标准动态'
					},
					{
						name: '标准化'
					},
				],
				dateList: [{
						name: '全部'
					},
					{
						name: '近一周'
					},
					{
						name: '近一月'
					},
				],
				list: [],
				page: 1,
				limit: 10,
				publishtime: "",
				publishtimeBT2: "",
			}
		},

		mounted() {
			this.getList();
		},

		methods: {
			tabsClick(val) {
				this.page = 1;
				this.limit = 10;
				this.activeName = val.name;
				this.getList();
			},

			datesClick(val) {
				this.activeDate = val.name;
				if (val.name === '近一周') {
					this.publishtime = dayjs().subtract(7, 'day').format('YYYY-MM-DD');
					this.publishtimeBT2 = dayjs().format('YYYY-MM-DD');
				} else if (val.name === '近一月') {
					this.publishtime = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
					this.publishtimeBT2 = dayjs().format('YYYY-MM-DD');
				} else if (val.name === '全部') {
					this.publishtime = '';
					this.publishtimeBT2 = '';
				}
				
				this.getList();
			},

			goNewsDetails(id) {
				uni.navigateTo({
					url: "/pagesB/newsDetails/newsDetails?id=" + id
				})
			},

			getList() {
				uni.request({
					url: baseUrl + "/SX/sxzgsfqpropagandize/listing",
					method: 'POST',
					data: {
						entity: {
							context: this.activeName,
							publishtime: this.publishtime,
							publishtimeBT2: this.publishtimeBT2,
						},
						pager: {
							current: this.page,
							size: this.limit
						}

					},
					success: ({
						data
					}) => {
						this.list = data.obj.records;
					}
				})
			},

			scrolltolower() {
				this.page = this.page + 1;
				uni.request({
					url: baseUrl + "/SX/sxzgsfqpropagandize/listing",
					method: 'POST',
					data: {
						entity: {
							context: this.activeName,
						},
						pager: {
							current: this.page,
							size: this.limit
						}

					},
					success: ({
						data
					}) => {
						this.list = this.list.concat(data.obj.records);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.latest_announcements {
		.tabs {
			border-bottom: 2rpx solid #eee;
		}

		.dates {
			border-bottom: 2rpx solid #eee;
		}

		.list {

			&_box {
				width: 690rpx;
				height: 140rpx;
				margin: 40rpx auto 0 auto;
				border-bottom: 2rpx solid #eee;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				box-sizing: border-box;
				padding-bottom: 40rpx;

				&_title {
					font-weight: 500;
					line-height: 32rpx;
					margin-bottom: 20rpx;
				}

				&_bottom {
					align-items: center;
					font-size: 24rpx;
					color: #999;

					&_img {
						margin-right: 20rpx;
					}
				}
			}
		}

		.load_more {
			width: 100%;
			height: 40rpx;
			line-height: 40rpx;
			padding: 20rpx;
			text-align: center;
			font-size: 24rpx;
			color: #999;
		}
	}
</style>