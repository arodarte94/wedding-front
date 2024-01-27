import DataTable from '../../components/tables/dataTable';
import { columns } from '../../users/columns';
import { RootState } from '../../store';
import { SortTypes } from '../../lib/types';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { paginator } from "../../lib/paginator";
import { getUsers } from "../../users/actions";
import { setData, setPage, sortTable } from "../../users/slice";
import { User } from '../../models/user.model';

const UsersTab = ({ user }: { user: User }) => {

  const dispatcher = useDispatch();
  const { items, 
    currentPage, 
    elements, 
    itemsPerPage, 
    sortKey, 
    isLoading 
  } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    paginator(getUsers, setData, dispatcher, 'users', currentPage, itemsPerPage, sortKey, {host: user.id});
  }, [currentPage, itemsPerPage, sortKey]);

  const onPageChange = (page: number, itemsPerPage: number) => {
    dispatcher(setPage({page, itemsPerPage}))
  }

  const onSortChange = (column: string | null, sort: SortTypes) => {
      dispatcher(sortTable({column, sort}))
  }
  
  return (
    <DataTable
      columns={columns}
      rows={items}
      currentPage={currentPage}
      elementsCount={elements}
      onPageChange={onPageChange}
      onSortChange={onSortChange}
      isLoading={isLoading}
    />
  );
};
export default UsersTab;
