import { Provider } from "react-redux";
import SaveTheDate from "./SaveTheDate";
import weddingStore from "./stores/weddingStore";
import Page from "./LandingPage/page";

const LandingPage = () => {

  const countDownDate = new Date("Nov 9, 2023 00:00:00").getTime();
  const now           = new Date().getTime();
  const distance      = countDownDate - now; 

  return (
    <Provider store={weddingStore}>
     { distance <= 0 ? <Page /> : <SaveTheDate />}
  </Provider>
  )
}

export default LandingPage