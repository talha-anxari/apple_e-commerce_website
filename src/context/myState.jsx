import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import toast from "react-hot-toast";

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

  // order state
  const [getAllOrder, setGetAllOrder] = useState([]);

  const getAllOrderFunction = async () => {
    setLoading(true)

    try {
      const q = query(collection(fireDB, 'orders'),
    orderBy('time', 'desc'));

    const data = onSnapshot(q, (QuerySnapshot) => {
      let orderArray = [];
      QuerySnapshot.forEach((doc) => {
        orderArray.push({ ...doc.data(), id: doc.id });
      });
      setGetAllOrder(orderArray);
      setLoading(false);
    })
    return () => date;
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  // delete order function 
  const deleteOrderFunction = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, 'orders', id))
      toast.success('Order Delete Successfully')
      getAllOrderFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


      // user State 
      const [getAllUser, setGetAllUser] = useState([]);
    /**========================================================================
     *========================================================================**/

    const getAllUserFunction = async () => {
      setLoading(true);
      try {
          const q = query(
              collection(fireDB, "user"),
              orderBy('time')
          );
          const data = onSnapshot(q, (QuerySnapshot) => {
              let userArray = [];
              QuerySnapshot.forEach((doc) => {
                  userArray.push({ ...doc.data(), id: doc.id });
              });
              setGetAllUser(userArray);
              setLoading(false);
          });
          return () => data;
      } catch (error) {
          console.log(error);
          setLoading(false);
      }
  }
  useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
    getAllUserFunction();
  }, []);

  return (
    <MyContext.Provider value={{
      loading,
     setLoading,
     getAllProduct,
     getAllProductFunction,
     getAllOrder,
     deleteOrderFunction,
     getAllUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
