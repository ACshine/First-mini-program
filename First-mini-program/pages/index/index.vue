<template>
	<view class="home">
		<swiper class="home-top-pictures" circular="true" autoplay interval="5000" duration="300" indicator-dots="true"
		indicator-color="rgba(255,255,255,0.5)" indicator-active-color="rgba(255,255,255,1)">
			<swiper-item class="home-top-pictures-p">
				<image src="../../static/images/home-top-p1.png" mode="aspectFit"></image>
			</swiper-item>
			<swiper-item class="home-top-pictures-p" >
				<image src="../../static/images/home-top-p2.jpg" mode="aspectFit"></image>
			</swiper-item>
			<swiper-item class="home-top-pictures-p" >
				<image src="../../static/images/home-top-p3.jpg" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
				<Home-Nav></Home-Nav>
		
	</view>
</template>

<script setup>
	import { ref } from "vue";
	const title=ref("Hello!");
</script>

<style lang="scss" scoped>
	
.home-top-pictures{
	height: 400rpx;
	
	.home-top-pictures-p{
		image{
			width: 100%;
			height: 400rpx;
			border-radius: 15px;
			padding:10rpx;
		}
	}
}
.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15rpx 0;
	}

	
</style >
