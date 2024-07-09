import { useState, useEffect, useRef } from 'react';
import { SortTypes } from '../types';
import { capitalize } from '@mui/material';

function usePaginator(
  getData,
  modelName,
  params = null,
  initialItemsPerPage = 10,
) {
  const [currentPage, setCurrentPage] = useState(1);
  const [elements, setElements] = useState(0);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [customParams, setCustomParams] = useState(params ?? {});
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(initialItemsPerPage);
  const [nextPage, setNextPage] = useState<number | null>(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // This is used in case we need a synchronous way to check if we're loading
  const isFetching = useRef(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isInitialLoad) {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        fetchData();
        setIsInitialLoad(false);
      }, 400);
    } else {
      fetchData();
    }

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [currentPage, itemsPerPage, sortKey, customParams, getData]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      isFetching.current = true;
      const response = await getData(
        currentPage,
        itemsPerPage,
        sortKey,
        customParams,
      );
      setItems(response.data[modelName].data);
      setElements(response.data[modelName].total);
      setNextPage(response.data.next_page);
      setIsLoading(false);
      isFetching.current = false;
    } catch (error) {
      console.error('Error fetching:', error);
      setIsLoading(false);
      isFetching.current = false;
    }
  };

  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setItemsPerPage(pageSize);
  };

  const onSortChange = (column: string | null, sort: SortTypes) => {
    if (isLoading) return;

    setSortKey(column ? snakeToCamel(column) + capitalize(sort) : null);
    setCurrentPage(1);
  };

  const removeRows = () => {
    setItems(items.filter((item) => !selectedRows.includes(item.id)));
    setSelectedRows([]);
  };

  const setParams = (newParam) => {
    setCurrentPage(1);
    setCustomParams({ ...customParams, ...newParam });
  };

  return {
    currentPage,
    customParams,
    elements,
    isLoading,
    items,
    selectedRows,
    itemsPerPage,
    nextPage,
    isFetching,
    onPageChange,
    onSortChange,
    setCustomParams,
    setSelectedRows,
    setParams,
    removeRows,
    fetchData,
  };
}

const snakeToCamel = (str) => {
  return str.replace(/_([a-z])/g, function (match, group) {
    return group.toUpperCase();
  });
};

export default usePaginator;
