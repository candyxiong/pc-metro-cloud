<template>
    <div class="bMap">
        <baidu-map class="bm-view" :center="{lng:113.9510144536,lat:22.5328069443}" :zoom="15" :scroll-wheel-zoom="true">
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-marker :position="{lng: 113.9510144536, lat: 22.5328069443}" :dragging="true"  @click="infoWindowOpen" >
                <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">深圳市南山区粤兴三道虚拟大学园产业化基地三楼A307室</bm-info-window>
            </bm-marker>
        </baidu-map>
    </div>
</template>
<script>
    export default {
        name:'bMap',
        data () {
            return {
                show: true
            }
        },
        methods: {
            infoWindowClose () {
                this.show = false
            },
            infoWindowOpen () {
                this.show = true
            }
        }
    }
</script>
<style>
    .bm-view {
        width: 600px;
        height: 400px;
    }
</style>