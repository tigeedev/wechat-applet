<template>
	<view class="news">
		<view class="title">{{news.title}}</view>
		<view class="box">
			<view>[索 引 号] {{news.pindex}}</view>
			<view>[实施日期] {{news.implement}}</view>
			<view>[发文字号] {{news.ppublish}}</view>
			<view>[发布日期] {{news.publishtime}}</view>
			<view>[发文机构] {{news.institution}}</view>
			<view>[成文日期] {{news.dealtime}}</view>
		</view>

		<view class="content">
			<u-parse :content="news.html"></u-parse>
		</view>

		<view class="realted">
			<view class="realted_title">相关政策法规</view>
			<view class="realted_content">
				<view v-for="(item,index) in list" :key="index">
					<view class="realted_content_box">{{`${index+1}.${item.title}`}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		baseUrl
	} from "@/App.vue"
	export default {

		onLoad(option) {
			this.getDetails(option.id)
		},

		data() {
			return {
				id: "",
				news: {},
				list: [{
						title: '农业农村部加力推进农药减量增效工作'
					},
					{
						title: '农业农村部开展防范农药安全风险检查'
					},
					{
						title: '农业农村部副部长张桃林在农药发展40年座谈会暨绿色农…'
					},
				]
			}
		},
		
		methods: {
			getDetails(id) {
				uni.request({
					url: baseUrl + '/SX/sxzgsfqpropagandize/' + id,
					method: 'Get',
					success: ({data: {obj}}) => {
						this.news = obj;
						console.log(obj);
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news {
		.title {
			width: 670rpx;
			font-size: 40rpx;
			font-weight: 700;
			color: #0b3f88;
			margin: 40rpx auto;
			text-align: center;
		}

		.box {
			width: 666rpx;
			height: 346rpx;
			color: #666;
			border: 2rpx solid #ccc;
			background-color: #f6f6f6;
			margin: 40rpx auto 20rpx auto;
			font-size: 24rpx;
			font-weight: 400;
			line-height: 28rpx;
			box-sizing: border-box;
			padding: 40rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			font-family: SourceHanSansSC;
		}

		.content {
			width: 670rpx;
			box-sizing: border-box;
			margin: 40rpx auto;
		}

		.realted {
			width: 670rpx;
			box-sizing: border-box;
			margin: 40rpx auto;

			&_title {
				font-size: 28rpx;
				font-weight: 500;
				height: 40rpx;
				line-height: 40rpx;
			}

			&_title::before {
				content: '';
				height: 40rpx;
				line-height: 40rpx;
				border: 3rpx solid #3466cc;
				margin-right: 20rpx;
			}

			&_content {
				font-size: 24rpx;
				color: #0054ff;
				margin: 30rpx 0;
				padding-bottom: 30rpx;

				&_box {
					margin: 10rpx 0;
				}
			}
		}
	}
</style>