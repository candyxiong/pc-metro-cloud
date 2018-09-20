<template>
    <div class="news">
        <h4><img src="../assets/images/news.jpg"></h4>
        <div class="newsInfo">
            <h2><span>新闻资讯</span><em>News information</em></h2>
            <div class="newsContent">
                <img src="../assets/images/newsInfo.jpg" />
                <p>上半年移动互联网累计流量同比增长近两倍<br>
                    通信业：提速降费带动消费升级<br>
                    工信部最新数据显示，2018年上半年，电信业务收入累计完成6720亿元，同比增长4.1%。其中，移动流量数据最为亮眼——上半年移动互联网累计流量达266亿GB，同比增长199.6%；通过手机上网的流量达262亿GB，同比增长214.7%，占移动互联网总流量的98.3%。
                    在通信网络设施不断提升、提速降费连续推进、移动应用日益丰富等因素推动下，信息消费不断升级，运营商正加速向智能网络、精益管理、平台服务转型。同时，新一代移动通信技术快速发展，与移动互联网、物联网、人工智能等新兴技术交织并进，不断催生新产业、新业态、新模式，成为我国经济社会发展的新动能。</p>
            </div>
        </div>
        <div class="newsTimer">
            <div id="timeleft">
                <p>2018-08-20</p>
                <p>2018-08-06</p>
                <p>2018-07-24</p>
            </div>
            <div id="timecenter">
                    <ul>
                        <li class="cicle1"></li>
                        <li class="cicle2"></li>
                        <li class="cicle3"></li>
                    </ul>
            </div>
            <div id="timeright">
                <p>
                    激荡四十年 ·通信业改变我们的生活<br>
                    历史的车轮滚滚向前，改革的步伐铿锵有力。通信技术日新月异，从电报、固定电话、大哥大、BB机等再到移动电话的迅猛发展...</p>
                <p>革新领航｜见证5G时代崛起<br>
                    智慧城市、全息通讯、万物互联、智能家居、远程医疗……，对于未来世界，人们向来不吝想象。随着科技的不断发展，这些曾经...</p>
                <p>
                    五张热门通信行业资格证书，考到即赚到！<br>
                    该专业是现代高新技术的重要组成部分，是信息社会的主要支柱，是国民经济高速发展的前提，国家的神经系统和命脉。现代通信...</p>
            </div>

        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .news{
        h4{
            img{
                width: 100%;
                height: 480px;
            }
        }
        .newsInfo{
            @include mainCenter;
            @include titleStyle;
            .newsContent {
                position: relative;
                margin: 40px 0;
                img{
                    width: 46%;
                }
                p{
                    width: 52%;
                    display: inline-block;
                    margin-left: 14px;
                    line-height: 30px;
                    position: absolute;
                    top:50%;
                    transform: translateY(-50%);
                    -webkit-transform: translateY(-50%);
                }
            }
        }
        .newsTimer{
            @include mainCenter;
            #timeleft {
                display: inline-block;
                p {
                    height: 82px;
                }
            }

            #timecenter {
                color: #333;
                display: inline-block;
                margin-left: 20px;
                ul{
                    height:176px;
                    border-left:1px solid #aaa;
                }
            }

            #timeright {
                display: inline-block;
                p {
                    height: 72px;
                }
            }
            .cicle1 {
                top: 0px;
                left: -10px;
                @include cicleStyle
            }

            .cicle2 {
                top: 65px;
                left: -10px;
                @include cicleStyle
            }

            .cicle3 {
                top: 130px;
                left: -10px;
                @include cicleStyle
            }
        }

    }





</style>