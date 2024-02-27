import { Provider } from "react-redux";
import SaveTheDate from "./SaveTheDate";
import Wedding from "./Wedding";
import weddingStore from "./stores/weddingStore";

const LandingPage = () => {

  const countDownDate = new Date("Nov 9, 2024 00:00:00").getTime();
  const now           = new Date().getTime();
  const distance      = countDownDate - now; 

  return (
    <Provider store={weddingStore}>
     { distance <= 0 ? <Wedding /> : <SaveTheDate />}
  </Provider>
  )
}

export default LandingPage