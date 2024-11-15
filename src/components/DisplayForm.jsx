const DisplayForm = ({ formData, condition, checkbox }) => {
  return (
    <section className="container text-light">
      <h2>Submitted Details:</h2>
      <p>Product Name: {formData.prodName}</p>
      <p>Quantity: {formData.quantity}</p>
      <p>Category: {formData.category}</p>
      <p>Condition: {condition}</p>
      <p>WaterProof: {checkbox.includes("waterProof") ? "Yes" : "No"}</p>
      <p>
        Features:{" "}
        {checkbox.includes("Lightweight") || checkbox.includes("Durable")
          ? checkbox.join(", ")
          : "none"}
      </p>
    </section>
  );
};

export default DisplayForm;
