import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const ordersRef = collection(db, "orders");

/**
 @param {Object} buyer   
 @param {Array}  items   
 @param {Number} total   
 */
export const createOrder = async (buyer, items, total) => {
  const order = {
    buyer,
    items,
    total,
    date: serverTimestamp(),
  };

  const docRef = await addDoc(ordersRef, order);
  return docRef.id;
};
