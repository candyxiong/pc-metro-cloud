<template>
    <div class="service">
        <h4><img src="../assets/images/service.jpg"></h4>
        <div class="serviceInfo">
            <div class="serviceScope">
                <h2><span>服务范围</span><em>Service scope</em></h2>
                <p>尊贵服务，三地尊享</p>
                <div class="serviceNav">
                    <ul>
                        <li
                        v-for="(item,index) in tabs"
                        :class="{active:index == num}"
                        @click="tab(index)">{{item}}</li>
                    </ul>
                    <div class="tabCon">
                        <div
                        v-for='(itemCon,index) in tabContents'
                        v-show=" index == num">
                            <img :src="itemCon.imgItem" />
                            <p>{{itemCon.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="serviceStep">
                <h2><span>服务流程</span><em>Service step</em></h2>
                <div class="steps">
                    <!--<el-steps :active="3">-->
                        <!--<el-step title="多通道办理" icon="el-icon-tickets" description="关注园区通信服务公众号、通过MyBay  APP、拨打服务热线400-161-3088、亲临现场服务处"></el-step>-->
                        <!--<el-step title="业务受理" icon="el-icon-service" description="服务平台派出客服人员回访客户，落实需求并受理业务"></el-step>-->
                        <!--<el-step title="上门安装" icon="el-icon-location-outline" description="在业务受理后进行资源确认，随后预约客户上门安装调试"></el-step>-->
                    <!--</el-steps>-->
                    <el-steps :active="3">
                        <el-step title="多通道办理" description="关注园区通信服务公众号、通过MyBay  APP、拨打服务热线400-161-3088、亲临现场服务处"></el-step>
                        <el-step title="业务受理" description="服务平台派出客服人员回访客户，落实需求并受理业务"></el-step>
                        <el-step title="上门安装调试" description="在业务受理后进行资源确认，随后预约客户上门安装调试"></el-step>
                    </el-steps>
                </div>
            </div>
            <div class="servicePromise">
                <h2><span>服务承诺</span><em>Service promise</em></h2>
                <div class="promiseInfo">
                    <ul>
                       <li><img src="../assets/images/svg/time.svg" /><span>7x24小时竭诚服务</span></li>
                        <li><img src="../assets/images/svg/locate.svg" /><span>专业技术人员派驻每个园区</span></li>
                        <li><img src="../assets/images/svg/home.svg" /><span>专业服务人员对接每栋楼客户</span></li>
                        <li><img src="../assets/images/svg/fly.svg" /><span>快速响应客户需求</span></li>
                    </ul>
                    <h4><img src="../assets/images/promise.png"></h4>
                </div>
                <div class="standard">
                    <h4>快速响应标准</h4>
                    <p>1、收到服务申请单后，24小时内回访客户落实需求；</p>
                    <p>2、在1个工作日内，完成资源确认；</p>
                    <p>3、在1个工作日内，完成电话开通；</p>
                    <p>4、在3个工作日内，完成自营光纤上网；</p>
                    <p>5、在7个工作日内，完成运营商光纤上网；</p>
                    <p>6、在20个工作日内，完成运营商光纤专线。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import img_scope1 from '../assets/images/scope1.jpg'
    import img_scope2 from '../assets/images/scope2.jpg'
    import img_scope3 from '../assets/images/scope3.jpg'
    export default {
        data() {
            return {
                tabs: ["深圳湾科技生态园", "创业投资大厦","创智天地大厦"],
                tabContents: [
                    {imgItem:img_scope1,content:'位于深圳高新区南区核心地带， 2栋多层、6栋高层、4栋超高层，总建筑面积188.57万平方米。是高科技上市公司总部和研发基地、战略性新兴产业培育发展平台、创新型中小企业孵化器、国家级低碳生态示范围、高新区配套服务中心。'},
                    {imgItem:img_scope2,content:'深圳湾创业投资大厦位于深圳高新区南区核心地带。建筑形态为186米超高层，总建筑面积9.45万平方米，是深圳湾科技金融产业集聚区，集办公、创业投资交流与配套服务为一体的创业投资中心。'},
                    {imgItem:img_scope3,content:'深投控创智天地大厦位于市高新区南区，毗邻城市主干道深南大道、科苑大道，联通南海大道，与深圳大学一步之遥。项目用地面积5654.8㎡，总建筑面积94034㎡，总投资约12亿元，由两栋为134.5米和148.5米的双子塔楼及38.5米高的裙楼组成，集研发办公、高端公寓、配套商业等多元业态于一体。'},
                ],
                num: 0
            };
        },
        methods: {
            tab(index) {
                this.num = index;
            }
        }
    }
</script>

<style lang="scss" scoped>
.service h4{
    img{
        width: 100%;
        height: 480px;
    }

}
.serviceInfo{
    &:after{
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .serviceScope{
        @include mainCenter;
        @include titleStyle;
        >p{
            text-align: center;
            font-size: 16px;
            margin: 20px 0;
        }
        .serviceNav {
            border: 1px #aaa solid;
            padding: 30px;
            ul {
                text-align: center;
                li{
                    display: inline-block;
                    font-size: 20px;
                    padding: 14px 0;
                    margin: 0 34px 20px 34px;
                    &.active,&:hover{
                        color: $color;
                        border-bottom: 1px $color solid;
                    }
                }
            }
            .tabCon {
                position: relative;
                img{
                    width: 330px;
                }
                p{
                    position: absolute;
                    top:50%;
                    transform: translateY(-50%);
                    -webkit-transform: translateY(-50%);
                    display: inline-block;
                    width: 52%;
                    line-height: 30px;
                    margin-left: 14px;
                    font-size: 16px;
                }
            }

        }
    }
    .serviceStep {
        @include titleStyle
    }
    .steps{
        //height:300px;
        width: 1000px;
        margin: 50px auto;
    }
    .servicePromise {
        width: 1000px;
        margin: 36px auto;
        @include titleStyle;
        .promiseInfo{
            ul{
                float: left;
                width: 50%;
                text-align: -webkit-center;
                li{
                    width: 50%;
                    display: inline-block;
                    margin: 60px 0;
                    img{
                        display: block;
                        width: 54px;
                        height: 54px;
                    }
                    span{
                        display: block;
                        font-size: 16px;
                        margin-top: 10px;
                    }
                }
            }
            h4 {
                display: inline-block;
                width: 50%;
                img{
                    width: 100%;
                }

            }
        }
        .standard {
            h4{
                font-size: 20px;
                color: $color;
                margin-bottom: 14px;
            }
            p{
                font-size: 16px;
                line-height: 30px;
                text-indent:20px
            }
        }
    }
}

</style>