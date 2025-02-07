// import React, { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Quill editor styles

// import logo2 from "../../../assests/logo2.jpg";
// import axios from "axios";

// function ForJobseeker({ forJobseekerData, projectName }) {
//   const [loading, setLoading] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [heading, setHeading] = useState("For Job Seekers:");
//   const [paragraph1Content, setParagraph1Content] = useState(
//     `<p>
//       Novajobs.us offers a comprehensive suite of AI-enabled services, such as an AI resume builder, skill tests, and profile listings.
//       Job seekers can apply for positions across the USA, making it a versatile platform for all.
//     </p>`
//   );
//   const [paragraph1AContent, setParagraph1AContent] = useState(
//     `<p>
//       Whether you’re starting your career or looking to advance, Novajobs.us is your one-stop solution.
//       Embrace the future of job searching and recruitment with our cutting-edge tools.
//     </p>`
//   );
//   const [image, setImage] = useState(null); // Binary image blob
//   const [imagePreview, setImagePreview] = useState(logo2); // Preview for the image

//   const authToken = localStorage.getItem("authToken"); // Retrieve auth token

//   useEffect(() => {
//     if (!forJobseekerData) {
//       return;
//     }

//     setHeading(forJobseekerData.title || heading);
//     setParagraph1Content(forJobseekerData.paragraph1 || paragraph1Content);
//     setParagraph1AContent(forJobseekerData.paragraph2 || paragraph1AContent);

//     if (forJobseekerData.images && JSON.parse(forJobseekerData.images)) {
//       const imgData = JSON.parse(forJobseekerData.images);
//       setImagePreview(
//         imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo2
//       );
//     }
//   }, [forJobseekerData]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file); // Directly store the selected file
//       setImagePreview(URL.createObjectURL(file)); // Set preview
//     }
//   };

//   const handleSave = async () => {
//     setIsEditing(false);
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("title", heading);
//     formData.append("paragraph1", paragraph1Content);
//     formData.append("paragraph2", paragraph1AContent);

//     if (image) {
//       formData.append("images", image, "image.jpg");
//     }

//     try {
//       console.log(projectName, ">>>projectname");
//       const response = await axios.patch(
//         `https://api.novajobs.us/api/admin${
//           projectName ? projectName : ""
//         }/update-aboutus-content/2`,
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
//       case "paragraph1":
//         setParagraph1Content("");
//         break;
//       case "paragraph2":
//         setParagraph1AContent("");
//         break;

