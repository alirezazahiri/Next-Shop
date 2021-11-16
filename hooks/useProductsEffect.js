import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productsAction";

const useProductsEffect = () => {
    const { products } = useSelector((state) => state.productsState);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!products.length) dispatch(fetchProducts());
    }, []);
};

export default useProductsEffect;
