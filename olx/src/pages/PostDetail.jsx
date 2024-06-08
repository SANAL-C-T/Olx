import React from "react";
import NavForPostAdd from "../components/navForPostAdd";
import Form from "../components/form";
import Footer3 from "../components/footer3";
const PostDetail = () => {
  return (
    <div className="postContainer">
      <NavForPostAdd />
      <h5 style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}>
        POST YOUR AD
      </h5>

      <Form />
      <Footer3 />
    </div>
  );
};
export default PostDetail;
