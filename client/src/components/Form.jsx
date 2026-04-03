import React from "react";

const Form = ({ formData, handleChange, onSubmit, loading }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">

      <input
        type="text"
        placeholder="Heading"
        className="input"
        value={formData.heading}
        onChange={(e) => handleChange("heading", e.target.value)}
      />

      <textarea
        placeholder="Paragraph"
        rows="4"
        className="input"
        value={formData.paragraph}
        onChange={(e) => handleChange("paragraph", e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        className="input"
        value={formData.image}
        onChange={(e) => handleChange("image", e.target.value)}
      />

      <div className="flex items-center gap-3">
        <label className="text-sm font-medium">Text Color:</label>
        <input
          type="color"
          value={formData.color}
          onChange={(e) => handleChange("color", e.target.value)}
        />
      </div>

      <button className="btn">
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;