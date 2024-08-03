import { useState } from "react";
import { useParams } from "react-router-dom";
import GuestCode from "./components/Code";
import Guests from "./components/Guests";

const WeddingConfirmation = () => {
  const { id } = useParams();
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {!guest ? (
        <GuestCode
          id={id}
          loading={loading}
          setLoading={setLoading}
          guest={guest}
          setGuest={setGuest}
        />
      ) : (
        <Guests guest={guest} setGuest={setGuest} />
      )}
    </>
  );
};

export default WeddingConfirmation;
