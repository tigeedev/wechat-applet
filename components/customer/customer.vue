<template>
	<view>
		<u-modal :show="show" :title="title">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		name: "customer",
		props: {
			visible: {
				type: Boolean,
				default: false,
			},
			
		}
		data() {
			return {
				show: this.visible,
				content: "即将进入客服"
			};
		}
	}
</script>

<style>

</style>