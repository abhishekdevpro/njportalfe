import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Carousel from "react-bootstrap/Carousel";
import "./aboutus.css";

import pic1 from "../../../assests/1 (1).png";
import pic2 from "../../../assests/1 (2).png";
import pic3 from "../../../assests/1 (3).png";
import pic4 from "../../../assests/1 (4).png";
import pic5 from "../../../assests/1 (5).png";
import pic6 from "../../../assests/1 (6).png";
import pic7 from "../../../assests/1 (7).png";
import pic8 from "../../../assests/1 (8).png";
import pic9 from "../../../assests/1 (9).png";
import pic10 from "../../../assests/1 (10).png";
import pic11 from "../../../assests/1 (11).png";
import pic12 from "../../../assests/1 (12).png";

function Novajobsus() {
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState("NovaJobs.US");

  const [paragraph1Content, setParagraph1Content] = useState(`
    <p>
      Hyper V Solutions, offers NovaJobs.us, which is AI-Enabled
      Job Portal with advanced functionality like Jobs search,
      Profile listing, Skill Test, Resume Building, AI Data
      Parsing & more.
    </p>
  `);

  // State for each image and preview
  const [image1, setImage1] = useState(pic1);
  const [imagePreview1, setImagePreview1] = useState(pic1);
  const [uploading1, setUploading1] = useState(false);

  const [image2, setImage2] = useState(pic2);
  const [imagePreview2, setImagePreview2] = useState(pic2);
  const [uploading2, setUploading2] = useState(false);

  const [image3, setImage3] = useState(pic3);
  const [imagePreview3, setImagePreview3] = useState(pic3);
  const [uploading3, setUploading3] = useState(false);

  const [image4, setImage4] = useState(pic4);
  const [imagePreview4, setImagePreview4] = useState(pic4);
  const [uploading4, setUploading4] = useState(false);

  const [image5, setImage5] = useState(pic5);
  const [imagePreview5, setImagePreview5] = useState(pic5);
  const [uploading5, setUploading5] = useState(false);

  const [image6, setImage6] = useState(pic6);
  const [imagePreview6, setImagePreview6] = useState(pic6);
  const [uploading6, setUploading6] = useState(false);

  const [image7, setImage7] = useState(pic7);
  const [imagePreview7, setImagePreview7] = useState(pic7);
  const [uploading7, setUploading7] = useState(false);

  const [image8, setImage8] = useState(pic8);
  const [imagePreview8, setImagePreview8] = useState(pic8);
  const [uploading8, setUploading8] = useState(false);

  const [image9, setImage9] = useState(pic9);
  const [imagePreview9, setImagePreview9] = useState(pic9);
  const [uploading9, setUploading9] = useState(false);

  const [image10, setImage10] = useState(pic10);
  const [imagePreview10, setImagePreview10] = useState(pic10);
  const [uploading10, setUploading10] = useState(false);

  const [image11, setImage11] = useState(pic11);
  const [imagePreview11, setImagePreview11] = useState(pic11);
  const [uploading11, setUploading11] = useState(false);

  const [image12, setImage12] = useState(pic12);
  const [imagePreview12, setImagePreview12] = useState(pic12);
  const [uploading12, setUploading12] = useState(false);

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setUploadingState(index, true);
      setPreviewState(index, previewUrl);

      setTimeout(() => {
        setImageState(index, previewUrl);
        setUploadingState(index, false);
      }, 2000);
    }
  };

  const setUploadingState = (index, value) => {
    switch (index) {
      case 1:
        setUploading1(value);
        break;
      case 2:
        setUploading2(value);
        break;
      case 3:
        setUploading3(value);
        break;
      case 4:
        setUploading4(value);
        break;
      case 5:
        setUploading5(value);
        break;
      case 6:
        setUploading6(value);
        break;
      case 7:
        setUploading7(value);
        break;
      case 8:
        setUploading8(value);
        break;
      case 9:
        setUploading9(value);
        break;
      case 10:
        setUploading10(value);
        break;
      case 11:
        setUploading11(value);
        break;
      case 12:
        setUploading12(value);
        break;
      default:
        break;
    }
  };

  const setPreviewState = (index, previewUrl) => {
    switch (index) {
      case 1:
        setImagePreview1(previewUrl);
        break;
      case 2:
        setImagePreview2(previewUrl);
        break;
      case 3:
        setImagePreview3(previewUrl);
        break;
      case 4:
        setImagePreview4(previewUrl);
        break;
      case 5:
        setImagePreview5(previewUrl);
        break;
      case 6:
        setImagePreview6(previewUrl);
        break;
      case 7:
        setImagePreview7(previewUrl);
        break;
      case 8:
        setImagePreview8(previewUrl);
        break;
      case 9:
        setImagePreview9(previewUrl);
        break;
      case 10:
        setImagePreview10(previewUrl);
        break;
      case 11:
        setImagePreview11(previewUrl);
        break;
      case 12:
        setImagePreview12(previewUrl);
        break;
      default:
        break;
    }
  };

  const setImageState = (index, imageUrl) => {
    switch (index) {
      case 1:
        setImage1(imageUrl);
        break;
      case 2:
        setImage2(imageUrl);
        break;
      case 3:
        setImage3(imageUrl);
        break;
      case 4:
        setImage4(imageUrl);
        break;
      case 5:
        setImage5(imageUrl);
        break;
      case 6:
        setImage6(imageUrl);
        break;
      case 7:
        setImage7(imageUrl);
        break;
      case 8:
        setImage8(imageUrl);
        break;
      case 9:
        setImage9(imageUrl);
        break;
      case 10:
        setImage10(imageUrl);
        break;
      case 11:
        setImage11(imageUrl);
        break;
      case 12:
        setImage12(imageUrl);
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log(
      "Saved content:",
      heading,
      paragraph1Content,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12
    );
  };

  return (
    <div className="mt-5 paragraph-5">
      <button
        className="btn btn-warning mt-3 float-end"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
      <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
        {isEditing ? (
          <div>
            <label>
              Heading:
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="form-control"
              />
            </label>
            <h5>Paragraph 1:</h5>
            <ReactQuill
              value={paragraph1Content}
              onChange={setParagraph1Content}
            />

            {/* Image Uploads for all 12 images */}
            {Array.from({ length: 12 }, (_, index) => (
              <div key={index}>
                <label className="mt-3">
                  {" "}
                  Change Image (400px x 800px) {index + 1}:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index + 1, e)}
                  className="form-control mt-2"
                />
                {eval(`imagePreview${index + 1}`) && (
                  <div className="mt-3">
                    <strong>Preview {index + 1}:</strong>
                    <img
                      src={eval(`imagePreview${index + 1}`)}
                      alt={`Preview ${index + 1}`}
                      style={{
                        height: "300px",
                        width: "600px",
                        border: "2px solid #ccc",
                        borderRadius: "10px",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                )}
                {eval(`uploading${index + 1}`) && (
                  <p className="text-black mt-2">{`Uploading image ${
                    index + 1
                  }...`}</p>
                )}
              </div>
            ))}

            <button className="btn btn-primary mt-3" onClick={handleSave}>
              Save
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
            <h1
              className="mb-4"
              style={{
                fontSize: "clamp(24px, 5vw, 30px)",
                fontWeight: "bold",
              }}
            >
              {heading}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: paragraph1Content }}
              style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
            ></div>

            <div className="mx-3 mx-lg-5 d-flex justify-content-center position-relative">
              <Carousel
                className=""
                style={{
                  //   height: "400px",
                  width: "800px",
                  padding: "20px",
                }}
                prevIcon={
                  <span
                    className="carousel-control-prev-icon position-absolute"
                    style={{
                      backgroundColor: "#000", // Customize the color
                      right: "200px",
                    }}
                    aria-hidden="true"
                  />
                }
                nextIcon={
                  <span
                    className="carousel-control-next-icon position-absolute"
                    style={{
                      backgroundColor: "#000", // Customize the color
                      left: "200px",
                    }}
                    aria-hidden="true"
                  />
                }
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image5}
                    alt="Fifth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image6}
                    alt="Sixth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image7}
                    alt="Seventh slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image8}
                    alt="Eighth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image9}
                    alt="Ninth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image10}
                    alt="Tenth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image11}
                    alt="Eleventh slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image12}
                    alt="Twelfth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Novajobsus;
