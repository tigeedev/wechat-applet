<template>
	<view class="organization">
		<view class="organization_head flex">
			<view class="organization_title">推荐机构</view>
			<view class="organization_more" @click="goOrganizationList">更多</view>
		</view>

		<view class="organization_content">
			<u-scroll-list :indicator="false" :indicatorWidth="843">
				<view v-for="(item, index) in organizationList" :key="index">
					<view class="organization_box" @click="goDetails(item.id)">
						<view>
							<u-image :src="baseUrl + item.image" :width="80" :height="80"></u-image>
						</view>
						<view class="organization_text">{{item.name}}</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from "@/App.vue";
	export default {
		name: "organization",
		props: {
			pagetype: {
				type: String,
				default: "",
			}
		},
		data() {
			return {
				baseUrl,
				organizationList: [],
			};
		},

		mounted() {
			this.getOrganizationList();
		},

		methods: {

			getOrganizationList() {
				uni.request({
					url: baseUrl + "/SX/sxzgsfqmechanism/listing",
					method: "POST",
					data: {
						entity: {
							pagetype: this.pagetype
						},
						pager: {
							current: 1,
							size: 6
						}
					},
					success: ({
						data
					}) => {
						this.organizationList = data.obj.records;
					}
				})
			},


			goDetails(id) {
				uni.navigateTo({
					url: "/pagesB/organizationDetails/organizationDetails?id=" + id,
				})
			},
			
			goOrganizationList(){
				uni.navigateTo({
					url: "/pagesB/listInstitution/listInstitution",
				})
			}


		}
	}
</script>

<style lang="scss" scoped>
	.organization {
		width: 680rpx;
		margin: 20rpx auto;

		.organization_head {
			justify-content: space-between;
			padding-bottom: 20rpx;
			border-bottom: 2rpx solid #e5e5e5;

			.organization_title {
				font-size: 36rpx;
			}

			.organization_title:before {
				content: '';
				background-color: #0b3f88;
				border: 4rpx solid #0b3f88;
				border-radius: 4rpx;
				margin-right: 20rpx;
			}

			.organization_more {
				line-height: 50rpx;
				font-size: 24rpx;
				color: #999;
			}
		}

		.organization_content {

			.organization_box {
				width: 256rpx;
				height: 296rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: #fff;
				border-color: #ff000000;
				box-shadow: #00389f33 0px 0px 5px 0px;
				margin: 40rpx 20rpx 20rpx 20rpx;

				.organization_text {
					width: 190rpx;
					font-size: 24rpx;
				}
			}
		}
	}
</style>