//       case "image":
//         setImage(null);
//         setImagePreview(logo2);
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
//         <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
//           {isEditing ? (
//             <div>
//               <div className="d-flex justify-content-start gap-2">
//                 <label>
//                   <h5> Heading(Title Mandatory):</h5>
//                   <input
//                     type="text"
//                     value={heading}
//                     onChange={(e) => setHeading(e.target.value)}
//                     className="form-control"
//                     style={{ marginBottom: "10px" }}
//                   />
//                 </label>
//                 <button
//                   className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
//                   onClick={() => handleDelete("heading")}
//                 >
//                   Delete Heading
//                 </button>
//               </div>
//               <button
//                 className="btn btn-danger mt-2 mb-2 px-4 btn btn-primary"
//                 onClick={() => handleDelete("paragraph1")}
//               >
//                 Delete Paragraph 1
//               </button>
//               <h5>Paragraph 1:</h5>
//               <ReactQuill
//                 value={paragraph1Content}
//                 onChange={setParagraph1Content}
//               />
//               <button
//                 className="btn btn-danger mt-2 mb-2 px-4 btn-primary"
//                 onClick={() => handleDelete("paragraph2")}
//               >
//                 Delete Paragraph 2
//               </button>
//               <h5 className="">Paragraph 2:</h5>
//               <ReactQuill
//                 value={paragraph1AContent}
//                 onChange={setParagraph1AContent}
//               />
//               <div className="d-flex justify-content-start gap-2">
//                 <label className="mt-3">
//                   <h5>Change Image (400px x 800px):</h5>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="form-control"
//                   />
//                 </label>
//                 <button
//                   className="btn btn-danger mt-4 mb-2 px-4 btn-primary"
//                   onClick={() => handleDelete("image")}
//                 >
//                   Delete Image
//                 </button>
//               </div>
//               {imagePreview && (
//                 <div className="mt-3">
//                   <p>
//                     <strong>Preview:</strong>
//                   </p>
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     style={{
//                       height: "400px",
//                       width: "800px",
//                       border: "2px solid #ccc",
//                       borderRadius: "10px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </div>
//               )}

//               <button
//                 className="btn btn-primary mt-3"
//                 onClick={handleSave}
//                 disabled={loading}
//               >
//                 {loading ? "Saving..." : "Save"}
//               </button>
//               <button
//                 className="btn btn-secondary mt-3 ms-2"
//                 onClick={() => setIsEditing(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <div>
//               <h1
//                 style={{
//                   fontSize: "clamp(14px, 5vw, 20px)",
//                   fontWeight: "500",
//                   textDecoration: "underline",
//                 }}
//               >
//                 {heading}
//               </h1>
//               <div
//                 dangerouslySetInnerHTML={{ __html: paragraph1Content }}
//                 style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
//               ></div>
//               <div
//                 dangerouslySetInnerHTML={{ __html: paragraph1AContent }}
//                 style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
//               ></div>
//               <div className="mx-3 mx-lg-5 d-flex justify-content-center">
//                 <img
//                   src={imagePreview}
//                   alt="Uploaded"
//                   style={{ height: "400px", width: "800px" }}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ForJobseeker;
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styles
import logo2 from "../../../assests/logo2.jpg";
import axios from "axios";

function ForJobseeker({ forJobseekerData, projectName }) {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState("For Job Seekers:");
  const [paragraph1Content, setParagraph1Content] = useState(
    `<p>
      Novajobs.us offers a comprehensive suite of AI-enabled services, such as an AI resume builder, skill tests, and profile listings. 
      Job seekers can apply for positions across the USA, making it a versatile platform for all.
    </p>`
  );
  const [paragraph1AContent, setParagraph1AContent] = useState(
    `<p>
      Whether you’re starting your career or looking to advance, Novajobs.us is your one-stop solution. 
      Embrace the future of job searching and recruitment with our cutting-edge tools.
    </p>`
  );
  const [image, setImage] = useState(null); // Binary image blob
  const [imagePreview, setImagePreview] = useState(logo2); // Preview for the image
  const [showHeading, setShowHeading] = useState(true);
  const [showParagraph1, setShowParagraph1] = useState(true);
  const [showParagraph2, setShowParagraph2] = useState(true);
  const [showImage, setShowImage] = useState(true);

  const authToken = localStorage.getItem("authToken"); // Retrieve auth token

  useEffect(() => {
    if (!forJobseekerData) {
      return;
    }

    setHeading(forJobseekerData.title || heading);
    setParagraph1Content(forJobseekerData.paragraph1 || paragraph1Content);
    setParagraph1AContent(forJobseekerData.paragraph2 || paragraph1AContent);
    setShowHeading(forJobseekerData.is_title_display);
    setShowParagraph1(forJobseekerData.is_paragraph1_display);
    setShowParagraph2(forJobseekerData.is_paragraph2_display);
    setShowImage(forJobseekerData.is_images_display);
    if (forJobseekerData.images && JSON.parse(forJobseekerData.images)) {
      const imgData = JSON.parse(forJobseekerData.images);
      setImagePreview(
        imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo2
      );
    }
  }, [forJobseekerData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Directly store the selected file
      setImagePreview(URL.createObjectURL(file)); // Set preview
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    setLoading(true);

    const formData = new FormData();
    formData.append("title", heading);
    formData.append("paragraph1", paragraph1Content);
    formData.append("paragraph2", paragraph1AContent);
    formData.append("is_title_display", showHeading);
    formData.append("is_paragraph1_display", showParagraph1);
    formData.append("is_paragraph2_display", showParagraph2);
    formData.append("is_images_display", showImage);

    if (image) {
      formData.append("images", image, "image.jpg");
    }

    try {
      console.log(projectName, ">>>projectname");
      const response = await axios.patch(
        `https://api.novajobs.us/api/admin${
          projectName ? projectName : ""
        }/update-aboutus-content/2`,
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
      case "paragraph1":
        setParagraph1Content("");
        break;
      case "paragraph2":
        setParagraph1AContent("");
        break;
      case "image":
        setImage(null);
        setImagePreview(logo2);
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
        <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
          {isEditing ? (
            <div>
              <div className="d-flex justify-content-start gap-2">
                {showHeading && (
                  <label>
                    <h5> Heading(Title Mandatory):</h5>
                    <input
                      type="text"
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
                      className="form-control"
                      style={{ marginBottom: "10px" }}
                    />
                  </label>
                )}

                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={showHeading}
                      onChange={() => setShowHeading(!showHeading)}
                    />
                    <span className="form-check-label">
                      {showHeading ? "Hide Heading" : "Show Heading"}
                    </span>
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-start gap-4">
                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={showParagraph1}
                      onChange={() => setShowParagraph1(!showParagraph1)}
                    />
                    <span className="form-check-label">
                      {showParagraph1 ? "Hide Paragraph 1" : "Show Paragraph 1"}
                    </span>
                  </label>
                </div>
              </div>
              <h5>Paragraph 1:</h5>
              {showParagraph1 && (
                <ReactQuill
                  value={paragraph1Content}
                  onChange={setParagraph1Content}
                />
              )}
              <div className="d-flex justify-content-start gap-4">
                <label className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={showParagraph2}
                    onChange={() => setShowParagraph2(!showParagraph2)}
                  />
                  <span className="form-check-label">
                    {showParagraph2 ? "Hide Paragraph 2" : "Show Paragraph 2"}
                  </span>
                </label>
              </div>
              <h5>Paragraph 2:</h5>
              {showParagraph2 && (
                <ReactQuill
                  value={paragraph1AContent}
                  onChange={setParagraph1AContent}
                />
              )}
              <div className="d-flex justify-content-start gap-2">
                <label className="mt-3">
                  <h5>Change Image (400px x 800px):</h5>
                  {showImage && (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="form-control"
                    />
                  )}
                </label>

                <label className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={showImage}
                    onChange={() => setShowImage(!showImage)}
                  />
                  <span className="form-check-label">
                    {showImage ? "Hide Image" : "Show Image"}
                  </span>
                </label>
              </div>
              {showImage && imagePreview && (
                <div className="mt-3">
                  <p>
                    <strong>Preview:</strong>
                  </p>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      height: "400px",
                      width: "800px",
                      border: "2px solid #ccc",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  />
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
              {showHeading && (
                <h1
                  style={{
                    fontSize: "clamp(14px, 5vw, 20px)",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                >
                  {heading}
                </h1>
              )}
              {showParagraph1 && (
                <div
                  dangerouslySetInnerHTML={{ __html: paragraph1Content }}
                  style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                ></div>
              )}
              {showParagraph2 && (
                <div
                  dangerouslySetInnerHTML={{ __html: paragraph1AContent }}
                  style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                ></div>
              )}
              {showImage && (
                <div className="mx-3 mx-lg-5 d-flex justify-content-center">
                  <img
                    src={imagePreview}
                    alt="Uploaded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ForJobseeker;
