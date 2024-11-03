"use client";

import { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios"; // Import AxiosError for type checking

// Define a type for the API response
type PredictionResult = {
  predicted_disease: string;
  description: string;
  precautions: string[];
  medications: string[];
  diet: string[];
  workout: string[];
};
interface ErrorResponse {
  message: string;
}


export default function Home() {
  const [symptoms, setSymptoms] = useState<string>("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms(e.target.value);
  };

  const handlePredict = async () => {
    try {
      setError(null); // Clear previous error
      setResult(null); // Clear previous result
  
      if (!symptoms.trim()) {
        setError("Please enter symptoms to get a prediction.");
        return;
      }
  
      const response = await axios.post("https://dryou.onrender.com/predict", {
        symptoms,
      });
      setResult(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<ErrorResponse>; // Use the ErrorResponse interface here
  
        if (axiosError.response && axiosError.response.data) {
          setError(
            axiosError.response.data.message ||
            "An error occurred while fetching the prediction."
          );
        } else {
          setError("An error occurred while fetching the prediction.");
        }
      } else {
        // Fallback error message for non-Axios errors
        setError("An unknown error occurred.");
      }
    }
  };
  
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#007bff",
          padding: "1rem",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontWeight: "600",
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Health Care Center
        </span>
      </nav>

      {/* Main Content */}
      <main className="container mt-5" style={{ maxWidth: "700px" }}>
        <div className="text-center mb-5">
          <h1 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "600" }}>
            Welcome to Doctor You
          </h1>
          <p>Select symptoms and get an AI-driven prediction</p>
        </div>

        <div
          className="card p-4 mb-4 shadow-sm"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePredict();
            }}
          >
            <div className="mb-3">
              <label
                htmlFor="symptoms"
                className="form-label"
                style={{ fontWeight: "500", color: "#555" }}
              >
                Enter Symptoms:
              </label>
              <input
                type="text"
                className="form-control"
                id="symptoms"
                placeholder="Type symptoms such as itching, skin rash"
                value={symptoms}
                onChange={handleInputChange}
                style={{
                  borderRadius: "8px",
                  border: "1px solid #007bff",
                  padding: "12px",
                  fontSize: "1rem",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                fontWeight: "500",
                fontSize: "1.2rem",
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                width: "100%",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
            >
              Predict
            </button>
          </form>
        </div>

        {error && (
          <div
            className="alert alert-danger text-center mt-3"
            style={{ borderRadius: "8px", fontWeight: "500" }}
          >
            {error}
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="text-center mt-4">
            <h2 style={{ fontWeight: "600", marginBottom: "1rem" }}>
              Our AI System Results
            </h2>
            <div
              className="d-flex justify-content-center flex-wrap"
              style={{ gap: "8px" }}
            >
              {[
                "Disease",
                "Description",
                "Precaution",
                "Medications",
                "Workout",
                "Diet",
              ].map((label) => (
                <button
                  key={label}
                  className="btn btn-outline-primary"
                  style={{
                    border: "1px solid #007bff",
                    color: "black",
                    borderRadius: "8px",
                    padding: "0.5rem 1rem",
                    fontWeight: "500",
                  }}
                  onClick={() => setShowModal(label)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007bff")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Modal for Displaying Results */}
        {showModal && (
          <div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={() => setShowModal(null)}
          >
            <div
              className="modal-dialog"
              style={{ marginTop: "15vh", maxWidth: "500px" }}
            >
              <div
                className="modal-content"
                style={{
                  borderRadius: "10px",
                  padding: "1.5rem",
                }}
              >
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    style={{ color: "#007bff", fontWeight: "600" }}
                  >
                    {showModal}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(null)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {showModal === "Disease" && (
                    <p>{result?.predicted_disease}</p>
                  )}
                  {showModal === "Description" && <p>{result?.description}</p>}
                  {showModal === "Precaution" && (
                    <ul>
                      {result?.precautions.map((precaution, index) => (
                        <li key={index}>{precaution}</li>
                      ))}
                    </ul>
                  )}
                  {showModal === "Medications" && (
                    <ul>
                      {result?.medications.map((medication, index) => (
                        <li key={index}>{medication}</li>
                      ))}
                    </ul>
                  )}
                  {showModal === "Workout" && (
                    <ul>
                      {result?.workout.map((workout, index) => (
                        <li key={index}>{workout}</li>
                      ))}
                    </ul>
                  )}
                  {showModal === "Diet" && (
                    <ul>
                      {result?.diet.map((diet, index) => (
                        <li key={index}>{diet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
