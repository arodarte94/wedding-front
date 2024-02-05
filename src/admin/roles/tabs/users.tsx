import { Role } from "../../models/role.model";
import DataTable from '../../components/tables/dataTable';
import { columns } from '../../users/columns';
import { getUsers } from "../../users/actions";
import TabOptions from "../../components/edit-view/TabOptions";
import usePaginator from "../../lib/hooks/usePaginator";

const UsersTab = ({ role }: { role: Role }) => {

  const {
    currentPage,
    elements,
    isLoading,
    items,
    itemsPerPage,
    onPageChange,
    onSortChange,
  } = usePaginator(getUsers, "users", {role: role.id});
  
  return (
    <>
    <TabOptions link="/roles" />
      <DataTable
        columns={columns}
        rows={items}
        currentPage={currentPage}
        elementsCount={elements}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        isLoading={isLoading}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};
export default UsersTab;
