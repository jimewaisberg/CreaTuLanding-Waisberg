import { db } from "../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ordersRef = collection(db, "orders");

export const createOrder = async data => {
  const order = {
    ...data,
    date: Timestamp.now(),
  };
  const docRef = await addDoc(ordersRef, order);
  return docRef.id;
};
