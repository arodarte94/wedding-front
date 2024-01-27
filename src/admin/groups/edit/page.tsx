
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGroup } from "../actions";
import { Group } from "../../models/group.model";
import GroupEditView from "../edit";

const GroupPage = () => {

  const [group, setGroup] = useState<Group | null>(null);
  const { id } = useParams();
  
  useEffect(() => {
    if (id) getGroup(id, setGroup);

    return () => {};
  }, []);

  return (
    <GroupEditView group={group} set={setGroup} />
  );
};
export default GroupPage;
