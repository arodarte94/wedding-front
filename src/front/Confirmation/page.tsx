import { useState } from "react";
import { useParams } from "react-router-dom";
import GuestCode from "./components/Code";

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
        guest?.name
      )}
    </>
  );
};

export default WeddingConfirmation;
