<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in message" :key="item.time">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<h1>{{item.type}}</h1>  
							<p class="mui-ellipsis">{{item.msg}}</p>
                            <div class="info">
                                <span>{{item.time}}</span>
                                <span>{{item.count}}</span>
                            </div>
						</div>
					</a>
				</li>
				<!-- <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="src/img/news2.jpg">
						<div class="mui-media-body">
							<h1>[活动]</h1> 
							<p class="mui-ellipsis">三周年立绘活动发奖公告[已发放完成]</p>
                            <div class="info">
                                <span>发布时间：2019-10-20</span>
                                <span>浏览次数 130</span>
                            </div>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="src/img/news3.jpg">
						<div class="mui-media-body">
							<h1>[公告]</h1> 
							<p class="mui-ellipsis">12月5日全区例行维护公告</p>
                            <div class="info">
                                <span>发布时间：2019-10-10</span>
                                <span>浏览次数 204</span>
                            </div>
						</div>
					</a>
				</li>
                <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="src/img/news4.jpg">
						<div class="mui-media-body">
							<h1>[活动]</h1> 
							<p class="mui-ellipsis">特勤任务第一弹强势来袭 赚积分兑换各种福利道具！</p>
                            <div class="info">
                                <span>发布时间：2019-09-30</span>
                                <span>浏览次数 299</span>
                            </div>
						</div>
					</a>
				</li> -->

			</ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: [
                {img:'src/img/news1.png',type:'[活动]',msg:'“釜山”开放倒计时 整点在线福利送不停',time:'发布时间：2019-12-01',count:'3213'},
                {img:'src/img/news2.jpg',type:'[活动]',msg:'三周年立绘活动发奖公告[已发放完成]',time:'发布时间：2019-11-23',count:'3616'},
                {img:'src/img/news3.jpg',type:'[公告]',msg:'12月5日全区例行维护公告',time:'发布时间：2019-10-10',count:'2975'},
                {img:'src/img/news4.jpg',type:'[活动]',msg:'特勤任务第一弹强势来袭 赚积分兑换各种福利道具！',time:'发布时间：2019-09-30',count:'4212'},
            ]
        }
    }
}
</script>

<style scoped>
    .mui-media-body h1{
      font-size: 14px;
    }
    .mui-media-body p{
        font-size: 12px;
    }
    .mui-pull-left{
        height: 50px;
        width: 50px;
    }
    .mui-table-view .mui-media-object{
        max-width: 50px;
    }
    .mui-media-body h1 ,  .mui-ellipsis{
        line-height: 22px;
        margin: 0;
    }
    .mui-media-body h1{
        color: #e81b7f;
        float: left;
    }
    .mui-ellipsis{
        color: #333;
    }
    .mui-ellipsis{
        margin-left: 50px;
    }
    .info{
        font-size: 8px;
        display: flex;
        justify-content: space-between;
        color: #999;
    }
    .info span:nth-child(1){
        margin-left: 10px;
    }
    .info span:nth-child(2){
        margin-right: 70px;
    }
</style>