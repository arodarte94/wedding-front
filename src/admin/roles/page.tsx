'use client';
import { useEffect } from 'react';
import { paginator } from '../lib/paginator';
import { getRoles } from './actions';
import { setData, setPage, sortTable } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/layout/appLayout';
import DataTable from '../components/tables/dataTable';
import { columns } from './columns';
import { RootState } from '../store';
import { SortTypes } from '../lib/types';
import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom'

const Roles = () => {

  const dispatcher = useDispatch();
  const { items, 
    currentPage, 
    elements, 
    itemsPerPage, 
    sortKey, 
    isLoading 
  } = useSelector((state: RootState) => state.roles);

  useEffect(() => {
    paginator(getRoles, setData, dispatcher, 'roles', currentPage, itemsPerPage, sortKey);
  }, [currentPage, itemsPerPage, sortKey]);

  const onPageChange = (page: number, itemsPerPage: number) => {
    dispatcher(setPage({page, itemsPerPage}))
  }

  const onSortChange = (column: string | null, sort: SortTypes) => {
      dispatcher(sortTable({column, sort}))
  }
  
  return (
    <AppLayout>

      <Grid container item xs={12} 
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end" marginBottom={2}>
            <Link to='new'>
            <Button startIcon={<Add />} variant='contained'>Nuevo rol</Button>
            </Link>
          </Grid>

        <DataTable
          columns={columns}
          rows={items}
          currentPage={currentPage}
          elementsCount={elements}
          onPageChange={onPageChange}
          onSortChange={onSortChange}
          isLoading={isLoading}
        />
    </AppLayout>

  );
};

export default Roles;