<template>
  <b-modal id="MenuModal" size="lg" hide-footer title="메뉴" 
  header-text-variant="light"
  header-bg-variant="secondary">
    <div class="MenuContainer">
      <b-list-group>
          <b-list-group-item variant="dark">주문 메뉴</b-list-group-item>
          <b-list-group-item variant="light" :key="key" v-for="(menu, key) in selectedMenu">
            <b-form-select v-model="selectedMenu[key].category" :options="categorySelect" id="category"></b-form-select>
            <b-form-select v-model="selectedMenu[key].menuName" :options="menuNameSelect[selectedMenu[key].category]" id="category"></b-form-select>
            <b-form-input v-if="selectedMenu[key].menuName=='custom'" id="customMenuInput"></b-form-input>
            <b-form-input type="number" id="menuCount" placeholder="개수"></b-form-input>

          </b-list-group-item>
          <b-list-group-item variant="light">
            <b-button @click="addMenu">메뉴 추가</b-button>
          </b-list-group-item>
        </b-list-group>
    </div>
      <textarea id="ReqestInput" cols="27" rows="4" placeholder="요청사항을 적어주세요."></textarea>
      <b-button variant="success">메뉴 담기</b-button>
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
      selectedMenu:[{
          "category":null,
          "menuName":null,
          "customMenu":null
        }
      ]
      ,
      categorySelect:[
        { value: 'coffee', text: '커피'},
        { value: 'desert',text: '디저트'}
      ],
      menuNameSelect:{
        'coffee': [
          {value: 'americano', text: '아메리카노'},
          {value: 'cafeLatte', text: '카페라떼'},
          {value: 'cafeMoca', text: '카페모카'},
          {value: 'custom', text: '직접 입력'}      
        ],
        'desert': [
          {value: 'cake', text: '케이크'},
          {value: 'croffle', text: '크로플'},
          {value: 'custom', text: '직접 입력'}      
        ],
      }
    }
  },
  methods:{
    addMenu(){
      this.selectedMenu.push({
          category:null,
          menuName:null
        })
      console.log(this.selectedMenu)
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
.SelectedMenu{
  background: #f0f0f0;
  overflow: auto
}
#ReqestInput{
  width: 100%;
  height: 27%;
  text-overflow:clip;
}
.MenuTable{
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
.MenuTable td{
  width: 30%;
  text-align: center;
}
.MenuTable p{
  font-weight: bold;
  font-size: 1.2em;
}
.MenuImg{
  width: 170px;
  height: 170px;
  object-fit: contain;
}
#category{
  width: 30%;
  float: left;
}
#menuCount{
  width: 10%;
}
#customMenuInput{
  width: 30%;
  float: left;
}
</style>