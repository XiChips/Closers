
<template>
    <div>
        <div v-for="item in img" :key="item.src" class="box">
            <img class="cloImg"  :src="item.src" alt="">            
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>


export default {
    data(){
        return{
            img: [
                { src : "src/components/collections/colImg/1.jpg"},
                { src : "src/components/collections/colImg/2.jpg"},
                { src : "src/components/collections/colImg/3.jpg"},
                { src : "src/components/collections/colImg/4.jpg"},
                { src : "src/components/collections/colImg/5.jpg"},
                { src : "src/components/collections/colImg/6.jpg"},
                { src : "src/components/collections/colImg/7.jpg"},
                { src : "src/components/collections/colImg/8.jpg"},

            ],
        }
    },
    methods:{
        waterFall(){
            
            $(document).ready(function(){
                let img = $('.cloImg');
                let imgWidth = img.width();
                let screenWidth = $(window).width();
                let cols = parseInt(screenWidth/imgWidth);
                let heightArr = [];

                $.each(img,function(index,item){
                    if(index < cols){
                        heightArr[index] = $(item).height()+10;
                    }else{
                        let min = Math.min(...heightArr);
                        let minImgIndex = $.inArray(min,heightArr)
                        $(item).css({
                            position : "absolute",
                            left :minImgIndex*130+20+"px",
                            top : min+40 +'px',
                        })
                        
                        heightArr[minImgIndex] += $(item).height()+20;
                    }
                })
                $(".bottom").css({
                    top : Math.max(...heightArr),
                })
            });
        
        },

        load(){
            var _this = this;
            // $.ajax({
            //     url:"http://localhost:3000/collection.txt",
            //     dataType : "json",
            //     success(arr){
            //         console.log(arr.src)
            //         for(let i=0 ; i < arr.src.length;i++){
            //             let imgArr = {src:arr.src[i]}
            //             _this.img.unshift(imgArr)
            //         }
            //     },error(err){
            //         console.log("失败了")
            //     }
            // })

            this.axios.get("http://localhost:3000/collection.txt").then(arr=>{
                console.log("111")
                console.log(arr.data.src)
                for(let i=0 ; i < arr.data.src.length;i++){
                    let imgArr = {src:arr.data.src[i]}
                    _this.img.unshift(imgArr)
                }
            })
        }
    },
    beforeMount: function(){
        this.load()
    }
    ,
    mounted: function(){
        setTimeout(() => {
            this.waterFall()
        }, 100);
            
        
       
    },
    
}
</script>
<style  scoped>
    .box{
        margin-left: 20px;
        height: auto;
    }
    .cloImg{
        width: 110px;
        float: left;
        margin:5px 20px 0 0;
        box-shadow: 1px 1px 1px rgba(0,0,0,.2);
        -moz-box-shadow: 1px 1px 1px rgba(0,0,0,.2);
        -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.2);
    }
    .bottom{
        width: 100%;
        height: 150px;
        position: absolute;
    }
</style>