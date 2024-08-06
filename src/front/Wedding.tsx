import { Provider } from "react-redux";
import SaveTheDate from "./SaveTheDate";
import weddingStore from "./stores/weddingStore";
import Page from "./LandingPage/page";

const Wedding = () => {
  const countDownDate = new Date("Nov 9, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  return (
    <Provider store={weddingStore}>
      {distance <= 0 ? <Page /> : <SaveTheDate />}
    </Provider>
  );
};

export default Wedding;
