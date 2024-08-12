import DataTable from "../../components/tables/dataTable";
import { columns } from "../../users/columns";
import { getUsers } from "../../users/actions";
import { User } from "../../models/user.model";
import usePaginator from "../../lib/hooks/usePaginator";

const UsersTab = ({ user }: { user: User }) => {
  const {
    currentPage,
    elements,
    isLoading,
    items,
    itemsPerPage,
    onPageChange,
    onSortChange,
  } = usePaginator(getUsers, "users", { hosts: user.id });

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
