<template>
	<view class="content">
		<view class="header">
			<image :src="headImg"></image>
		</view>

		<view class="list">
			<view class="list-call">
				<text>手机号</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="phone" type="text" maxlength="11" placeholder="请输入手机号" />
			</view>
			<view class="list-call">
				<text>密码</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="password" type="text" maxlength="32" placeholder="请输入密码" password="true" />
			</view>
			<!-- <view class="list-call">
				<text>验证码</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="vCode" type="number" maxlength="8" placeholder="请输入验证码"
					placeholder-style="color:#808080;"></input>
				<view class="getvcode" :class="{forhidden:readonly}" @click="getVcode">{{codeText}}</view>
			</view> -->
		</view>

		<view class="button-login" hover-class="button-hover" @click="onSubmit()">
			<text>登录</text>
		</view>

		<view class="agreenment">
			<view class="agree_line">
				<navigator url="/pages/user/forget" open-type="navigate">忘记密码</navigator>
			</view>
			<view class="agree_line">
				<navigator url="/pages/user/register" open-type="navigate">新用户注册</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue'

	import {
		mapMutations
	} from 'vuex'

	var clear;
	export default {
		data() {
			return {
				headImg: picUrl + 'v2_r87kav.jpg',
				phone: '',
				password: '',
				vCode: '', //验证码
				readonly: false,
				codeText: '获取验证码',
			};
		},
		methods: {
			...mapMutations(['login']),
			// 手机号登录
			onSubmit() {
				let _this = this
				if (this.phone == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					});
					return;
				}
				const phoneRegular = /^1\d{10}$/;
				if (!phoneRegular.test(this.phone)) {
					uni.showToast({
						title: '手机号格式不正确',
						icon: 'none'
					});
					return;
				}
				if (this.password == '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				}

				// if (this.vCode == '') {
				// 	uni.showToast({
				// 		title: '请输入验证码',
				// 		icon: 'none'
				// 	});
				// 	return;
				// }

				// 密码登录
				let httpData = {
					"name": this.phone,
					"passWord": this.password,
				};
				uni.$u.http.post(baseUrl + '/member/home/wxbackAjaxLogin', httpData).then(res => {
					if (res.data.success) {
						console.log("userData", res.data.obj);
						let userData = res.data.obj
						// 获取企业表数据
						uni.$u.http.get(baseUrl + '/SX/sxzgsfqcompany/' + userData.user.crEdit).then(ress => {
							console.log("获取企业表数据", ress);

							// 登录成功后改变vuex的状态
							let userInfo = {
								"mspToken": userData.mspToken,
								"id": userData.userid,
								"crEdit": userData.user.crEdit,
								"headImg": userData.user.headUrl,
								"address": userData.user.address,
								"sex": userData.user.sex,
								"nickName": userData.user.nickName, //昵称
								"userName": userData.user.trueName, //姓名
								"tellPhone": userData.user.mobile, //手机号
								"companyjob": userData.user.duties, //职务
								"companycreditcode": ress.data.obj.companycreditcode, //信用代码
								"companylogin": ress.data.obj.companylogin, //登记机关
								"companyname": ress.data.obj.companyname, //公司名称
								"companytellphone": ress.data.obj.companytellphone, //公司手机号
								"sfkfq": ress.data.obj.sfkfq, //是否开发区
							}
							this.login(userInfo)

							uni.showToast({
								title: '登录成功',
								icon: 'none',
							});
							setTimeout(function() {
								uni.switchTab({
									url: '/pages/index/index'
								})
							}, 1500);
						}).catch(err => {})
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
						});
					}
				});


				// 验证码登录
				// let httpData = {
				// 	"mobile": this.phone,
				// 	"verifyCode": this.vCode,
				// 	"rememberMe": true
				// };
				// uni.$u.http.post(baseUrl + '/member/home/loginByPhone', httpData, {
				// 	header: {'Content-Type': 'application/json'}
				// }).then(res => {
				// 	console.log("登录接口", res);

				// 	if (res.data.success) {
				// 		uni.showToast({
				// 			title: '登录成功',
				// 			icon: 'none',
				// 		});

				// 		setTimeout(function() {
				// 			uni.switchTab({
				// 				url: '/pages/index/index'
				// 			})
				// 		}, 1000);
				// 	} else {
				// 		uni.showToast({
				// 			title: res.data.msg,
				// 			icon: 'none',
				// 		});
				// 	}
				// });
			},
			//获取验证码
			getVcode() {
				console.log('getVcode')
				if (this.readonly) {
					uni.showToast({
						title: '验证码已发送',
						icon: 'none'
					});
					return;
				}
				if (this.phone == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					});
					return;
				}
				const phoneRegular = /^1\d{10}$/;
				if (!phoneRegular.test(this.phone)) {
					uni.showToast({
						title: '手机号格式不正确',
						icon: 'none'
					});
					return;
				}

				let httpData = {
					mobile: this.phone
				}
				// 获取验证码接口
				uni.$u.http.post(baseUrl + '/message/phoneMessage/sendPhoneVerifyCode', httpData, {
					header: {
						'Content-Type': 'application/json'
					}
				}).then(res => {
					console.log("获取验证码", res);
					this.getCodeState(); //开始倒计时
				})
			},
			//验证码按钮文字状态
			getCodeState() {
				const _this = this;
				this.readonly = true;
				this.codeText = '60S后重新获取';
				var s = 60;
				clear = setInterval(() => {
					s--;
					_this.codeText = s + 'S后重新获取';
					if (s <= 0) {
						clearInterval(clear);
						_this.codeText = '获取验证码';
						_this.readonly = false;
					}
				}, 1000);
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		width: 100%;
		height: 500rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50rpx;
		padding-left: 70rpx;
		padding-right: 70rpx;
	}

	.list-call {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		line-height: 100rpx;
		color: #333333;
		border-bottom: 1px solid #d7d7d7;
		margin-top: 30rpx;

		text {
			width: 110rpx;
			color: #666;
			font-size: 28rpx;
			font-weight: 700;
			text-align-last: justify;
			display: inline-block;
		}

		.call-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50rpx;
			color: #d7d7d7;
		}

		// .input {
		// 	font-size: 34rpx;
		// 	line-height: 102rpx;
		// 	height: 94rpx;
		// 	width: 100%;
		// 	box-sizing: border-box;
		// 	font-size: 30rpx;
		// 	padding: 0;
		// 	font-weight: bold;
		// }

		.getvcode {
			font-size: 24rpx;
			height: 60rpx;
			color: #333;
			line-height: 60rpx;
			background: #eee;
			min-width: 160rpx;
			text-align: center;
			border-radius: 8rpx;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			z-index: 11;

			&.forhidden {
				background: #eee;
				color: #cccccc;
			}
		}
	}



	.list-call .sl-input {
		flex: 1;
		text-align: left;
		font-size: 28rpx;
		// margin-left: 10rpx;
	}

	.button-login {
		color: #FFFFFF;
		font-size: 30rpx;
		width: 550rpx;
		height: 80rpx;
		background-color: #195ed7;
		border-radius: 50rpx;
		line-height: 80rpx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100rpx;
	}

	.button-hover {
		background-color: #1971c2;
	}

	.agreenment {
		display: flex;
		justify-content: space-around;
		color: #4a4a4a;
		font-size: 28rpx;
		height: 40rpx;
		line-height: 40rpx;
		box-sizing: border-box;
		margin-top: 40rpx;
		// margin-left: 60%;
		
		.agree_line {
			margin: 0 10rpx;
		}
	}
</style>