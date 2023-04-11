<template>
	<view class="content">
		<view class="header">
			<image :src="headImg"></image>
		</view>

		<!-- 注册成功弹窗 -->
		<u-popup :show="showPopup" mode="center" :round="10" @close="closePopup" @open="openPopup">
			<view class="popup-box">
				<view class="pop-img">
					<image :src="register" mode=""></image>
				</view>
				<view class="pop-succ">注册成功</view>
				<view class="pop-dl" @tap="bindLogin2()">去登录</view>
			</view>
		</u-popup>

		<view class="list">
			<view class="list-call">
				<text>姓名</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="userName" type="text" placeholder="请输入您的姓名" />
			</view>
			<view class="list-call">
				<text>公司名称</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="companyName" type="text" placeholder="请输入您的公司名称" />
			</view>
			<view class="list-call">
				<text>职务</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="companyJob" type="text" placeholder="请输入您的职务" />
			</view>
			<view class="list-call">
				<text>信用代码</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="companyCreditCode" type="text" placeholder="请输入您的信用代码" />
			</view>
			<view class="list-call">
				<text>登记机关</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="companyLogin" type="text" placeholder="请输入登记机关" />
			</view>
			<view class="list-call">
				<text>手机号</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="tellPhone" type="text" maxlength="11" placeholder="请输入您的手机号" />
			</view>
			<!-- <view class="list-call">
				<text>验证码</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="vCode" type="number" maxlength="8" placeholder="请输入验证码"
					placeholder-style="color:#808080;"></input>
				<view class="getvcode" :class="{forhidden:readonly}" @click="getVcode">{{codeText}}</view>
			</view> -->
			<view class="list-call">
				<text>密码</text>
				<text class="call-icon">|</text>
				<input class="sl-input" v-model="password" type="text" maxlength="32" placeholder="请输入您的密码"
					:password="!showPassword" />
				<u-icon @click="display" :name="showPassword?'eye-off':'eye-fill'" color="#999999" size="22"></u-icon>
			</view>
		</view>

		<view class="button-login" hover-class="button-hover" @click="bindLogin()">
			<text>注册</text>
		</view>

		<view class="agreenment">
			<navigator url="/pages/user/login" open-type="navigate">已注册, 去登录</navigator>
		</view>

		<!-- 消息提示 -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	var _this, clear;
	import {
		baseUrl,
		picUrl
	} from '@/App.vue'
	export default {
		onLoad() {
			_this = this;
		},
		data() {
			return {
				headImg: picUrl + 'v2_r87kav.jpg',
				register: picUrl + 'register.png',
				userName: '', //姓名
				companyName: '', //公司名称
				companyJob: '', //职务
				companyCreditCode: '', //信用代码
				companyLogin: '', //登记机关
				tellPhone: '', //手机号-判断是否注册
				password: '', //密码
				code: '',
				showPassword: false,
				showPopup: false,
				vCode: '', //验证码
				readonly: false,
				codeText: '获取验证码',
			};
		},
		methods: {
			openPopup() {},
			closePopup() {
				this.showPopup = false
			},
			display() {
				this.showPassword = !this.showPassword
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
				if (this.tellPhone == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					});
					return;
				}
				const phoneRegular = /^1\d{10}$/;
				if (!phoneRegular.test(this.tellPhone)) {
					uni.showToast({
						title: '手机号格式不正确',
						icon: 'none'
					});
					return;
				}
			
				let httpData = {
					mobile: this.tellPhone
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
			// 注册
			bindLogin() {
				if (this.userName.length == 0) {
					this.$refs.uToast.show({
						type: 'warning',
						icon: false,
						message: "姓名不能为空！",
					})
					return;
				}
				if (this.companyName.length == 0) {
					this.$refs.uToast.show({
						type: 'warning',
						icon: false,
						message: "公司名称不能为空！",
					})
					return;
				}
				if (this.companyJob.length == 0) {
					this.$refs.uToast.show({
						type: 'warning',
						icon: false,
						message: "职务不能为空！",
					})
					return;
				}
				if (this.companyCreditCode.length == 0) {
					this.$refs.uToast.show({
						type: 'warning',
						icon: false,
						message: "信用代码不能为空！",
					})
					return;
				}
				if (this.companyLogin.length == 0) {
					this.$refs.uToast.show({
						type: 'warning',
						icon: false,
						message: "登记机关不能为空！",
					})
					return;
				}
				if (this.tellPhone.length != 11) {
					this.$refs.uToast.show({
						type: 'warning',
						icon: false,
						message: "手机号不正确",
					})
					return;
				}
				// if (this.vCode == '') {
				// 	uni.showToast({
				// 		title: '请输入验证码',
				// 		icon: 'none'
				// 	});
				// 	return;
				// }
				if (this.password.length < 6) {
					this.$refs.uToast.show({
						type: 'warning',
						icon: false,
						message: "密码应不少于6位",
					})
					return;
				}

				let param = {
					"userName": this.userName,
					"companyName": this.companyName,
					"companyJob": this.companyJob,
					"companyCreditCode": this.companyCreditCode,
					"companyLogin": this.companyLogin,
					"tellPhone": this.tellPhone,
					"password": this.password,
					// "verifyCode": this.vCode,
				};
				uni.request({
					url: baseUrl + '/sxcustom/register',
					data: JSON.stringify(param),
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					success: (res) => {
						console.log("注册", res);

						// 注册成功
						if (res.data.success) {
							this.showPopup = true
						} else {
							this.$refs.uToast.show({
								type: 'error',
								icon: false,
								message: "该手机号已注册！",
							})
						}
					}
				});
			},
			bindLogin2() {
				uni.navigateTo({
					url: '/pages/user/login'
				})
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

	.popup-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 460rpx;
		height: 460rpx;

		.pop-img {
			display: flex;
			justify-content: center;
			width: 100%;
			height: 220rpx;
			background-color: #f2f6fa;
			border-radius: 20rpx;

			image {
				width: 280rpx;
				height: 220rpx;
			}
		}

		.pop-succ {
			color: #195ed7;
			font-size: 56rpx;
			margin: 35rpx 0;
		}

		.pop-dl {
			color: #FFFFFF;
			font-size: 28rpx;
			width: 340rpx;
			height: 70rpx;
			background-color: #195ed7;
			border-radius: 50rpx;
			line-height: 70rpx;
			text-align: center;
		}
	}

	.header {
		width: 100%;
		height: 500rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	/* 	.header {
		width: 161rpx;
		height: 161rpx;
		border-radius: 50%;
		margin-top: 30rpx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 161rpx;
		height: 161rpx;
		border-radius: 50%;
	} */

	.list {
		display: flex;
		flex-direction: column;
		// padding-top: 50rpx;
		padding-left: 70rpx;
		padding-right: 70rpx;
	}

	.list-call {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
		line-height: 90rpx;
		// height: 100rpx;
		// line-height: 100rpx;
		color: #333333;
		border-bottom: 1px solid #d7d7d7;
		margin-top: 20rpx;

		text {
			width: 116rpx;
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
		font-size: 32rpx;
		margin-left: 16rpx;
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
		margin-top: 50rpx;
		// margin-top: 100rpx;
	}

	.button-hover {
		background-color: #1971c2;
	}

	.agreenment {
		color: #4a4a4a;
		font-size: 28rpx;
		margin-top: 30rpx;
		margin-left: 62%;
		height: 40rpx;
		width: 190rpx;
		line-height: 40rpx;
		box-sizing: border-box;
	}
</style>