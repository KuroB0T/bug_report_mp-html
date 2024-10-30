<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<mp-html :content="html" />
		</view>
	</view>
</template>

<script>
	import mpHtml from '@/uni_modules/mp-html/components/mp-html/mp-html'
	export default {
		components: {
		  mpHtml
		},
		data() {
			return {
				html: `
				<div onmouseover="alert('XSS1')">Hello World!</div>
				<iframe src="javascript:alert('XSS2')"/>
				`,
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
