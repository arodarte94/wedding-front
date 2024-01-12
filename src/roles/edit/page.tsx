
import { useEffect, useState } from "react";
import { getRole } from "../actions";
import { Role } from "../../models/role.model";
import RoleEditView from "../edit";
import { useParams } from "react-router-dom";

const RolePage = () => {

  const [role, setRole] = useState<Role | null>(null);
  const { id } = useParams();
  
  useEffect(() => {
    if (id) getRole(id, setRole);

    return () => {};
  }, []);

  return (
    <RoleEditView role={role} set={setRole} />
  );
};
export default RolePage;
