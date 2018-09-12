<template>
  <div class="home">
      <h2><span>服务项目</span><em></em></h2>
      <div class="projectList">
        <ul>
            <li v-for="item in projets">
                <h4>
                    <img :src="item.img">
                    <span>{{item.type}}</span>
                </h4>
                <p>{{item.describe}}</p>
            </li>
        </ul>
      </div>
      <h2><span>合作伙伴</span><em></em></h2>
      <div class="partnerList">
          <ul>
              <li><img src="../assets/images/yd.jpg"></li>
              <li><img src="../assets/images/lt.png"></li>
              <li><img src="../assets/images/dx.png"></li>
          </ul>
      </div>
  </div>
</template>

<script>
    //import '../assets/images/phone.jpg'

export default {
  name: "home",
  data(){
      return{
          projets:[
              {img:'../assets/images/phone.jpg',type:'电话',describe:'提供运营商综合性、全方位、多层次语音服务和增值服务;</br>提供呼叫转移、企业彩铃、网络传真、企业总机等服务；</br>提供400企业专线；</br>提供企业靓号，海量号码，任意挑选。'},
              {img:'../assets/images/wifi.jpg',type:'宽带',describe:'以速度取胜，带宽持续升级，步入千兆光速时代;</br>提供优质网络、价格实惠，产品广泛、安装简单快捷。'},
              {img:'../assets/images/wifi.jpg',type:'专线',describe:'提供专用信道，让数据传输变得可靠可信；</br>拥有四芯双连环安全电路保障；</br>可提供上下行对称固定IP带宽。'},
              {img:'../assets/images/wifi.jpg',type:'SD-WAN',describe:'综合利用多条共有或私有链路，让普通链路能够达到专线的网络质量，降低流量成本，提高带宽；</br>根据现网情况及配置的策略，自动选择最佳路径，实现负载均衡，保证了网络质量。'},
              {img:'../assets/images/wifi.jpg',type:'MPLS VPN',describe:'为企业用户构建的企业内部专网，可实现跨区分支机构之间内部数据、语音、图像等多种业务通信；</br>产品性价比高、安全性高、灵活可扩充，服务质量好。'},
              {img:'../assets/images/wifi.jpg',type:'IDC、云服务',describe:'提供专业化服务器托管、空间租用以及网络批发带宽等业务；</br>提供弹性云端计算服务；</br>快速完成对云服务器及公网 IP 等资源申请，实现应用快速部署。还可将私有云硬盘挂载云服务器，保证数据更安全、更具灵活性；</br>园区内五分钟到达机房。'},
              {img:'../assets/images/wifi.jpg',type:'BGP带宽',describe:'自动最优网络路径的选择线路冗余网络可靠稳定实现多网接入。</br>BGP实现了用户最佳路径的自动选择，即使遇到单条线路故障，BGP依然可以自动引导用户选择最佳的访问路径。'}
          ]
      }
  },
  components: {

  }
};
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    margin: 0 auto;
    padding: 0 10%;
    margin-top: 20px;
    h2{
      text-align: center;
      font-size: 26px;
      color: #009fe9;
      margin: 40px 0;
      span{
        display: inline-block;
        border-bottom: 1px $color solid;
        padding-bottom: 10px;
      }
    }
    .projectList ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            float: left;
            width: 30%;
            min-width: 220px;
            max-width: 270px;
            height: 300px;
            padding: 2%;
            border: 1px #ddd solid;
            border-radius: 4px;
            margin: 8px;
            //-webkit-box-shadow: 5px 5px 14px #999;
            h4{
                text-align: center;
                img{
                    width: 50px;
                }
                span{
                    display: block;
                    font-size: 20px;
                    margin: 20px 0;
                }
            }
            p{
            }
        }
    }
      .partnerList ul {
          display: flex;
          justify-content: space-around;
          li{
              img{
                  width: 150px;
              }
          }
      }


  }

</style>
