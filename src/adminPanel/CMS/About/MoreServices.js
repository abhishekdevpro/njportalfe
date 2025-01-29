// import React, { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "axios";
// import logo5 from "../../../assests/logo5.jpg";

// function MoreServices({ moreServicesData, projectName }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false);
//   // State for content
//   const [heading, setHeading] = useState(
//     "More Services from Hyper V Solutions"
//   );
//   const [paragraphs, setParagraphs] = useState([
//     `Discover the wide range of innovative services offered by Hyper V Solutions. Whether you're navigating a job search or looking to elevate your career, our EdTech platform, UltraAura.education, is here to support you.`,
//     `We offer expertly curated content, live online classes led by industry professionals, and robust placement assistance through Novajobs.us. Take the next step towards your future with our cutting-edge educational solutions.`,
//     `For more information, visit our parent website: https://hypervsolutions.net/`,
//   ]);
//   const [subHeading, setSubHeading] = useState(
//     `Experience the difference of innovation and inclusivity at Novajobs.us. Explore our website today and unlock your path to success.`
//   );
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(logo5);

//   const authToken = localStorage.getItem("authToken"); // Retrieve auth token

//   // Fetch data from the GET API
//   useEffect(() => {
//     if (!moreServicesData) {
//       return;
//     }

//     setHeading(moreServicesData.title || heading);
//     setParagraphs([
//       moreServicesData.paragraph1 || paragraphs[0],
//       moreServicesData.paragraph2 || paragraphs[1],
//       moreServicesData.paragraph3 || paragraphs[2],
//     ]);
//     setSubHeading(moreServicesData.paragraph4 || subHeading);
//     if (moreServicesData.images && JSON.parse(moreServicesData.images)) {
//       const imgData = JSON.parse(moreServicesData.images);
//       setImagePreview(
//         imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo5
//       );
//     }
//   }, [moreServicesData]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file); // Directly store the selected file
//       setImagePreview(URL.createObjectURL(file)); // Set preview
//     }
//   };

//   const handleDeleteParagraph = (index) => {
//     setParagraphs((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleDeleteImage = () => {
//     setImage(null);
//     setImagePreview(logo5);
//   };

//   const handleSave = async () => {
//     setIsEditing(false);
//     setLoading(true);

//     // Prepare data to send to the API
//     const formData = new FormData();
//     formData.append("title", heading);
//     formData.append("paragraph1", paragraphs[0] || "");
//     formData.append("paragraph2", paragraphs[1] || "");
//     formData.append("paragraph3", paragraphs[2] || "");
//     formData.append("paragraph4", subHeading);
//     if (image) {
//       formData.append("images", image, "image.jpg");
//     }

//     try {
//       const response = await axios.patch(
//         `https://api.novajobs.us/api/admin$${
//           projectName ? projectName : ""
//         }/update-aboutus-content/5`,
//         formData,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("API Response:", response.data);
//     } catch (error) {
//       console.error("Error updating content:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleDelete = (field) => {
//     switch (field) {
//       case "heading":
//         setHeading("");
//         break;

//       default:
//         break;
//     }
//   };
//   return (
//     <>
//       <div className="mt-5">
//         {authToken && (
//           <button
//             className="btn btn-warning mt-3 float-end"
//             onClick={() => setIsEditing(true)}
//           >
//             Edit
//           </button>
//         )}
//         {isEditing ? (
//           <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
//             <div className="d-flex justify-content-start gap-2">
//               <label>
//                 <h5> Heading(Title Mandatory):</h5>
//                 <input
//                   type="text"
//                   value={heading}
//                   onChange={(e) => setHeading(e.target.value)}
//                   className="form-control"
//                   style={{ marginBottom: "10px" }}
//                 />
//               </label>
//               <button
//                 className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
//                 onClick={() => handleDelete("heading")}
//               >
//                 Delete Heading
//               </button>
//             </div>

//             {paragraphs.map((paragraph, index) => (
//               <div key={index}>
//                 <h5>Paragraph {index + 1}:</h5>
//                 <ReactQuill
//                   value={paragraph}
//                   onChange={(value) =>
//                     setParagraphs((prev) => {
//                       const updated = [...prev];
//                       updated[index] = value;
//                       return updated;
//                     })
//                   }
//                 />
//                 <button
//                   className="btn btn-danger mt-2"
//                   onClick={() => handleDeleteParagraph(index)}
//                 >
//                   Delete Paragraph {index + 1}
//                 </button>
//               </div>
//             ))}

//             <h5>Subheading:</h5>
//             <input
//               type="text"
//               value={subHeading}
//               onChange={(e) => setSubHeading(e.target.value)}
//               className="form-control"
//             />

