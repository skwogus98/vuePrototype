<template>
  <b-modal id="chatModal" title="채팅" scrollable>
    <div class="ChatLog">
      <div class="">
        <div class="OpponentchatBox">
          <div class="OpponentInfo">
            이종렬
          </div>
          <div class="OpponentChat">
            <p>하이</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        
        <div class="OpponentchatBox">
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


        <div class="MychatBox">
          <div class="MyChat">
            <p>하이</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        
        <div class="MychatBox">
          <div class="MyChat">
            <p>동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        <div class="MychatBox">
          <div class="MyChat">
            <p>하이</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        
        <div class="MychatBox">
          <div class="MyChat">
            <p>동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div><div class="MychatBox">
          <div class="MyChat">
            <p>하이</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
        
        <div class="MychatBox">
          <div class="MyChat">
            <p>동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
          </div>
          <div class="ChatTime">
            5/27 13:00
          </div>
        </div>
      </div>
    </div>
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
  methods: {
    sendMsg(){
      const msg = document.getElementById("MsgInput").value
      if(msg != '\n' || msg != ''){
        console.log(msg)
        console.log("send");
      }
      document.getElementById("MsgInput").value = ''
    },
    pressEnter(e){
      if(e.keyCode == 13 && !e.shiftKey){
        this.sendMsg()        
      }
    }
  },
  mounted(){
    const footerHtml = '<div class="MsgSender"><textarea id="MsgInput" rows="3"></textarea><button type="button" id="MsgSendButton" class="btn btn-success">전송</button></div>'
    document.getElementById("chatModal").getElementsByClassName("modal-footer")[0].innerHTML = footerHtml
    document.getElementById("MsgSendButton").onclick = this.sendMsg
    document.getElementById("MsgInput").onkeypress = this.pressEnter
  }
};
</script>

<style>
.ChatLog{
  max-height: 100%;
}
.OpponentchatBox{
  text-align: left;
}
.MychatBox{
  text-align: right;
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
  font-size: 0.7em;
}
.MsgSender{
  width: 100%;
  height: 5em;
}
.MsgSender textarea{
  width: calc(100% - 5em);
  resize: none;
  overflow: auto;
  height: 100%;
}
.MsgSender button{
  width: 4.5em;
  height: 100%;
  float: right;
}
</style>