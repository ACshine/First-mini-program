<template>
		            <view class="box">
		                <view class="label" v-for="(row,index) in NavOpts" :key="row.name" hover-class="hover">
		                    <view class="icon">
		                        <image class="img" :src="'../../static/images/'+row.icon"></image>
		                    </view>
		                   <text class="info"> {{row.name}} </text>
		                </view>
		            </view>

</template>

<script setup>
	import { ref } from "vue";
	const NavOpts=ref([
		{
			//name-标题 icon-图标 
			name: '诊前约号',
			icon: 'home-top-p1.png',
		},
		{
			
			name: '代办买药',
			icon: 'home-top-p1.png',
		},
		{
			
			name: '全程陪诊',
			icon: 'home-top-p1.png',
		},
	]);
	
</script>

<style lang="scss" scoped>
	.box {
	        width: 96%;
	        height: 22vw;
	        //background-color: #CCFFFF;
	        border-radius: 24upx;
	        /*  阴影 */
	        box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
	        margin: 40upx 2% 0upx 2%;
	        display: flex;
	        align-items: center;
	        justify-content: center;
	
	        // 包含图片，图标的view
	        .label {
	            display: flex;
	            flex-direction: column;
	            align-items: center;
	            justify-content: center;
	            width: 100%;
	            height: 16vw;
	            color: #666666;
	            font-size: 26upx;
				.info{
					font-size: 30rpx;
					font-weight:bolder;
				}
	            .icon {
					.img{
						border-radius: 50%;
					}
					
	                position: relative;
	                width: 7vw;
	                height: 7vw;
	                margin: 0 1vw 2vw 1vw;
	
	                // 文字上的图片
	                image {
	                    width: 7vw;
	                    height: 7vw;
	                    z-index: 9;
	                }
	            }
	        }
		}
	
</style>