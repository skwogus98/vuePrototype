<template>
  <b-modal id="MenuModal" size="lg" hide-footer title="메뉴" 
  header-text-variant="light"
  header-bg-variant="secondary">
    <div class="MenuContainer">
      <table class="MenuTable">
        <tr>
          <td>
            <img src="../assets/menu/커피1.png" class="MenuImg">
            에스프레소
            <p>2000원</p>
          </td>
          <td>
            <img src="../assets/menu/커피1.png" class="MenuImg">
            아메리카노
            <p>2500원</p>
          </td>
          <td>
            <img src="../assets/menu/커피2.png" class="MenuImg">
            카페라떼
            <p>3000원</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="../assets/menu/커피3.png" class="MenuImg">
            카페모카
            <p>3000원</p>
          </td>
          <td>
            <img src="../assets/menu/커피2.png" class="MenuImg">
            바닐라 라떼
            <p>3000원</p>
          </td>
          <td>
            <img src="../assets/menu/크로플.jpg" class="MenuImg">
            크로플
            <p>3000원</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="MenuSeleced">
      <div class="SelectedMenu">
        <b-list-group>
          <b-list-group-item variant="dark">주문 메뉴</b-list-group-item>
          <b-list-group-item variant="light">아메리카노 * 1</b-list-group-item>
          <b-list-group-item variant="light">크로플 * 1</b-list-group-item>
        </b-list-group>
      </div>
      <textarea id="ReqestInput" cols="27" rows="4" placeholder="요청사항을 적어주세요."></textarea>
      <b-button variant="success">메뉴 담기</b-button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "RoomListMenuComp",
  props: {
    popupVal: {} 
  }
}
</script>

<style>
.MenuContainer{
  width: 70%;
  margin-right: 1%;
  height: 450px;
  float: left;
  overflow: auto;
}
.MenuSeleced{
  width: 29%;
  height: 450px;
  float: right;
}
.SelectedMenu{
  background: #f0f0f0;
  height: 60%;
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
</style>