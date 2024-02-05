import { useState, useEffect } from "react";
import { SortTypes } from "../types";
import { capitalize } from "@mui/material";

function usePaginator(getData, modelName, params = null) {
  const [currentPage, setCurrentPage] = useState(1);
  const [elements, setElements] = useState(0);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [customParams, setCustomParams] = useState(params);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getData(currentPage, itemsPerPage, sortKey, customParams);
        setItems(response.data[modelName].data);
        setElements(response.data[modelName].total);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage, sortKey, getData, customParams]);

  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setItemsPerPage(pageSize);
  };

  const onSortChange = (column: string | null, sort: SortTypes) => {
    setSortKey(column ? snakeToCamel(column) + capitalize(sort) : null);
    setCurrentPage(1);
  };

  const removeRows = (rows: number[]) => {
    setItems(items.filter((item) => !rows.includes(item.id)))
  }

  return {
    currentPage,
    elements,
    isLoading,
    items,
    selectedRows,
    itemsPerPage,
    customParams,
    onPageChange,
    onSortChange,
    setSelectedRows,
    removeRows,
    setCustomParams
  };
}

const snakeToCamel = (str) => {
  return str.replace(/_([a-z])/g, function(match, group) {
    return group.toUpperCase();
  });
}

export default usePaginator;