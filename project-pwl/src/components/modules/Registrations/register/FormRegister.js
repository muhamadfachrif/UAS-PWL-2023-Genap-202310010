import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormRegister = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kirim nilai form ke server
    try {
      const response = await fetch("http://localhost:3001/racikpc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Jika permintaan berhasil, lakukan sesuatu
        console.log("Data berhasil dikirim ke server");
      } else {
        // Jika permintaan gagal, tangani kesalahan
        throw new Error("Gagal mengirim data ke server");
      }
    } catch (error) {
      // Tangani kesalahan yang terjadi
      console.log(error);
      setErrorMessage("Terjadi kesalahan saat mengirim data");
      setShowAlert(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <Form.Group className="mb-3" controlId="exampleForm.Username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          className="form-input-green bg-none"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          className="form-input-green bg-none"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="success"
        className="w-100 mt-3 bg-button-green border-0 py-2"
        type="submit"
        disabled={formData.username === "" || formData.password === ""}
      >
        Daftar
      </Button>
    </Form>
  );
};

export default FormRegister;