//             <label className="mt-3">
//               Change Image (400px x 800px):
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="form-control mt-2"
//               />
//             </label>
//             {imagePreview && (
//               <div className="mt-3">
//                 <p>
//                   <strong>Preview:</strong>
//                 </p>
//                 <img
//                   src={imagePreview}
//                   alt="Preview"
//                   style={{
//                     height: "auto",
//                     maxWidth: "350px",
//                     border: "2px solid #ccc",
//                     borderRadius: "10px",
//                   }}
//                 />
//                 <button
//                   className="btn btn-danger mt-2"
//                   onClick={handleDeleteImage}
//                 >
//                   Delete Image
//                 </button>
//               </div>
//             )}

//             <button
//               className="btn btn-primary mt-3"
//               onClick={handleSave}
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Save"}
//             </button>
//             <button
//               className="btn btn-secondary mt-3 ms-2"
//               onClick={() => setIsEditing(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <div>
//             <div className="d-flex flex-column flex-lg-row justify-content-around">
//               <div
//                 className="mx-3 mx-lg-5 mb-4 mb-lg-0"
//                 style={{ maxWidth: "420px" }}
//               >
//                 <h1
//                   className="mb-4"
//                   style={{
//                     fontSize: "clamp(14px, 5vw, 20px)",
//                     fontWeight: "500",
//                     textDecoration: "underline",
//                   }}
//                 >
//                   {heading}
//                 </h1>
//                 {paragraphs.map((paragraph, index) => (
//                   <p
//                     key={index}
//                     style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
//                     dangerouslySetInnerHTML={{ __html: paragraph }}
//                   ></p>
//                 ))}
//               </div>
//               <div className="mx-3 mx-lg-5">
//                 <img
//                   src={imagePreview}
//                   alt="Service Logo"
//                   style={{ height: "350px", width: "350px" }}
//                 />
//               </div>
//             </div>
//             <br />
//             <br />
//             <div className="candidate-title mx-3 mx-sm-5 px-3 px-sm-5 text-center">
//               <h1
//                 className="m-b5"
//                 style={{
//                   fontSize: "clamp(14px, 5vw, 20px)",
//                   fontWeight: "semibold",
//                 }}
//               >
//                 {subHeading}
//               </h1>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default MoreServices;
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import logo5 from "../../../assests/logo5.jpg";

