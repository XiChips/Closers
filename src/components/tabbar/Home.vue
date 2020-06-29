<template>
    <div>
        <mt-swipe :auto="2000" :speed="200"> 
            <mt-swipe-item v-for="item in img" :key="item.src"><img :src="item.src" alt=""></mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="src/img/icon1.png">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/collections">
		                    <img src="src/img/icon2.png">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="src/img/icon3.png">
		                    <div class="mui-media-body">商品购物</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="src/img/icon4.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="src/img/icon5.png">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="src/img/icon6.png">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            img: [
                { src : "src/img/1.png"},
                { src : "src/img/2.png"},
                { src : "src/img/3.png"},
                { src : "src/img/4.png"},
            ],
        }
    },
}
</script>

<style  scoped>
    .mint-swipe{
        height : 220px;
    }
    .mint-swipe-item img{
        height: 100%;
        width: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell img{
        width: 60px;
        height: 60px;
    }
    .mint-swipe-indicator{
        opacity: 1;
    }
</style>