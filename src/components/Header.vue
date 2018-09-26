<template>
    <div class="header">
        <h4><img src="../assets/images/logo.jpg"></h4>
        <div class="headerNav">
            <ul>
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/service">我们的服务</router-link></li>
                <li><router-link to="/news">新闻动态</router-link></li>
                <li><router-link to="/relate">联系我们</router-link></li>
                <li><img src="../assets/images/svg/phone.svg"><span>400-161-3088</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {


    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
    width: 100%;
    min-width: 900px;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
    padding: 0 12%;
    border-bottom: 1px #ddd solid;
    box-shadow: 5px 5px 14px #999;
    -webkit-box-shadow: 5px 5px 14px #999;
    h4{
        text-align: center;
        vertical-align: middle;
        float: left;
        >img{
            width: 250px;
            vertical-align: middle;
        }
    }
    .headerNav{
        float: right;
        ul{
            li{
                display: inline-block;
                a{
                    display: inline-block;
                    border: 1px #313131 solid;
                    color: #313131;
                    text-align: center;
                    margin: 0 6px;
                    width: 88px;
                    height: 44px;
                    line-height: 44px;
                    border-radius: 4px;
                    &:hover{background:$background;color: #fff ;border: 1px $color solid;
                    }
                }
                .active{
                    background:$background;color: #fff;border: 1px $color solid;
                }
                img{
                    width: 30px;
                    height: 30px;
                    position: relative;
                    top:8px;
                }
                span{
                    font-size: 18px;
                    color: $color;
                    font-weight: bold;
                }
            }

        }
    }
}
</style>
