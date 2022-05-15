<template>
  <div id="map" style="width:100%;height:400px;"/>
</template>

<script>
export default {
  data() {
    return { //https://codesandbox.io/s/nervous-keldysh-87yxg?file=/src/components/KakaoMap.vue:546-3501
      map:null,
      mapLat: {
          x: 33.450701,
          y: 126.570667
      } 
    };
  },
  methods:{
    initMap(){
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.mapLat.x, this.mapLat.y), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
      };
      this.map = new kakao.maps.Map(container, options)

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new kakao.maps.MapTypeControl();
      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      this.map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      
      var zoomControl = new kakao.maps.ZoomControl();
      this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    }
  },
  mounted() {
    if(!window.kakao || window.kakao.maps){
      const script = document.createElement("script");
      console.log("load0")
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=59a464bf1d4f9a4bf5530d15b31ca9f2"
      /* global kakao*/
      script.onload = () => kakao.maps.load(this.initMap);
      document.head.appendChild(script);
    }
    else{
      console.log("load2")
    }
  },
}
</script>