// import React, { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ReactPlayer from "react-player";
// import ReactQuill from "react-quill";
// import axios from "axios";
// import "react-quill/dist/quill.snow.css";
// import logo1 from "../../../assests/logo1.jpg";

// function Introductions({ introductionData, projectName }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [heading, setHeading] = useState("Introduction");
//   const [paragraph1Content, setParagraph1Content] = useState(`
//     <p>
//       <strong>Introducing Novajobs.us by Hyper V Solutions:</strong>
//       A cutting-edge AI-enabled job portal designed to streamline job search and recruitment processes.
//       Experience the future of employment with intelligent matching and personalized career opportunities.
//     </p>
//   `);
//   const [paragraph1AContent, setParagraph1AContent] = useState(`
//     <p>
//       For employers and staffing companies, Novajobs.us offers advanced AI algorithms that
//       connect you with top-tier talent, optimizing your hiring process with precision and efficiency.
//     </p>
//   `);
//   const [paragraph1BContent, setParagraph1BContent] = useState(`
//     <p>
//       <strong>Check our quick Product Video below:</strong>

//     </p>
//   `);
//   const [videoUrl, setVideoUrl] = useState(
//     "https://www.youtube.com/watch?v=DbHXRGdBhqo"
//   );
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(logo1);
//   const [loading, setLoading] = useState(false);

//   const authToken = localStorage.getItem("authToken");

//   useEffect(() => {
//     if (!introductionData) {
//       return;
//     }

//     setHeading(introductionData.title || heading);
//     setParagraph1Content(introductionData.paragraph1 || paragraph1Content);
//     setParagraph1AContent(introductionData.paragraph2 || paragraph1AContent);
//     setParagraph1BContent(introductionData.paragraph3 || paragraph1BContent);
//     if (introductionData.urls && JSON.parse(introductionData.urls)) {
//       const urlData = JSON.parse(introductionData.urls);
//       setVideoUrl(urlData[0] || videoUrl);
//     }
//     if (introductionData.images && JSON.parse(introductionData.images)) {
//       const imgData = JSON.parse(introductionData.images);
//       setImagePreview(
//         imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo1
//       );
//     }
//   }, [introductionData]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSave = async () => {
//     if (!heading) {
//       toast.error("Title is required!");
//       return;
//     }

//     setIsEditing(false);
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("title", heading);
//     formData.append("paragraph1", paragraph1Content);
//     formData.append("paragraph2", paragraph1AContent);
//     formData.append("urls", videoUrl);

//     if (image) {
//       formData.append("images", image, "image.jpg");
//     }

//     try {
//       const response = await axios.patch(
//         `https://api.novajobs.us/api/admin${
//           projectName ? projectName : ""
//         }/update-aboutus-content/1`,
//         formData,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       toast.success("Content updated successfully!");
//       console.log("API Response:", response.data);
//     } catch (error) {
//       toast.error("Failed to update content!");
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
//       case "paragraph3":
//         setParagraph1BContent("");
//         break;
//       case "videoUrl":
//         setVideoUrl("");
//         break;
//       case "image":
//         setImage(null);
//         setImagePreview(logo1);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
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
//                   Heading (Title Mandatory):
//                   <input
//                     type="text"
//                     value={heading}
//                     onChange={(e) => setHeading(e.target.value)}
//                     className="form-control"
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
//                 className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
//                 onClick={() => handleDelete("paragraph1")}
//               >
//                 Delete Paragraph 1
//               </button>
//               <ReactQuill
//                 value={paragraph1Content}
//                 onChange={setParagraph1Content}
//               />
//               <button
//                 className="btn btn-danger mt-2 mb-2 btn-primary"
//                 onClick={() => handleDelete("paragraph3")}
//               >
//                 Delete Paragraph 3
//               </button>
//               <ReactQuill
//                 value={paragraph1BContent}
//                 onChange={setParagraph1BContent}
//               />
//               <div className="d-flex justify-content-start gap-2">
//                 <label className="mt-3">
//                   Video URL:
//                   <input
//                     type="text"
//                     value={videoUrl}
//                     onChange={(e) => setVideoUrl(e.target.value)}
//                     className="form-control"
//                   />
//                 </label>
//                 <button
//                   className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
//                   onClick={() => handleDelete("videoUrl")}
//                 >
//                   Delete Video URL
//                 </button>
//               </div>
//               <button
//                 className="btn btn-danger mt-2 mb-2 btn-primary"
//                 onClick={() => handleDelete("paragraph2")}
//               >
//                 Delete Paragraph 2
//               </button>
//               <ReactQuill
//                 value={paragraph1AContent}
//                 onChange={setParagraph1AContent}
//               />
//               <div className="d-flex justify-content-start gap-2 ">
//                 <label className="mt-3">
//                   Change Image (400px x 800px):
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="form-control mt-2"
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
//               <h1 className="mb-4">{heading}</h1>
//               <div
//                 dangerouslySetInnerHTML={{ __html: paragraph1Content }}
//               ></div>
//               <p
//                 className="mt-5 text-center"
//                 dangerouslySetInnerHTML={{ __html: paragraph1BContent }}
//               ></p>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ReactPlayer
//                   url={videoUrl}
//                   width="700px"
//                   height="500px"
//                   controls={true}
//                   style={{
//                     margin: "50px",
//                     border: "2px solid #ccc",
//                     borderRadius: "10px",
//                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                   }}
//                 />
//               </div>
//               <div
//                 dangerouslySetInnerHTML={{ __html: paragraph1AContent }}
//               ></div>
//               <div className="text-center">
//                 <img
//                   src={imagePreview}
//                   alt="Uploaded Image"
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

