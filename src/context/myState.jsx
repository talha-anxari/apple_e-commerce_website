import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // get all products from firebase
  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductFunction();
  }, []);

  return (
    <MyContext.Provider value={{
      loading,
     setLoading,
     getAllProduct,
     getAllProductFunction }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
