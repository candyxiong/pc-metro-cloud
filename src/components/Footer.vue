<template>
    <div class="footer">
        <div class="companyInfo">
            <div class="companyText">
                <h2>深圳市威莱堡科技有限公司</h2>
                <p>服务热线：400-161-3088</p>
                <p>地　　址：深圳市南山区科技园粤兴三道2号虚拟大学园产业化基地三楼A307室</p>
                <p>粤ICP备18091124号</p>
                <p>版权所有 © 2018 深圳市威莱堡科技有限公司</p>
            </div>
            <div class="companyQR">
                <h4>
                    <img src="../assets/images/QR-M.jpg">
                    <p>My Bay APP</p>
                </h4>
                <h4>
                    <img src="../assets/images/QR-W.jpg">
                    <p>园区通信运营服务平台</p>
                </h4>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "app-footer",

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer{
        .companyInfo{
            width: 100%;
            min-width: 1200px;
            margin: 0 auto;
            padding: 30px 10%;
            height: 200px;
            background: #2b2b2b;
            .companyText{
                display: inline-block;
                h2{
                    color: #eee;
                    font-size: 20px;
                }
                p{
                    color: #aaa;
                    font-size: 16px;
                    margin-top: 6px;
                }

            }
            .companyQR{
                float: right;
                h4{
                    display: inline-block;
                    margin: 0 24px;
                    img{width: 120px}
                    p{
                        color: #fff;
                        text-align: center;
                        font-size: 12px;
                    }
                }
            }
            .recode{
                p{
                    color: #eee;
                }
            }
        }

    }
</style>