// export default Introductions;
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPlayer from "react-player";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import logo1 from "../../../assests/logo1.jpg";

function Introductions({ introductionData, projectName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState("Introduction");
  const [paragraph1Content, setParagraph1Content] = useState(`
    <p>
      <strong>Introducing Novajobs.us by Hyper V Solutions:</strong>
      A cutting-edge AI-enabled job portal designed to streamline job search and recruitment processes.
      Experience the future of employment with intelligent matching and personalized career opportunities.
    </p>
  `);
  const [paragraph1AContent, setParagraph1AContent] = useState(`
    <p>
      For employers and staffing companies, Novajobs.us offers advanced AI algorithms that
      connect you with top-tier talent, optimizing your hiring process with precision and efficiency.
    </p>
  `);
  const [paragraph1BContent, setParagraph1BContent] = useState(`
    <p>
      <strong>Check our quick Product Video below:</strong>
    </p>
  `);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=DbHXRGdBhqo"
  );
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(logo1);
  const [loading, setLoading] = useState(false);

  const [showHeading, setShowHeading] = useState(true);
  const [showParagraph1, setShowParagraph1] = useState(true);
  const [showParagraph1A, setShowParagraph1A] = useState(true);
  const [showParagraph1B, setShowParagraph1B] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [showImage, setShowImage] = useState(true);

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!introductionData) {
      return;
    }

    setHeading(introductionData.title || heading);
    setParagraph1Content(introductionData.paragraph1 || paragraph1Content);
    setParagraph1AContent(introductionData.paragraph2 || paragraph1AContent);
    setParagraph1BContent(introductionData.paragraph3 || paragraph1BContent);
    if (introductionData.urls && JSON.parse(introductionData.urls)) {
      const urlData = JSON.parse(introductionData.urls);
      setVideoUrl(urlData[0] || videoUrl);
    }
    if (introductionData.images && JSON.parse(introductionData.images)) {
      const imgData = JSON.parse(introductionData.images);
      setImagePreview(
        imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo1
      );
    }
  }, [introductionData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!heading) {
      toast.error("Title is required!");
      return;
    }

    setIsEditing(false);
    setLoading(true);

    const formData = new FormData();
    formData.append("title", heading);
    formData.append("paragraph1", paragraph1Content);
    formData.append("paragraph2", paragraph1AContent);
    formData.append("urls", videoUrl);

    if (image) {
      formData.append("images", image, "image.jpg");
    }

    try {
      const response = await axios.patch(
        `https://api.novajobs.us/api/admin${
          projectName ? projectName : ""
        }/update-aboutus-content/1`,
        formData,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Content updated successfully!");
      console.log("API Response:", response.data);
    } catch (error) {
      toast.error("Failed to update content!");
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
      case "paragraph3":
        setParagraph1BContent("");
        break;
      case "videoUrl":
        setVideoUrl("");
        break;
      case "image":
        setImage(null);
        setImagePreview(logo1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ToastContainer />
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
                <label>
                  Heading (Title Mandatory):
                  <input
                    type="text"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    className="form-control"
                  />
                </label>
                <button
                  className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
                  onClick={() => handleDelete("heading")}
                >
                  Delete Heading
                </button>
                <button
                  className="btn btn-secondary mt-4 mb-2 px-4 btn btn-primary"
                  onClick={() => setShowHeading(!showHeading)}
                >
                  {showHeading ? "Hide" : "Show"} Heading
                </button>
              </div>

              {showHeading && <h1 className="mb-4">{heading}</h1>}

              <button
                className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
                onClick={() => handleDelete("paragraph1")}
              >
                Delete Paragraph 1
              </button>
              <button
                className="btn btn-secondary mt-4 mb-2 px-4 btn btn-primary"
                onClick={() => setShowParagraph1(!showParagraph1)}
              >
                {showParagraph1 ? "Hide" : "Show"} Paragraph 1
              </button>
              {showParagraph1 && (
                <ReactQuill
                  value={paragraph1Content}
                  onChange={setParagraph1Content}
                />
              )}

              <button
                className="btn btn-danger mt-2 mb-2 btn-primary"
                onClick={() => handleDelete("paragraph3")}
              >
                Delete Paragraph 3
              </button>
              <button
                className="btn btn-secondary mt-4 mb-2 px-4 btn btn-primary"
                onClick={() => setShowParagraph1B(!showParagraph1B)}
              >
                {showParagraph1B ? "Hide" : "Show"} Paragraph 3
              </button>
              {showParagraph1B && (
                <ReactQuill
                  value={paragraph1BContent}
                  onChange={setParagraph1BContent}
                />
              )}

              <div className="d-flex justify-content-start gap-2">
                <label className="mt-3">
                  Video URL:
                  <input
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="form-control"
                  />
                </label>
                <button
                  className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
                  onClick={() => handleDelete("videoUrl")}
                >
                  Delete Video URL
                </button>
                <button
                  className="btn btn-secondary mt-4 mb-2 px-4 btn btn-primary"
                  onClick={() => setShowVideo(!showVideo)}
                >
                  {showVideo ? "Hide" : "Show"} Video
                </button>
              </div>
              {showVideo && (
                <ReactPlayer
                  url={videoUrl}
                  width="700px"
                  height="500px"
                  controls={true}
                  style={{
                    margin: "50px",
                    border: "2px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                />
              )}

              <button
                className="btn btn-danger mt-2 mb-2 btn-primary"
                onClick={() => handleDelete("paragraph2")}
              >
                Delete Paragraph 2
              </button>
              <button
                className="btn btn-secondary mt-4 mb-2 px-4 btn btn-primary"
                onClick={() => setShowParagraph1A(!showParagraph1A)}
              >
                {showParagraph1A ? "Hide" : "Show"} Paragraph 2
              </button>
              {showParagraph1A && (
                <ReactQuill
                  value={paragraph1AContent}
                  onChange={setParagraph1AContent}
                />
              )}

              <div className="d-flex justify-content-start gap-2 ">
                <label className="mt-3">
                  Change Image (400px x 800px):
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="form-control mt-2"
                  />
                </label>
                <button
                  className="btn btn-danger mt-4 mb-2 px-4 btn-primary"
                  onClick={() => handleDelete("image")}
                >
                  Delete Image
                </button>
                <button
                  className="btn btn-secondary mt-4 mb-2 px-4 btn btn-primary"
                  onClick={() => setShowImage(!showImage)}
                >
                  {showImage ? "Hide" : "Show"} Image
                </button>
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
              {showHeading && <h1 className="mb-4">{heading}</h1>}
              {showParagraph1 && (
                <div
                  dangerouslySetInnerHTML={{ __html: paragraph1Content }}
                ></div>
              )}
              {showParagraph1B && (
                <p
                  className="mt-5 text-center"
                  dangerouslySetInnerHTML={{ __html: paragraph1BContent }}
                ></p>
              )}
              {showVideo && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ReactPlayer
                    url={videoUrl}
                    width="700px"
                    height="500px"
                    controls={true}
                    style={{
                      margin: "50px",
                      border: "2px solid #ccc",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              )}
              {showParagraph1A && (
                <div
                  dangerouslySetInnerHTML={{ __html: paragraph1AContent }}
                ></div>
              )}
              {showImage && (
                <div className="text-center">
                  <img
                    src={imagePreview}
                    alt="Uploaded Image"
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

export default Introductions;
