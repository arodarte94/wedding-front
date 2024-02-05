import { useState } from "react";

function useDeleteModal() {
  const [openDeleteModal, toggleModal] = useState(false);

  const handleDelete = (response, removeRows?) => {   
    if (response.status === 200) {
        toggleModal(false);
        
        if(removeRows)
            removeRows();
    }
  }

  return {
    openDeleteModal,
    toggleModal,
    handleDelete
  };
}

export default useDeleteModal;