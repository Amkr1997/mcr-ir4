import { useState } from "react";
import DisplayForm from "./DisplayForm";

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    prodName: "",
    quantity: 0,
    category: "",
    dateOfStorage: "",
    storageUnitNumber: "",
    unitCost: "",
    vendorName: "",
  });

  const [checkbox, setCheckbox] = useState([]);
  const [condition, setCondition] = useState("");
  const [showCondition, setShowCondition] = useState(false);

  const handleFormInps = (e) => {
    const { name, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    checked
      ? setCheckbox((prev) => [...prev, value])
      : setCheckbox((prev) => [...prev].filter((check) => check !== value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!condition) {
      setShowCondition(true);
      return;
    } else {
      setShowCondition(false);
    }

    console.log(formData);
    console.log(condition);
    console.log(checkbox);

    setFormData({
      prodName: "",
      quantity: 0,
      category: "",
      dateOfStorage: "",
      storageUnitNumber: "",
      unitCost: "",
      vendorName: "",
    });
  };

  return (
    <>
      <section className="container py-4 text-light">
        <h1 className="py-2">Inventory Form</h1>

        <form className="py-2" onSubmit={handleSubmit}>
          <label className="form-label">Product Name:</label>
          <br />
          <input
            type="text"
            name="prodName"
            value={formData.prodName}
            onChange={handleFormInps}
            className="form-control"
            required
          />
          <br />
          <label className="form-label">Quantity:</label>
          <br />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleFormInps}
            className="form-control"
            required
          />
          <br />
          <label className="form-label">Category:</label>
          <br />
          <select
            className="form-control"
            onChange={handleFormInps}
            name="category"
            required
          >
            <option>Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Equipment">Equipment</option>
          </select>
          <br />
          <label className="form-label">Condition:</label>
          <br />
          <div className="d-flex gap-2">
            <div className="d-flex gap-1">
              <input
                type="radio"
                value={"New"}
                name="condition"
                onChange={(e) => setCondition(e.target.value)}
                className="form-check-input"
              />
              <label className="form-check-label">New</label>
            </div>
            <div className="d-flex gap-1">
              <input
                type="radio"
                value={"Used"}
                name="condition"
                onChange={(e) => setCondition(e.target.value)}
                className="form-check-input"
              />
              <label className="form-check-label">Used</label>
            </div>
          </div>
          {showCondition && <p>Please Select any Condition</p>}
          <br />

          <div className="d-flex gap-2">
            <input
              type="checkbox"
              value={"waterProof"}
              onChange={handleFormInps}
              className="form-check-input"
            />
            <label className="form-check-label">Waterproof</label>
          </div>
          <br />

          <label className="form-label">Features:</label>
          <div className="d-flex gap-2">
            <div className="d-flex gap-1">
              <input
                type="checkbox"
                value={"Lightweight"}
                onChange={handleFormInps}
                className="form-check-input"
              />
              <label className="form-check-label">Lightweight</label>
            </div>
            <div className="d-flex gap-1">
              <input
                type="checkbox"
                value={"Durable"}
                onChange={handleFormInps}
                className="form-check-input"
              />
              <label className="form-check-label">Durable</label>
            </div>
          </div>
          <br />

          <label className="form-label">Date of Storage:</label>
          <br />
          <input
            type="date"
            name="dateOfStorage"
            value={formData.dateOfStorage}
            onChange={handleFormInps}
            className="form-control"
            required
          />
          <br />
          <label className="form-label">Storage Unit Number:</label>
          <br />
          <input
            type="number"
            name="storageUnitNumber"
            value={formData.storageUnitNumber}
            onChange={handleFormInps}
            className="form-control"
            required
          />
          <br />
          <label className="form-label">Unit Cost:</label>
          <br />
          <input
            type="number"
            name="unitCost"
            value={formData.unitCost}
            onChange={handleFormInps}
            className="form-control"
            required
          />
          <br />
          <label className="form-label">Vendor Name:</label>
          <br />
          <input
            type="text"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleFormInps}
            className="form-control"
            required
          />
          <br />

          <button className="btn btn-primary btn-sm">Submit</button>
        </form>
      </section>

      <DisplayForm
        formData={formData}
        condition={condition}
        checkbox={checkbox}
      />
    </>
  );
};

export default InventoryForm;
