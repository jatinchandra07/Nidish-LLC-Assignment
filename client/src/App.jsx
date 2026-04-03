import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Layout from "./components/Layout";
import { useForm } from "./hooks/useForm";
import { createContent } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { formData, handleChange } = useForm({
    heading: "",
    paragraph: "",
    image: "",
    color: "#ffffff",
  });

  const [preview, setPreview] = useState(formData);
  const [loading, setLoading] = useState(false);

  // Live preview
  const handleLiveChange = (field, value) => {
    handleChange(field, value);
    setPreview((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await createContent(formData);

      setPreview(res.data.data);
      toast.success("Content submitted successfully 🚀");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ToastContainer />

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Form
            formData={formData}
            handleChange={handleLiveChange}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Preview data={preview} />
        </div>

      </div>
    </Layout>
  );
}

export default App;