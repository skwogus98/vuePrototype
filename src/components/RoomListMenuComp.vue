<template>
  <b-modal id="MenuModal" size="lg" hide-footer title="메뉴" 
  header-text-variant="light"
  header-bg-variant="secondary">
    <div class="MenuContainer">
      <b-list-group>
        <b-list-group-item variant="dark">주문 메뉴</b-list-group-item>
        <b-list-group-item class="MenuDetail" variant="light" :key="key" v-for="(menu, key) in selectMenu">
          <b-form-input type="text" id="MenuInput" placeholder="메뉴 이름" v-model="selectMenu[key]['menuName']"></b-form-input>
          <b-form-input type="number" id="menuPrice" placeholder="가격" v-model="selectMenu[key]['price']"></b-form-input>
          <b-form-input type="number" id="menuCount" placeholder="개수" v-model="selectMenu[key]['menuCount']"></b-form-input>
          <b-button class="DelMenu" variant="danger" @click="delMenu(key)">X</b-button>
        </b-list-group-item>
        <b-list-group-item variant="light">
          <b-button @click="addMenu">메뉴 추가</b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
      <textarea id="ReqestInput" cols="27" rows="4" placeholder="요청사항을 적어주세요."></textarea>
      <b-button variant="success" style="float: right;" @click="requestMenu">메뉴 담기</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "RoomListMenuComp",
  props: {
    popupVal: {} 
  },
  data() {
    return {
      selectMenu:[{
          "menuName":null,
          "price":null,
          "menuCount":null
        }
      ],
    }
  },
  methods:{
    addMenu(){
      console.log(this.selectMenu)
      this.selectMenu.push({
          "menuName":null,
          "price":null,
          "menuCount":null
        })
      console.log(this.selectMenu)
    },
    delMenu(num){
      this.selectMenu.splice(num,1);
      console.log(this.selectMenu)
    },
    requestMenu(){
      console.log(this.selectMenu)
      /*
      axios
      */
      this.$bvModal.hide("MenuModal")
    },
    setMenu(userMenu){
      if(userMenu.length!=0){
        this.selectMenu = null
        this.selectMenu = userMenu
      }
      //this.selectMenu = userMenu
    }
  }
}
</script>

<style>
.MenuContainer{
  width: 100%;
  margin-right: 1%;
  height: 450px;
  float: left;
  overflow: auto;
}
.MenuSeleced{
  width: 29%;
  float: right;
}
#ReqestInput{
  width: 100%;
  height: 27%;
  text-overflow:clip;
}
.DelMenu{
  float: right;
}
#menuCount{
  width: 10%;
  float: left;
}
#MenuInput{
  width: 50%;
  float: left;
}
#menuPrice{
  width: 30%;
  float: left;
}
.MenuDetail input{
  margin-right: 1%;
}
</style>