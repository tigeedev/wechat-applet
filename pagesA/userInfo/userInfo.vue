<template>
	<view>
		<u-cell-group>
			<u-cell size="large" isLink @click="changeHead()">
				<text slot="title" class="u-slot-title">头像</text>
				<u-avatar slot="value" :src="userInfo.headImg" size="50"></u-avatar>
			</u-cell>
			<u-cell size="large" isLink @click="modifyNickname">
				<text slot="title" class="u-slot-title">昵称</text>
				<text slot="value" class="u-text">{{userInfo.nickName == ''? '未设置' : userInfo.nickName}}</text>
			</u-cell>
			<u-cell size="large" isLink @click="selectSex">
				<text slot="title" class="u-slot-title">性别</text>
				<text slot="value" class="u-text">{{userInfo.sex == ''? '未设置' : userInfo.sex}}</text>
			</u-cell>
			<u-cell size="large" :isLink="false">
				<text slot="title" class="u-slot-title">手机号</text>
				<!-- 手机号脱敏 -->
				<text slot="value">{{userInfo.tellPhone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}}</text>
			</u-cell>
			<u-cell size="large" isLink @click="contactAddress">
				<text slot="title" class="u-slot-title">联系地址</text>
				<text slot="value" class="sl-txt">{{userInfo.address == ''? '未设置' : userInfo.address}}</text>
			</u-cell>
		</u-cell-group>

		<!-- 消息提示 -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue'

	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		computed: {
			...mapState(['hasLogin', 'userInfo'])
		},
		data() {
			return {
				headImg: '',
				sex: '男',
			}
		},
		methods: {
			...mapMutations(['login']),

			modifyNickname() {
				uni.navigateTo({
					url: '/pagesA/userInfo/modifyNickname',
				})
			},
			contactAddress() {
				uni.navigateTo({
					url: '/pagesA/userInfo/contactAddress',
				})
			},
			// 上传头像
			changeHead() {
				let that = this
				uni.chooseImage({
					sourceType: ['album'], //从相册选择
					success: chooseImageRes => {
						console.log('成功', chooseImageRes);
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: baseUrl + '/member/user/importHead', //图片上传接口
							filePath: tempFilePaths[0],
							name: 'file',
							header: {
								accessToken: uni.getStorageSync('accessToken'),
								platform: 2,
								type: 1
							},
							formData: {
								category: 3
							},
							success: res => {
								console.log('上传成功', JSON.parse(res.data));
								let data = JSON.parse(res.data);
								// 成功：获取到头像
								if (data.status == '200') {
									this.headImg = baseUrl + data.obj.url
									let model = {
										"headUrl": this.headImg,
										"id": this.userInfo.id
									}
									uni.request({
										url: baseUrl + "/member/user/updateBaseInfo",
										method: 'PUT',
										data: model,
										header: {
											'content-type': 'application/json'
										},
										success: (res) => {
											this.$refs.uToast.show({
												type: 'success',
												message: "修改成功"
											})

											// 上传头像后 更新本地缓存
											var userInfo = {
												headImg: that.headImg
											};
											that.login(userInfo);
										}
									});
								}
							}
						});
					}
				});
			},
			selectSex() {
				let that = this
				const arr = ['男', '女']
				uni.showActionSheet({
					itemList: arr,
					success: (res) => {
						this.userInfo.sex = arr[res.tapIndex]

						let model = {
							"sex": arr[res.tapIndex],
							"id": this.userInfo.id
						}
						uni.request({
							url: baseUrl + "/member/user/updateBaseInfo",
							method: 'PUT',
							data: model,
							header: {
								'content-type': 'application/json',
							},
							success: (ress) => {
								this.$refs.uToast.show({
									type: 'success',
									message: "修改成功",
									complete() {
										// 修改成功后 更新本地缓存
										var userInfo = {
											sex: arr[res.tapIndex],
										};
										that.login(userInfo);
									}
								})
							}
						});
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.u-slot-img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.u-slot-title {
		color: #3e4248;
		font-size: 28rpx;
		font-weight: 0;
		min-width: 200rpx;
	}

	.u-text {
		color: #666;
	}

	.sl-txt {
		color: #999;
	}

	.u-cell__body--large {
		padding: 30rpx 40rpx !important;
	}
</style>