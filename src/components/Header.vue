<template>
    <div class="header">
        <h4><img src="../assets/images/logo.jpg"></h4>
        <div class="headerNav">
            <ul>
                <li>首页</li>
                <li>我们的服务</li>
                <li>新闻动态</li>
                <li>联系我们</li>
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
    padding: 0 10%;
    border-bottom: 1px #ddd solid;
    box-shadow: 5px 5px 14px #999;
    -webkit-box-shadow: 5px 5px 14px #999;
    h4{
        text-align: center;
        vertical-align: middle;
        float: left;
        img{
            width: 250px;
            vertical-align: middle;
        }
    }
    .headerNav{
        float: right;
        ul{
            li{
                display: inline-block;
                border: 1px #340c6f solid;
                color: #340c6f;
                text-align: center;
                margin: 0 10px;
                width: 88px;
                height: 46px;
                line-height: 46px;
                border-radius: 4px;
                &:hover{background:#340c6f;color: #fff }
            }
        }
    }
}
</style>
