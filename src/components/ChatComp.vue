<template>
  <b-modal id="chatModal" title="채팅" scrollable>
    <div class="ChatLog">
      <div class="">
        <div class="chatBox">
          <div class="OpponentChat">
            <p>하이</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        
        <div class="chatBox">
          <div class="OpponentInfo">
            이종렬
          </div>
          <div class="OpponentChat">
            <p>동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>


        <div class="chatBox">
          <div class="MyChat">
            <p>하이</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        
        <div class="chatBox">
          <div class="MyChat">
            <p>동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        <div class="chatBox">
          <div class="MyChat">
            <p>하이</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        
        <div class="chatBox">
          <div class="MyChat">
            <p>동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div><div class="chatBox">
          <div class="MyChat">
            <p>하이</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        
        <div class="chatBox">
          <div class="MyChat">
            <p>동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
      </div>
    </div>
    <template #modal-footer>
      <div class="btn-wrap">
        <button type="button" class="btn" @click="confirm"></button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "chatComp",
  components: {},
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style>
.ChatLog{
  max-height: 100%;
}
.MyChat{
  border-radius: 0.7em;
  border-bottom-right-radius: 0px;
  padding: 0.6em;
  text-align: right;
  width: fit-content;
  min-width: 30px;
  max-width: 90%;
  text-overflow:clip;
  background: #afffba;
  float: right;
  clear:both;
}

.OpponentChat{
  border-radius: 0.7em;
  border-bottom-left-radius: 0px;
  padding: 0.6em;
  text-align: left;
  width: fit-content;
  min-width: 30px;
  max-width: 90%;
  text-overflow:clip;
  background: #e3e3e3;
  float: left;
  clear:both;
}

.OpponentInfo{
  float: left;
  clear:both;
}
.ChatTime{
  clear:both;
  margin-bottom: 1em;
}
.ChatForm{
  position: absolute;
  bottom: 0%;
}
</style>