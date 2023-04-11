<template>
	<view>
		<view class="top_box">
			<view class="top_line1">
				<view class="line1_img">
					<image :src="headLogo"></image>
				</view>
				<view class="line1_txt">山西省产品质量监督检验研究院</view>
			</view>
			<view class="topline top_line2">
				统一社会信用代码（组织机构代码）：
				<text class="text_color">{{organizateCode}}</text>
			</view>
			<view class="topline top_line3">
				<view class="line3_left">电话：010-58083711</view>
				<view class="line3_right">
					官网：<text class="text_color">{{webSite}}</text>
				</view>
			</view>
			<view class="topline top_line4">地址：晋中市榆次区省质监检测中心5号楼</view>
		</view>

		<view class="bottom_box">
			<u-tabs :list="tabList" 
							@click="clickTab" 
							lineWidth="45" 
							lineColor="#3366cc">
			</u-tabs>
			<!-- 基本信息 -->
			<view v-if="tabIndex == 0" class="tab_box">
				<view class="tab_info">法人单位名称：山西省产品质量检验研究院</view>
				<view class="tab_info">登记注册类型：国有</view>
				<view class="tab_info">统一社会信用代码（组织机构代码）：{{organizateCode}}</view>
				<view class="tab_info">机构类型：企业</view>
				<view class="tab_info info_link">
					统一社会信用代码证书或营业执照（扫描件）：
					<u-link text="附件" href="#" fontSize="14" under-line></u-link>
				</view>
				<view class="tab_info">成立时间：2014.12.22</view>
				<view class="tab_info">
					机构简介：<text class="info_color">机构简介</text>
				</view>
				<view class="tab_info">上级主管部门：--</view>
				<view class="tab_info">机构所在地：晋中市榆次区省质监检测中心5号楼</view>
				<view class="tab_info">手机号：13810159674</view>
				<view class="tab_info">固定电话：010-58083771</view>
				<view class="tab_info info_link">
					网址：<u-link text="http://www.chct-bj.com" href="#" fontSize="13" under-line></u-link>
				</view>
				<view class="tab_info">电子邮箱：xiaop@cheari.com</view>
				<view class="tab_info">全部仪器设备：1426台</view>
				<view class="tab_info">总价值：7084万元</view>
				<view class="tab_info">总人数：246</view>
				<view class="tab_info">人员情况：按职称</view>
				<view class="tab_info">人员情况：按职称</view>
				<view class="tab_info">高级技术职称人员 25 人</view>
				<view class="tab_info">初级技术职称人员 67 人</view>
				<view class="tab_info">中级技术职称人员 20 人</view>
			</view>
			<!-- 证书情况 -->
			<view v-if="tabIndex == 1" class="tab_box">
				证书情况
			</view>
			<!-- 账号管理 -->
			<view v-if="tabIndex == 2" class="tab_box">
				账号管理
			</view>
		</view>
	</view>
</template>

<script>
	import { baseUrl, picUrl} from '@/App.vue'
	export default {
		data() {
			return {
				headLogo: picUrl + 'v2_rqw3me.png',
				organizateCode: '911103023271690276',
				webSite: 'http://www.chct-bj.com/',
				tabIndex: 0,
				tabList: [{
					name: '基本信息',
				}, {
					name: '证书情况',
				}, {
					name: '账号管理',
				}]
			}
		},
		methods: {
			clickTab(item) {
				console.log('item', item);
				this.tabIndex = item.index
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
	}
	
	.bottom_box {
		margin-top: 20rpx;
		background-color: #fff;
		box-sizing: border-box;
		.tab_box {
			color: #333;
			font-size: 28rpx;
			font-family: PingFangSC;
			padding: 20rpx 26rpx;
			.tab_info {
				padding: 10rpx 0;
				.info_color {
					color: #348BEB;
					text-decoration: underline;
				}
			}
			.info_link {
				display: flex;
				align-items: center;
			}
		}
	}

	.top_box {
		padding: 20rpx;
		background-color: #fff;

		.topline {
			color: #666;
			font-size: 24rpx;
			padding-top: 15rpx;

			.text_color {
				color: #348BEB;
			}
		}

		.top_line1 {
			display: flex;
			align-items: center;
			height: 90rpx;

			.line1_img {
				height: 90rpx;
				width: 90rpx;
				border: 1px solid #ccc;
				border-radius: 50%;
				margin-right: 15rpx;

				image {
					height: 100%;
					width: 100%;
					border-radius: 50%;
				}
			}

			.line1_txt {
				color: #101010;
				font-size: 34rpx;
			}
		}

		.top_line3 {
			display: flex;

			.line3_left {
				margin-right: 50rpx;
			}
		}
	}
</style>
