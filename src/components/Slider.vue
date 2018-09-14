<template>
    <div class="block">
        <el-carousel trigger="click" :height="carouselH">
            <el-carousel-item v-for="item in bannerList">
                <h3><img :src="item.bannerItem" ref="imageH"></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    import img_banner1 from '../assets/images/banner1.jpg'
    import img_banner2 from '../assets/images/banner2.jpg'
    import img_banner3 from '../assets/images/banner3.jpg'
    export default {
        name:'slider',
        data(){
            return{
                bannerList:[
                    {bannerItem:img_banner1},
                    {bannerItem:img_banner2},
                    {bannerItem:img_banner3},
                ],
                carouselH:''
            }
        },
        mounted(){
            //this.carouselH = '500px'
            var that = this


            window.onresize = function temp(){
                 //通过点语法获取img的height属性值
                that.carouselH = `${that.$refs.imageH['0'].height}px`
            }
        }
    }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .el-carousel__item h3 img{width: 100%}
    .el-carousel__container{height: 416px}
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>