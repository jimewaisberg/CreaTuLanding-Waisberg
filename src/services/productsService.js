import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const productsRef = collection(db, "products");

export const getProducts = async () => {
  const snap = await getDocs(productsRef);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getProductsByCategory = async category => {
  const q = query(productsRef, where("category", "==", category));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getProduct = async id => {
  const docRef = doc(productsRef, id);
  const snap = await getDoc(docRef);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};
