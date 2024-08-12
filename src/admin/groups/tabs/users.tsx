import DataTable from "../../components/tables/dataTable";
import { columns } from "../../users/columns";
import { getUsers } from "../../users/actions";
import { Group } from "../../models/group.model";
import usePaginator from "../../lib/hooks/usePaginator";

const UsersTab = ({ group }: { group: Group }) => {
  const {
    currentPage,
    elements,
    isLoading,
    items,
    itemsPerPage,
    onPageChange,
    onSortChange,
  } = usePaginator(getUsers, "users", { groups: group.id });

  return (
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
  );
};
export default UsersTab;
