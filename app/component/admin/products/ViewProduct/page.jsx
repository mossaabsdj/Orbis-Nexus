"use client";
import React, { useState, useEffect } from "react";
import object from "@/app/Texts/content.json";
import { fetchData } from "@/lib/FetchData/page";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingPage from "@/app/component/loading/page";

const Labels = object.Labels;
const defaultdata = object.Product.ViewModel;

const DontDisplayasfield = defaultdata.DontDisplayField;
const title = defaultdata.title;
const modifyText = Labels.Edit;
const applyText = Labels.Save;
const closeAria = Labels.Close;

// Add your FirstFields variable
const FirstFields = [
  { accessor: "name", label: "Nom", type: "text", required: true },
  { accessor: "category", label: "Marque", type: "text", required: false }, // updated label
  { accessor: "year", label: "Année", type: "number", required: false },
  { accessor: "price", label: "Prix", type: "number", required: true },
  { accessor: "power", label: "Puissance", type: "text", required: false },
  { accessor: "fuel", label: "Carburant", type: "text", required: false },
  {
    accessor: "fuelCapacity",
    label: "Capacité du réservoir",
    type: "number",
    required: false,
  },
  { accessor: "speed", label: "Vitesse", type: "text", required: false },
  {
    accessor: "transmission",
    label: "Transmission",
    type: "text",
    required: false,
  },
  { accessor: "seats", label: "Places", type: "number", required: false },
  {
    accessor: "mileage",
    label: "Kilométrage",
    type: "number",
    required: false,
  },
  {
    accessor: "description",
    label: "Description",
    type: "textarea",
    required: false,
  },
  { accessor: "image", label: "Image", type: "image", required: true },
];

const ConsulteClientModal = ({ open, onClose, product, reload }) => {
  const [editValues, setEditValues] = useState(product || {});
  const [editing, setEditing] = useState(false);
  const [rawImageFile, setRawImageFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setloading] = useState(false);

  useEffect(() => {
    setEditValues(product || {});
    setEditing(false);
  }, [product, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      if (/^\d*\.?\d*$/.test(value)) {
        setEditValues((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setEditValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadImageToCloudinary = async (file) => {
    return new Promise((resolve, reject) => {
      const url = "https://api.cloudinary.com/v1_1/dgozr0fbn/image/upload";
      const preset = "SiteYakoub";

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", preset);

      const xhr = new XMLHttpRequest();
      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded * 100) / e.total);
          setUploadProgress(progress);
        }
      });

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          setIsUploading(false);
          setUploadProgress(0);
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            resolve(response.secure_url);
          } else {
            reject(new Error("Image upload failed"));
          }
        }
      };

      setIsUploading(true);
      xhr.open("POST", url);
      xhr.send(formData);
    });
  };

  const handleModify = () => setEditing(true);

  const handleSave = async () => {
    setErrorMessage("");
    setIsUploading(true);

    try {
      if (rawImageFile) {
        const imageUrl = await uploadImageToCloudinary(rawImageFile);
        editValues.image = imageUrl;
        setRawImageFile(null);
      }

      setloading(true);
      const response = await fetchData({
        method: "PUT",
        url: `/api/Product`,
        body: { ...editValues },
      });

      setloading(false);
      if (response.error) {
        setErrorMessage("❌ " + response.error);
      } else {
        reload();
        setErrorMessage("✅ Produit mis à jour avec succès.");
        setTimeout(() => setErrorMessage(""), 1500);
        onClose();
        setEditing(false);
      }
    } catch (err) {
      setErrorMessage(
        "❌ Erreur inattendue lors de la mise à jour: " + err.message
      );
    } finally {
      setIsUploading(false);
    }
  };

  if (!open || !product) return null;

  return (
    <>
      {isloading && <LoadingPage isVisible={true} />}
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm overflow-x-hidden overflow-y-auto">
        <div className="bg-white rounded shadow-lg border w-full max-w-4xl mx-4 sm:mx-6 md:mx-8 my-8 p-4 relative max-h-[90vh] overflow-y-auto">
          {errorMessage && (
            <Alert
              variant={
                errorMessage.startsWith("✅") ? "success" : "destructive"
              }
              className="mb-4"
            >
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>
                {errorMessage.startsWith("✅") ? "Succès" : "Erreur"}
              </AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          {isUploading && uploadProgress > 0 && (
            <div className="mb-4">
              <Progress value={uploadProgress} />
              <p className="text-sm text-gray-500 mt-1">{uploadProgress}%</p>
            </div>
          )}

          <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
            <div className="flex gap-2 flex-wrap">
              {!editing ? (
                <button
                  onClick={handleModify}
                  className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded shadow"
                >
                  ✎ {modifyText}
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-4 py-2 rounded shadow border border-black"
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "✔ " + applyText}
                </button>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-black hover:text-white text-2xl bg-white hover:bg-black rounded-full w-8 h-8 flex items-center justify-center border border-black"
              aria-label={closeAria}
            >
              &times;
            </button>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center text-black">
            {title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FirstFields.map((field) => {
              const key = field.accessor;
              const value = editValues[key] || "";
              const isImageField =
                field.type === "image" &&
                typeof value === "string" &&
                (/\.(jpe?g|png|gif|webp|svg|ico|bmp|heic|heif|tiff?|avif)$/i.test(
                  value
                ) ||
                  value.startsWith("data:image"));

              const isDateField = key.toLowerCase().includes("date");

              return (
                <div key={key} className="mb-4">
                  <div className="block text-gray-700 font-medium mb-1">
                    {field.label}
                  </div>

                  {editing ? (
                    isImageField ? (
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          name={key}
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setRawImageFile(file);
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setEditValues((prev) => ({
                                  ...prev,
                                  [key]: reader.result,
                                }));
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {value && (
                          <img
                            src={value}
                            alt={key}
                            className="h-16 w-auto rounded border border-gray-300 shadow"
                          />
                        )}
                      </div>
                    ) : field.type === "textarea" ? (
                      <textarea
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    ) : (
                      <Input
                        type={field.type}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    )
                  ) : isImageField ? (
                    value ? (
                      <img
                        src={value}
                        alt={key}
                        className="max-h-40 rounded border border-gray-300 shadow"
                      />
                    ) : (
                      <div className="text-gray-500">No image</div>
                    )
                  ) : isDateField ? (
                    <input
                      name={key + 9876}
                      value={value ? new Date(value).toLocaleDateString() : ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                      readOnly
                    />
                  ) : (
                    <input
                      name={key + 9876}
                      value={value}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                      readOnly
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsulteClientModal;
