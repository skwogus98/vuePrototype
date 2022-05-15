<template>
  <div id="map" style="width:220px;height:220px;"/>
</template>

<script>
export default {
  data() {
    return { //https://codesandbox.io/s/nervous-keldysh-87yxg?file=/src/components/KakaoMap.vue:546-3501
      map:null
    };
  },
  methods:{
    initMap(){
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
      };
      this.map = new kakao.maps.Map(container, options)
      console.log("asdf")
    }
  },
  mounted() {
    if(!window.kakao || window.kakao.maps){
      const script = document.createElement("script");
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=59a464bf1d4f9a4bf5530d15b31ca9f2"
      /* global kakao*/
      script.addEventListener("load", ()=>{
        kakao.maps.load(this.initMap)
      })
      document.head.appendChild(script);
    }
    /* else{
      this.initMap()
    } */
    while(document.getElementById("map")==null){
      //this.initMap();
      if(document.getElementById("map")!=null){
        console.log("hi")
      }
    }
  },
}
</script>