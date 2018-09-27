<template>
    <div class="relate">
        <h2><span>联系我们</span><em>Contact us</em></h2>
        <div class="phone">
            <p><img src="../assets/images/svg/address.svg">公司地址：深圳市南山区科技园粤兴三道2号虚拟大学园产业化基地三楼A307室</p>
            <span><img src="../assets/images/svg/servicePhone.svg">服务热线：400-161-3088</span>
        </div>
        <div class="baiduMap">
            <b-map></b-map>
        </div>

    </div>
</template>

<script>
    import Bmap from '@/components/Map'
    export default {
        name:'relate',
        components:{
            'b-map':Bmap
        }
    }
</script>

<style lang="scss" scoped>
.relate{
    width: 1100px;
    margin: 40px auto 100px auto;
    height: 500px;
    position: relative;
    @include titleStyle;
    .phone{
        float: left;
        width: 450px;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        p,span{
            display: inline-block;
            line-height: 36px;
            font-size: 16px;
            img{
                width: 24px;
                height: 24px;
                position: relative;
                top:4px;
                margin-right: 4px;
            }
        }

    }
    .baiduMap{
        float: right;
        span{

            font-size: 20px;
            color: $color;
            border-bottom:1px $color solid;
        }
    }

}
</style>