function MoreServices({ moreServicesData, projectName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  // State for content
  const [heading, setHeading] = useState(
    "More Services from Hyper V Solutions"
  );
  const [paragraphs, setParagraphs] = useState([
    `Discover the wide range of innovative services offered by Hyper V Solutions. Whether you're navigating a job search or looking to elevate your career, our EdTech platform, UltraAura.education, is here to support you.`,
    `We offer expertly curated content, live online classes led by industry professionals, and robust placement assistance through Novajobs.us. Take the next step towards your future with our cutting-edge educational solutions.`,
    `For more information, visit our parent website: https://hypervsolutions.net/`,
  ]);
  const [subHeading, setSubHeading] = useState(
    `Experience the difference of innovation and inclusivity at Novajobs.us. Explore our website today and unlock your path to success.`
  );
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(logo5);

  // Show/Hide toggles
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);
  const [areParagraphsVisible, setAreParagraphsVisible] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isSubHeadingVisible, setIsSubHeadingVisible] = useState(true);

  const authToken = localStorage.getItem("authToken"); // Retrieve auth token

  // Fetch data from the GET API
  useEffect(() => {
    if (!moreServicesData) {
      return;
    }

    setHeading(moreServicesData.title || heading);
    setParagraphs([
      moreServicesData.paragraph1 || paragraphs[0],
      moreServicesData.paragraph2 || paragraphs[1],
      moreServicesData.paragraph3 || paragraphs[2],
    ]);
    setSubHeading(moreServicesData.paragraph4 || subHeading);
    if (moreServicesData.images && JSON.parse(moreServicesData.images)) {
      const imgData = JSON.parse(moreServicesData.images);
      setImagePreview(
        imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo5
      );
    }
  }, [moreServicesData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Directly store the selected file
      setImagePreview(URL.createObjectURL(file)); // Set preview
    }
  };

  const handleDeleteParagraph = (index) => {
    setParagraphs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteImage = () => {
    setImage(null);
    setImagePreview(logo5);
  };

  const handleSave = async () => {
    setIsEditing(false);
    setLoading(true);

    // Prepare data to send to the API
    const formData = new FormData();
    formData.append("title", heading);
    formData.append("paragraph1", paragraphs[0] || "");
    formData.append("paragraph2", paragraphs[1] || "");
    formData.append("paragraph3", paragraphs[2] || "");
    formData.append("paragraph4", subHeading);
    if (image) {
      formData.append("images", image, "image.jpg");
    }

    try {
      const response = await axios.patch(
        `https://api.novajobs.us/api/admin$${
          projectName ? projectName : ""
        }/update-aboutus-content/5`,
        formData,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error updating content:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (field) => {
    switch (field) {
      case "heading":
        setHeading("");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="mt-5">
        {authToken && (
          <button
            className="btn btn-warning mt-3 float-end"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        {isEditing ? (
          <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
            <div className="d-flex justify-content-start gap-4">
              <label>
                <h5> Heading (Title Mandatory):</h5>
                <input
                  type="text"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />
              </label>
              <button
                className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
                onClick={() => handleDelete("heading")}
              >
                Delete Heading
              </button>

              <div className="d-flex justify-content-start gap-2 ms-2">
                <label className="form-check form-switch mt-4 mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="toggleHeading"
                    checked={isHeadingVisible}
                    onChange={() => setIsHeadingVisible(!isHeadingVisible)}
                  />
                  <span className="form-check-label">
                    {isHeadingVisible ? "Hide Heading" : "Show Heading"}
                  </span>
                </label>
              </div>
            </div>

            {paragraphs.map((paragraph, index) => (
              <div key={index}>
                {isHeadingVisible && (
                  <>
                    <h5>Paragraph {index + 1}:</h5>
                    <ReactQuill
                      value={paragraph}
                      onChange={(value) =>
                        setParagraphs((prev) => {
                          const updated = [...prev];
                          updated[index] = value;
                          return updated;
                        })
                      }
                    />
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => handleDeleteParagraph(index)}
                    >
                      Delete Paragraph {index + 1}
                    </button>

                    <div className="d-flex justify-content-start gap-2 ms-2">
                      <label className="form-check form-switch mt-4 mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="toggleHeading"
                          checked={areParagraphsVisible}
                          onChange={() =>
                            setAreParagraphsVisible(!areParagraphsVisible)
                          }
                        />
                        <span className="form-check-label">
                          {areParagraphsVisible
                            ? "Hide Paragraph"
                            : "Show Paragraph"}
                        </span>
                      </label>
                    </div>
                  </>
                )}
              </div>
            ))}

            <h5>Subheading:</h5>
            <input
              type="text"
              value={subHeading}
              onChange={(e) => setSubHeading(e.target.value)}
              className="form-control"
            />

            <label className="mt-3">
              Change Image (400px x 800px):
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control mt-2"
              />
            </label>
            {isImageVisible && imagePreview && (
              <div className="mt-3">
                <p>
                  <strong>Preview:</strong>
                </p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    height: "auto",
                    maxWidth: "350px",
                    border: "2px solid #ccc",
                    borderRadius: "10px",
                  }}
                />
                <button
                  className="btn btn-danger mt-2"
                  onClick={handleDeleteImage}
                >
                  Delete Image
                </button>

                <div className="d-flex justify-content-start gap-2 ms-2">
                  <label className="form-check form-switch mt-4 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="toggleHeading"
                      checked={isImageVisible}
                      onChange={() => setIsImageVisible(!isImageVisible)}
                    />
                    <span className="form-check-label">
                      {isImageVisible ? "Hide" : "Show"} Image
                    </span>
                  </label>
                </div>
              </div>
            )}

            <button
              className="btn btn-primary mt-3"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              className="btn btn-secondary mt-3 ms-2"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <div className="d-flex flex-column flex-lg-row justify-content-around">
              <div
                className="mx-3 mx-lg-5 mb-4 mb-lg-0"
                style={{ maxWidth: "420px" }}
              >
                {isHeadingVisible && (
                  <>
                    <h1
                      className="mb-4"
                      style={{
                        fontSize: "clamp(14px, 5vw, 20px)",
                        fontWeight: "500",
                        textDecoration: "underline",
                      }}
                    >
                      {heading}
                    </h1>
                  </>
                )}
                {areParagraphsVisible &&
                  paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    ></p>
                  ))}
              </div>
              <div className="mx-3 mx-lg-5">
                {isImageVisible && (
                  <img
                    src={imagePreview}
                    alt="Service Logo"
                    style={{ height: "350px", width: "350px" }}
                  />
                )}
              </div>
            </div>
            <br />
            <br />
            {isSubHeadingVisible && (
              <div className="candidate-title mx-3 mx-sm-5 px-3 px-sm-5 text-center">
                <h1
                  className="m-b5"
                  style={{
                    fontSize: "clamp(14px, 5vw, 20px)",
                    fontWeight: "semibold",
                  }}
                >
                  {subHeading}
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default MoreServices;
