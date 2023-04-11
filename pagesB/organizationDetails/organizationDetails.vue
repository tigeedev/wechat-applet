<template>
	<view class="organization_details">
		<view class="details">
			<view class="flex">
				<u-image :src="baseUrl + organizationInfo.image" :width="60" :height="60"></u-image>
				<view>
					<view class="flex" style="align-items: center;font-size: 28rpx;height: 40rpx;">
						<view>{{organizationInfo.name}}</view>
						<view style="margin:0 10rpx;"><u-image :src="picUrl+'raw_1534845285.gif'" :width="20"
								:height="12"></u-image></view>
						<view><u-image :src="picUrl+'raw_1534845295.gif'" :width="20" :height="12"></u-image>
						</view>
					</view>
					<view style="font-size: 24rpx;color: #999;height: 52rpx;line-height: 52rpx;">服务类型：{{organizationInfo.serve && organizationInfo.serve.legnth > 15 ? organizationInfo.serve.slice(0,15)+"..." : organizationInfo.serve}}
					</view>
					<view style="font-size: 24rpx;color: #999;">业务范围：{{organizationInfo.ranget && organizationInfo.ranget.length > 15 ? organizationInfo.ranget.slice(0,15)+"..." : organizationInfo.ranget}}</view>
				</view>
			</view>
			<view style="font-size: 24rpx;color: #999;">
				简介：{{organizationInfo.introduction && organizationInfo.introduction}}
			</view>
			<view class="flex" style="margin-top: 20rpx;">
				<view><u-image :src="picUrl+'location.svg'" :width="19" :height="19"></u-image></view>
				<view>{{organizationInfo.address && organizationInfo.address}}</view>
			</view>
		</view>

		<view class="table">
			<view class="table_head flex">
				<view>参数详情</view>
				<view class="flex">已选<view style="color: #f23030;">{{selectedArr.length}}</view>项</view>
			</view>
			<view class="table_list">
				<zb-table :columns="column" :data="paramsList" :border="true" :stripe="false" @toggleRowSelection="toggleRowSelection" @toggleAllSelection="toggleAllSelection"></zb-table>
			</view>
		</view>

		<view class="tabbar flex">
			<view class="tabbar_box flex" @click="tip">
				<view><u-image :src="picUrl+'star.svg'" :width="18" :height="18"></u-image></view>
				<view style="color: #999;">收藏</view>
			</view>

			<view class="tabbar_box flex" style="background-color: #739bec;" @click="goCustomer">
				<view><u-image :src="picUrl+'customer_service.svg'" :width="18" :height="18"></u-image></view>
				<view open-type="contact" type="text">客服咨询</view>
			</view>

			<view class="tabbar_box flex" style="background-color: #3366cc;" @click="tip">
				<view><u-image :src="picUrl+'export.svg'" :width="18" :height="18"></u-image></view>
				<view>专家咨询</view>
			</view>
		</view>
		
		<u-toast ref="uToast"></u-toast>
		
		<u-modal :show="show" :content='content' :width="200" :height="200">
			<u-button slot="confirmButton" open-type="contact" type="primary" shape="circle" @click="show = false">确定</u-button>
		</u-modal>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue';
	export default {
		data() {
			return {
				baseUrl,
				picUrl,
				column: [{
						type: 'index',
						label: '序号',
						width: 50,
						align: 'center'
					},
					{
						name: 'parameter',
						label: '项目参数',
						width: 150,
						align: 'center',
					},
					{
						name: 'standard',
						label: '检测标准（方法）',
						width: 150,
						align: 'center',
					},
					{
						type: 'selection',
						width: 50,
						align: 'center'
					},
				],
				organizationInfo: {},
				paramsList:[],
				page: 1,
				limit: 10,
				selectedArr: [],
				show: false,
				content: "即将进入客服界面",
			}
		},

		onLoad(option) {
			this.getOrganizationDetails(option.id);
			this.getParamsList(option.id);
		},

		methods: {
			consult(val) {
				if (val === '1') {
					uni.navigateTo({
						url: "/pagesB/customerService/customerService"
					});
				} else if (val === '2') {
					uni.navigateTo({
						url: "/pagesB/export/export"
					})
				}
			},

			getOrganizationDetails(id) {
				uni.request({
					url: baseUrl + "/SX/sxzgsfqmechanism/" + id,
					method: 'GET',
					success: ({
						data: {
							obj
						}
					}) => {
						this.organizationInfo = obj;
					},
				})
			},
			
			getParamsList(id){
				uni.request({
					url:baseUrl+ "/SX/sxzgsfqrevevancy/listing",
					method:'POST',
					data:{
						entity: {
							institutionId: id,
						},
						pager: {
							current: this.page,
							size: this.limit,
						}
					},
					success: ({data}) => {
						this.paramsList = data.obj.records;
					},
					fail: (err) => {
						
					}
				})
			},
			
			tip(){
				this.$refs.uToast.show({
					type: "warning",
					message: "功能待完善",
					icon: "https://cdn.uviewui.com/uview/demo/toast/top.png"
				})
			},
			
			toggleRowSelection(selected ,array){
				this.selectedArr = array;
			},
			
			toggleAllSelection(selected ,array){
				this.selectedArr = array;
			},
			
			goCustomer(){
				this.show = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.organization_details {
		margin-bottom: 20rpx;

		.details {
			width: 750rpx;
			height: 382rpx;
			background-color: #fff;
			box-shadow: #00389f33 0px 0px 5px 0px;
			margin: 40rpx auto;
			box-sizing: border-box;
			padding: 20rpx;
			font-size: 24rpx;
		}

		.table {
			height: 100%;
			box-sizing: border-box;
			box-shadow: #00389f33 0px 0px 5px 0px;
			margin: 40rpx auto;
			padding-bottom: 60rpx;

			&_head {
				height: 60rpx;
				line-height: 60rpx;
				justify-content: space-between;
				margin: 0 40rpx;
				font-size: 28rpx;
			}
		}

		.tabbar {
			width: 750rpx;
			height: 90rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 999;
			background-color: #fff;
			box-shadow: #00000080 0px -2px 6px 0px;
			font-size: 24rpx;

			&_box {
				width: 260rpx;
				height: 90rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				color: #fff;
			}
		}
	}
</style>