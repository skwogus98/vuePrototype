import axios from "axios";

export default {
  mathods: {
    //$를 쓰는 이유 : 컴포넌트의 메소드명과 구분용 -> 오버라이딩 방지
    async $callAPI(url, method, data) {
      return (
        await axios({
          method: method,
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
