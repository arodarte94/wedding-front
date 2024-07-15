import { useState } from "react";
import { showErrorMessage } from "../appSlice";

export const productHelperInitialState = {
  id: null,
  product_id: null,
  unit_id: null,
  product: null,
  unit: null,
  description: null,
  quantity: 0,
  price: null,
  new: true,
};

function useProductsHelper(separatedItems = false) {
  const [product, setProduct] = useState(productHelperInitialState);

  const [selected, setSelected] = useState([]);
  const [errors, setErrors] = useState([]);

  const addProduct = (documentData, setDocumentData, dispatcher) => {
    if (
      !product.product_id ||
      !product.unit_id ||
      !product.quantity ||
      product.quantity <= 0
    ) {
      dispatcher(
        showErrorMessage(
          "Por favor llena todos los campos para agregar un producto",
        ),
      );
      return;
    }

    // Stupid fix needed to reset current quantity
    setProduct({ ...product, quantity: product.quantity });

    if (separatedItems) {
      // If product doesn't exist, add it to the products array and specify a temporal unique id in case its used in a datagrid
      setDocumentData({
        ...documentData,
        products: [
          ...documentData.products,
          {
            ...product,
            id: product.product_id + "_" + documentData.products.length + 1,
            price: product.price ?? product?.product?.price,
            new: true,
          },
        ],
      });

      return;
    } else {
      const index = documentData.products.findIndex(
        (i) =>
          i.product_id == product.product_id && i.unit_id == product.unit_id,
      );

      if (index !== -1) {
        const items = [...documentData.products];
        items[index].quantity =
          items[index].quantity + parseInt(product.quantity);
        setDocumentData({ ...documentData, products: items });
      } else {
        // If product doesn't exist, add it to the products array
        setDocumentData({
          ...documentData,
          products: [...documentData.products, product],
        });
      }
    }
  };

  const removeProduct = (index, documentData, setDocumentData) => {
    const products = [...documentData.products];
    products.splice(index, 1);
    setDocumentData({ ...documentData, products: products });
  };

  const selectProduct = (id, isSelected) => {
    if (isSelected) {
      setSelected([...selected, id]);
    } else {
      const newSelected = [...selected];
      setSelected(newSelected.filter((i) => i !== id));
    }
  };

  return {
    product,
    setProduct,
    selected,
    setSelected,
    errors,
    setErrors,
    addProduct,
    removeProduct,
    selectProduct,
  };
}

export default useProductsHelper;
