<template>
	<view>
		<!-- 顶部搜索 -->
		<view class="search_box">
			<u-search placeholder="搜索" v-model="keyword" actionText="筛选" @custom="orderbyChange" height="30"></u-search>
		</view>
 
		<!-- 筛选 -->
		<zero-filter-bar ref="zeroFilterBar" selectColor="#f23030" :extraBtn="false" :needSticky="false"
			:dataList="filterList" @filter='handleFilterItem'>
		</zero-filter-bar>

		<fjj-condition ref='condition' @touchmove.stop color="#4D7BFE" :list="menuList" :defaultValue="defaultValue"
			@result="resultConditon"></fjj-condition>

		<!-- 内容 -->
		<view class="content_box">
			<view class="button-box">
				<button :class="butIndex==0? 'mini-btn-active' : 'mini-btn' " @tap="butChange1">国家(cnas/cma)</button>
				<button :class="butIndex==1? 'mini-btn-active' : 'mini-btn' " @tap="butChange2">省级(cma)</button>
			</view>
			<view class="list_box" v-for="(item,i) in mechanismList" :key="i">
				<view class="list_left">
					<image :src="baseUrl + item.image"></image>
				</view>
				<view class="list_right">
					<view class="right_top flex">
						<view class="title">{{item.name.length > 12 ? item.name.slice(0,12) + '...' : item.name}}</view>
						<view class="top_img flex">
							<image :src="picUrl + 'u3013.gif'"></image>
							<image :src="picUrl + 'u3012.gif'"></image>
						</view>
					</view>
					<!-- <view class="Key-word">{{item.detectionObject}}</view> -->
					<view class="info-txt">服务类型：{{item.serve}}</view>
					<view class="info-txt">业务范围：{{item.ranget}}</view>
				</view>
			</view>
			<view class="no_data" v-if="mechanismList.length == 0">
				无数据
			</view>
		</view>
	</view>
</template>

