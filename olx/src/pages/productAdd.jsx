import React from "react";
import { auth, storage } from "../firebase";
import Footer3 from "../components/footer3";
import NavForPostAdd from "../components/navForPostAdd";
import Selection from "../components/Selection";



import { Bold } from "lucide-react";
const ProductAdd = () => {
  return (
    <div className="postadd">
      <NavForPostAdd />
      <h5 style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}>
        POST YOUR AD
      </h5>

      <Selection />
      <Footer3 />
    </div>
  );
};
export default ProductAdd;
