<template>
    <div class="createRoomBg">
        <b-form @submit="onSubmit">
            <b-form-input id="title" placeholder="제목을 입력해 주세요." v-model="RoomData.title"></b-form-input>
            <b-form-group class="roomDetailForm">
                <b-form-input id="place" placeholder="분배장소" v-model="RoomData.place"></b-form-input>
                <b-button>찾기</b-button>
                <b-form-input id="restaurant" placeholder="음식점" v-model="RoomData.restaurant"></b-form-input>
                <b-button>찾기</b-button>
                <b-form-input id="money" placeholder="금액" type="number" v-model="RoomData.money"></b-form-input>
                <b-form-input id="person" placeholder="인원 수" type="number" v-model="RoomData.person"></b-form-input>
            </b-form-group>
            <b-form-group class="submitButton">
                <b-button type="submit" variant="primary">방만들기</b-button>
            </b-form-group>      
      </b-form>
  </div>
</template>

<script>
export default {
  name: "CreateRoomView",
  props: {},
  data() {
    return {
      RoomData:{
          title:'',
          place:'',
          restaurant:'',
          money:null,
          person:null
      }
    };
  },
  components: {},
  methods: {
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.RoomData))
      },
  },
};
</script>

<style>
.createRoomBg{
    width: 768px;
    background-color: rgb(245, 245, 245);
    margin: auto;
    border-radius: 13px;
    margin-top: 0px;
    margin-bottom: 30px;
    padding: 40px;
}
.createRoomBg input{
    margin-bottom: 10px;
}
.createRoomBg #title{
    margin-bottom: 30px;
}
.roomDetailForm input{
    width: 90%;
    float: left;
}
.roomDetailForm button{
    width: calc(10%-10px);
    float: right;
    margin-left: 10px;
}

.createRoomBg.submitButton button{
    margin-top: 20px;
}
</style>