<script>
	import { baseUrl, picUrl } from '@/App.vue'
	export default {
		data() {
			return {
				picUrl,
				baseUrl,
				keyword: '',
				butIndex: 0,
				hasChoose: false,
				menuList: [],
				defaultValue: {},
				filterList: [{
						id: 0,
						name: '综合',
					},
					{
						id: 1,
						name: '距离',
						sort: true
					},
					{
						id: 2,
						name: '检测周期',
						sort: true
					},
					{
						id: 3,
						name: '关注度',
						sort: true
					}
				],
				mechanismList: [{
					name: '山西省质量监督检验研究院',
					serve: '测试与分析、体系认证、产品认证、现场检验服务',
					ranget: '分析测试服务、现场检验服务、现场检验服务',
					image: picUrl + 'raw_1534823561.png',
				}]
			}
		},
		onLoad() {
			// 搜索列表
			this.mechanismList = uni.getStorageSync('mechList')
			console.log("mechanismList",this.mechanismList);
			
			// 筛选条件数据
			this.$nextTick(() => {
				this.menuList = [{
					'title': '城市',
					'type': 'custom',
					'key': 'custom1',
					'isMutiple': false, //单选
					'detailList': [{
						title: '石家庄',
						value: "1",
					}, {
						title: '邯郸',
						value: "2",
					}, {
						title: '衡水',
						value: "3",
					}, {
						title: '唐山',
						value: "4",
					}, {
						title: '秦皇岛',
						value: "5",
					}, {
						title: '保定',
						value: "6",
					}],
				},{
					'title': '登记注册类型',
					'type': 'custom',
					'key': 'custom2',
					'isMutiple': false, //单选
					'detailList': [{
						title: '国有',
						value: "1",
					}, {
						title: '集体',
						value: "2",
					}, {
						title: '私营有限公司',
						value: "3",
					}, {
						title: '私营独资',
						value: "4",
					}, {
						title: '服份有限公司',
						value: "5",
					}, {
						title: '中外合资经营',
						value: "6",
					}, {
						title: '港澳台商投资股份有限公司',
						value: "7",
					}, {
						title: '其他有限责任公司',
						value: "8",
					}, {
						title: '股份合作',
						value: "9",
					}, {
						title: '其他',
						value: "10",
					}],
				},{
					'title': '机构类型',
					'type': 'custom',
					'key': 'custom3',
					'isMutiple': false, //单选
					'detailList': [{
						title: '企业',
						value: "1",
					}, {
						title: '事业单位',
						value: "211",
					}, {
						title: '其他组织机构',
						value: "322",
					}],
				},{
					'title': '机构性质',
					'type': 'custom',
					'key': 'custom4',
					'isMutiple': false, //单选
					'detailList': [{
						title: '企业法人单位',
						value: "1",
					}, {
						title: '事业法人单位',
						value: "2",
					}, {
						title: '行政法人单位',
						value: "3",
					}, {
						title: '非法人单位',
						value: "4",
					}],
				},{
					'title': '距离',
					'type': 'custom',
					'key': 'custom5',
					'isMutiple': false, //单选
					'detailList': [{
						title: '0-1km',
						value: "1",
					}, {
						title: '1km-2km',
						value: "2",
					}, {
						title: '2km-3km',
						value: "3",
					}],
				}]
				this.defaultValue = {
					custom1: ['1'],
					custom2: ['1'],
				};
			})
		},
		methods: {
			//筛选返回值
			resultConditon(obj) {
				this.$refs.condition.visibleDrawer = false;
				this.hasChoose = obj.hasChoose;
				console.log("筛选返回值",obj);
			},
			orderbyChange(obj) {
				console.log("筛选");
				this.$refs.condition.visibleDrawer = true;
			},
			handleFilterItem(index, desc, item) {
				console.log("index>desc>item", index, desc, item)
			},
			// 切换按钮
			butChange1() {
				this.butIndex = 0
			},
			butChange2() {
				this.butIndex = 1
			},
		}
	}
</script>

<style lang="scss">
	.search_box {
		margin: 20rpx 4%;
	}

	.content_box {
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;

		.button-box {
			margin: 0 14%;
			display: flex;
			justify-content: space-around;
			align-content: center;
			margin-top: 20rpx;
			margin-bottom: 10rpx;

			button::after {
				border: none;
			}

			.mini-btn {
				width: 230rpx;
				height: 46rpx;
				line-height: 46rpx;
				color: #333;
				background-color: #f0f0f0;
				border-radius: 12rpx;
				font-size: 24rpx;
				border: none;
			}

			.mini-btn-active {
				width: 230rpx;
				height: 46rpx;
				line-height: 46rpx;
				color: #FFFFFF;
				background-color: #3366cc;
				border-radius: 12rpx;
				font-size: 24rpx;
			}
		}

		.list_box {
			display: flex;
			align-items: center;
			padding: 40rpx 10rpx 50rpx 30rpx;
			border-bottom: 1px solid #f2f2f2;

			.list_left {
				width: 135rpx;
				height: 130rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.list_right {
				width: 520rpx;
				margin-left: 20rpx;

				.right_top {
					align-items: center;

					.title {
						color: #101010;
						font-size: 30rpx;
						letter-spacing: 2rpx;
						margin-bottom: 8rpx;
					}

					.top_img {
						image {
							width: 40rpx;
							height: 28rpx;
							margin-left: 12rpx;
						}
					}
				}

				.Key-word {
					height: 44rpx;
					color: #3366cc;
					font-size: 24rpx;
				}

				.info-txt {
					width: 100%;
					color: #999;
					font-size: 24rpx;
					word-break: keep-all;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
		.no_data {
			width: 100%;
			color: #999;
			font-size: 28rpx;
			text-align: center;
			margin-top: 80rpx;
		}
	}
</style>
