<template>
	<view class="process">
		<view class="tabs">
			<u-tabs :list="dataList" @click="tabsClcik" keyName="className"></u-tabs>
		</view>
		
		<view class="tabs">
			<u-tabs :list="dataList2" keyName="className" @click="tabsClcik1" lineWidth="0"
				:inactiveStyle="{color: '#666','background-color': '#f5f5f5','border-radius': '52rpx', padding: '8rpx 20rpx'}"
				:activeStyle="{color: '#0b3f88', 'background-color': '#dfe9ff','border-radius': '52rpx', padding: '8rpx 20rpx'}"></u-tabs>
		</view>
		<view class="sidebar">
			<!-- <view class="sidebar_side">
				<view  v-for="(item,index) in list[activeName]" :key="index" class="sidebar_side_box" @click="change(index)" :style="currentIndex == index ? 'background:#fff' : 'color:#000'">
					<view v-show="currentIndex === index" class="sidebar_side_front"></view>
					<view class="sidebar_side_text">{{item.text}}</view>
				</view>	
			</view> -->
			
			<view class="sidebar_content">
				<view v-for="(item,index) in contentList" :key="index" class="sidebar_content_box">
					<view>
						<!-- <view><u-image :src="item.imgsrc" :width="24" :height="24"></u-image></view> -->
						<view class="flex" style="justify-content: center;align-items: center;font-size: 28rpx;box-sizing: border-box;padding: 18rpx;">
							{{item.fileName.length > 10 ? item.fileName.slice(0,10)+"..." : item.fileName}}
						</view>
						<view class="sidebar_content_download">下载</view>
					</view>
					
				</view>
			</view>
		</view>
		
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from "@/App.vue";
	export default {
		data() {
			return {
				activeName: 0,
				activeName2: 0,
				dataList: [],
				dataList2: [],
				contentList: [],
			}
		},
		
		onLoad(option) {
			this.getList(option.id);
		},
		
		methods: {
			tabsClcik(val){
				this.activeName = val.index;
				this.dataList2 = this.dataList[this.activeName].children;
				this.activeName2 = 0;
				this.getContentList(this.dataList[this.activeName].children[this.activeName2].id);
			},
			
			tabsClcik1(val){
				this.activeName2 = val.index;
				this.getContentList(val.id);
			},
			
			
			getList(id){
				uni.request({
					url: baseUrl + "/metadata/class/tree",
					method:"POST",
					data:{
						parentId: id,
					},
					success: ({data}) => {
						this.dataList = data.obj;
						this.dataList2 = data.obj[this.activeName].children;
						this.getContentList(this.dataList[this.activeName].children[this.activeName2].id)
					},
				})
			},
			
			getContentList(id){
				uni.request({
					url: baseUrl + "/SX/sxzgsfqprocessbasis/listing",
					method:"POST",
					data:{
						entity: {
							prcocessId: id,
						},
						pager: {
							current: 1,
							size: 10
						}
					},
					success: ({data}) => {
						console.log(data);
						this.contentList = data.obj.records;
						
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.process {
		.tabs {
			border-bottom: 2rpx solid #eeeeee;
		}

		.sidebar {

			&_side {
				width: 176rpx;
				height: 100%;
				background-color: #f2f2f2;
				
				&_box {
					width: 176rpx;
					height: 100rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					padding: 20rpx;
					position: relative;
				}
				
				&_front {
					width: 8rpx;
					height: 80rpx;
					line-height: 80rpx;
					background-color: #000;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
					background-color: #0b3f88;
					border-radius:0px 4px 4px 0px;
				}
				
				&_text {
					font-size: 24rpx;
				}
			}

			&_content {
				width: 100%;
				height: 100%;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-column-gap: 10rpx;
				grid-row-gap: 20rpx;
				box-sizing: border-box;
				padding: 30rpx;

				&_box {
					width: 220rpx;
					// height: 104rpx;
					border: 2rpx solid #eee;
					box-shadow: #342cb81a 0px 0px 5px 0px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					border-radius: 8rpx;
				}
			
				&_download {
					width: 220rpx;
					height: 30rpx;
					line-height: 30rpx;
					text-align: center;
					color: #fff;
					background-color: #3379db;
					border-radius: 0px 0px 8rpx 8rpx;
					font-size: 24rpx;
				}
			}
		}
	}
</style>