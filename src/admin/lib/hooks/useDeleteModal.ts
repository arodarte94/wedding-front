import { useState } from "react";

function useDeleteModal() {
  const [openDeleteModal, toggleModal] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleDelete = async (action, removeCallback?) => {
    setIsDeleteLoading(true);
    const response = await action();
    setIsDeleteLoading(false);

    if (response?.status === 200) {
      toggleModal(false);
      removeCallback?.();
    } else {
      toggleModal(false);
    }
  };

  return {
    openDeleteModal,
    isDeleteLoading,
    toggleModal,
    handleDelete,
  };
}

export default useDeleteModal;
