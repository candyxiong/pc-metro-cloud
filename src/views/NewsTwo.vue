<template>
    <div class="detailTwo">
        <h2>{{title}}</h2>
        <div class="contentTwo">
            <section>
                <p>智慧城市、全息通讯、万物互联、智能家居、远程医疗……，对于未来世界，人们向来不吝想象。随着科技的不断发展，这些曾经只停留在影视剧中的想象，开始有了实现的机会。而在这些畅想实现的进程中，5G扮演了一个极为关键的角色。毋庸置疑，5G将会引领一场深刻的革新，触及社会的方方面面，包括我们的日常生活方式。</p>
                <p>在此背景下，由OFweek中国高科技行业门户主办，OFweek光通讯网承办的“OFweek 2018（第十二届）中国光通讯技术与应用研讨会”将于2018年9月6日在深圳召开。会议集结了通信领域权威专家、企业代表围绕5G时代光通讯产业的新需求、前沿技术方案、相关标准及挑战深度解读，为您全面解析5G的现状与未来，是促进光通讯产业发展、增进产业链上下游企业沟通与交流的高效平台。期待您的到来！</p>
            </section>
            <section>
                <h4>会议核心亮点</h4>
                <h4>深度解读｜把脉行业发展态势</h4>
                <p>邀请业内权威专家学者、上下游企业代表共聚一堂，围绕光通讯行业前沿技术、市场现状多视角切入，把脉行业发展现状及趋势，紧随5G发展最新动向。</p>
                <h4>多年积淀｜发挥行业引领作用</h4>
                <p>数十年行业经验积淀，业内富有影响力的年度光通讯盛会，充分发挥专业平台优势。行业大咖、运营商、设备商、投融资机构齐聚一堂，齐心助力行业生态健康发展。</p>
                <h4>权威专家、企业代表齐聚</h4>
                <p>武汉邮电科学研究院教授高级顾问毛谦，中国移动通信研究院博士教授级高工徐荣等行业权威专家出席助力，分享权威内容、前沿动态，提升会议高度。</p>
                <h4>线上线下｜打造全方位影响力</h4>
                <p>引入线上直播方式，即时互动，最大化会议影响力。</p>
                <h4>整合资源｜强化品牌传播效应</h4>
                <p>OFweek将运用国内外全方位媒体资源对优秀项目及成果提供专访报道机会，量身定制事件公关，挖掘新闻点，搜索引导。有效助力企业拓展品牌和影响力，捕捉更多市场机会。
                </p>
            </section>
        </div>
        <div class="detailEnd">
            <p><span>上一篇</span><router-link to="/newsone">激荡四十年 ·通信业改变我们的生活</router-link></p>
            <p><span>下一篇</span><router-link to="/newsthree">五张热门通信行业资格证书，考到即赚到！</router-link></p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                title:'革新领航｜见证5G时代崛起'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .detailTwo{
        @include mainCenter;
        margin: 40px auto 0 auto;
        h2{
            font-size: 24px;
            text-align: center;
            margin-bottom: 10px;
        }
        .contentTwo section{
            h4{
                text-indent: 20px;
                font-size: 16px;
                font-weight: bold;
                margin: 18px 0;
            }
            p{
                line-height: 30px;
                text-indent: 20px;
            }
        }
        .detailEnd{
            margin: 80px 0;
            p{
                margin-top: 10px;
                span{
                    display: inline-block;
                    margin-right: 30px;
                }
                a{
                    color: #313131;
                    &:hover{
                        color: $color;
                    }
                }
            }
        }
    }
</style>