
import { useEffect, useState } from "react";
import UserEditView from "./edit";
import { User } from "../../models/user.model";
import { getUser } from "../actions";
import { useParams } from 'react-router';

const UserPage = () => {

  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) getUser(id, setUser);

    return () => {};
  }, []);

  return (
    <UserEditView user={user} set={setUser} />
  );
};
export default UserPage;
