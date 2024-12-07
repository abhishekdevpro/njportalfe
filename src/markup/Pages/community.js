// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import Header2 from "../Layout/Header2";
// import Footer from "../Layout/Footer";
// import Profilesidebar from "../Element/Profilesidebar";
// import FixedHeader from "../Layout/fixedHeader";
// import { Constant } from "../../utils/constant/constant";
// // import { Constant } from "@/utils/constant/constant";

// import { Link } from "react-router-dom";
// // import FeedSection from "./FeedSection";
// import { toast } from "react-toastify";
// import { FaEdit, FaTimes, FaEllipsisV, FaTrash } from "react-icons/fa";
// import {
//   LinkedinShareButton,
//   TwitterShareButton,
//   FacebookShareButton,
//   WhatsappShareButton,
// } from "react-share";

// const LinkedInShareButton = ({ post }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const shareUrl = `https://sentryspotfe.vercel.app/community/${post.id}`;
//   const shareTitle = post.content;

//   const handleCopy = () => {
//     navigator.clipboard.writeText(shareUrl).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   const handleShare = () => {
//     setShowPopup(true);
//     setCopied(false);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };
//   //  console.log(post,"post data");
//   return (
//     <>
//       <button
//         onClick={handleShare}
//         className="text-gray-500 hover:text-green-600 flex items-center"
//       >
//         <i className="fas fa-share mr-2"></i>
//         Share
//       </button>

//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
//             <h2 className="text-xl font-semibold mb-4">Share Post</h2>

//             {/* Social Media Buttons */}
//             <div className="flex flex-wrap gap-4 mb-4">
//               <LinkedinShareButton
//                 url={shareUrl}
//                 title={post.content}
//                 summary={post.content}
//                 className="flex items-center"
//               >
//                 <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
//                   LinkedIn
//                 </button>
//               </LinkedinShareButton>

//               <TwitterShareButton
//                 url={shareUrl}
//                 title={shareTitle}
//                 className="flex items-center"
//               >
//                 <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
//                   Twitter
//                 </button>
//               </TwitterShareButton>

//               <FacebookShareButton
//                 url={shareUrl}
//                 quote={shareTitle}
//                 className="flex items-center"
//               >
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   Facebook
//                 </button>
//               </FacebookShareButton>

//               <WhatsappShareButton
//                 url={shareUrl}
//                 title={shareTitle}
//                 separator=" - "
//                 className="flex items-center"
//               >
//                 <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//                   WhatsApp
//                 </button>
//               </WhatsappShareButton>
//             </div>

//             {/* Copy Link Section */}
//             <div className="flex items-center mb-4">
//               <input
//                 type="text"
//                 readOnly
//                 value={shareUrl}
//                 className="flex-grow p-2 border rounded-l-md bg-gray-100"
//               />
//               <button
//                 onClick={handleCopy}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
//               >
//                 {copied ? "Copied!" : "Copy"}
//               </button>
//             </div>

//             {/* Close Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleClosePopup}
//                 className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// const ConfirmationDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-xl p-6 w-96">
//         <h2 className="text-xl font-bold mb-4">{title}</h2>
//         <p className="mb-6">{message}</p>
//         <div className="flex justify-end space-x-4">
//           <button
//             onClick={onClose}
//             className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// const LikeButton = ({ post }) => {
//   const [localLiked, setLocalLiked] = useState(
//     post.feed_likes && post.feed_likes.id > 0
//   );
//   const [localLikesCount, setLocalLikesCount] = useState(
//     post.feed_likes_count || 0
//   );
//   const token = localStorage.getItem(Constant.USER_TOKEN);

//   // Sync local state with props
//   useEffect(() => {
//     setLocalLiked(post.feed_likes && post.feed_likes.id > 0);
//     setLocalLikesCount(post.feed_likes_count || 0);
//   }, [post]);

//   const toggleLike = async (postId) => {
//     try {
//       // Optimistic UI update
//       const newLikedState = !localLiked;
//       const newLikesCount = newLikedState
//         ? localLikesCount + 1
//         : Math.max(0, localLikesCount - 1);

//       setLocalLiked(newLikedState);
//       setLocalLikesCount(newLikesCount);

//       // Call API based on the new state
//       let response;
//       if (newLikedState) {
//         // Like the post
//         response = await axios.post(
//           `https://api.sentryspot.co.uk/api/feed/feed/like/${postId}`,
//           {},
//           {
//             headers: { Authorization: `${token}` },
//           }
//         );
//         if (response.data.status === "success") {
//           toast.success("Post liked successfully!");
//         } else {
//           throw new Error(response.message || "Failed to like the post.");
//         }
//       } else {
//         // Unlike the post
//         response = await axios.delete(
//           `https://api.sentryspot.co.uk/api/feed/feed/like/${postId}`,
//           {
//             headers: { Authorization: `${token}` },
//           }
//         );
//         if (response.data.status === "success") {
//           toast.success("Post unliked successfully!");
//         } else {
//           throw new Error(response.message || "Failed to unlike the post.");
//         }
//       }
//     } catch (error) {
//       // Rollback UI state on failure
//       setLocalLiked(!localLiked);
//       setLocalLikesCount(localLikesCount);
//       console.error("Error toggling like:", error);
//       toast.error(error.message || "An error occurred while toggling like.");
//     }
//   };

//   return (
//     <button
//       className={`flex items-center ${
//         localLiked ? "text-red-600" : "text-black"
//       } hover:opacity-75`}
//       onClick={() => toggleLike(post.id)}
//     >
//       <i
//         className={`fas fa-heart mr-2 transition-colors ${
//           localLiked ? "text-red-600" : "text-black"
//         }`}
//       ></i>
//       <span>Likes</span>
//     </button>
//   );
// };
// const Community = () => {
//   const [posts, setPosts] = useState([]);
//   const [content, setContent] = useState("");
//   const [isAnonymous, setIsAnonymous] = useState(false);
//   const [image, setImage] = useState(null);
//   const [activeCommentPostId, setActiveCommentPostId] = useState(null);
//   const [commentContent, setCommentContent] = useState("");
//   const [isCommentAnonymous, setIsCommentAnonymous] = useState(false);
//   const [activeSharePostId, setActiveSharePostId] = useState(null);
//   const [showAllComments, setShowAllComments] = useState(false);
//   const [showloginmodal, setloginmodal] = useState(false);
//   const [editingPostId, setEditingPostId] = useState(null);
//   const [editedContent, setEditedContent] = useState("");

//   const token = localStorage.getItem(Constant.USER_TOKEN);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//       console.log("Image URL: ", imageUrl);
//     }
//   };

//   const addPost = async () => {
//     if (!token) {
//       setloginmodal(true);
//       return;
//     }
//     if (content.trim()) {
//       try {
//         // Make the API call to create a new post
//         const response = await axios.post(
//           "https://api.sentryspot.co.uk/api/feed/feed-create",
//           {
//             content: content,
//             // Include any other necessary fields here
//           },
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data && response.data.status === "success") {
//           // Assuming response.data.data contains the new post details
//           const newPost = response.data.data;

//           // Update the posts state with the new post
//           setPosts([newPost, ...posts]);
//           setContent("");
//           setIsAnonymous(false);
//           setImage(null);
//         } else {
//           console.error("Error creating post:", response.data.message);
//         }
//       } catch (error) {
//         console.error("Error creating post:", error);
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.sentryspot.co.uk/api/feed/feeds"
//         );
//         if (response.data && Array.isArray(response.data.data.feed_data)) {
//           setPosts(response.data.data.feed_data);
//         } else {
//           console.error("Unexpected API response:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const addComment = (postId) => {
//     if (!token) {
//       setloginmodal(true);
//       return;
//     }

//     if (!commentContent.trim()) return;

//     axios
//       .post(
//         "https://api.sentryspot.co.uk/api/feed/feed-comment",
//         {
//           feed_id: postId,
//           content: commentContent,
//         },
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json", // Set content type to JSON
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data && response.data.status === "success") {
//           setPosts(
//             posts.map((post) =>
//               post.id === postId
//                 ? {
//                     ...post,
//                     comments: [
//                       ...post.comments,
//                       {
//                         content: commentContent,
//                         anonymous: isCommentAnonymous,
//                       },
//                     ],
//                   }
//                 : post
//             )
//           );
//           setCommentContent("");
//           setIsCommentAnonymous(false);
//           setActiveCommentPostId(null);
//         } else {
//           console.error("Error adding comment:", response.data.message);
//         }
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//       });
//   };

//   const handleCopyLink = (postId) => {
//     navigator.clipboard
//       .writeText(`https://example.com/post/${postId}`)
//       .then(() => alert("Link copied to clipboard"))
//       .catch((err) => console.error("Error copying link:", err));
//   };

//   const sharePost = (postId) => {
//     setActiveSharePostId(activeSharePostId === postId ? null : postId);

//     setCommentContent("");
//   };

//   const handleCancel = () => {
//     setloginmodal(false);
//   };
//   //   const handleLogin = () => {
//   //     setloginmodal(false);
//   //     history.push("/login"); // Redirect to the login page
//   //   };

//   const editPost = (postId, currentContent) => {
//     setEditingPostId(postId);
//     setEditedContent(currentContent);
//   };

//   const saveEditedPost = async (postId) => {
//     if (!token) {
//       setloginmodal(true);
//       return;
//     }
//     if (editedContent.trim()) {
//       try {
//         const response = await axios.put(
//           `https://api.sentryspot.co.uk/api/feed/feed-edit/${postId}`,
//           {
//             content: editedContent,
//           },
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data && response.data.status === "success") {
//           // Update the posts state with the edited post
//           setPosts(
//             posts.map((post) =>
//               post.id === postId ? { ...post, content: editedContent } : post
//             )
//           );
//           setEditingPostId(null);
//           setEditedContent("");
//         } else {
//           console.error("Error editing post:", response.data.message);
//         }
//       } catch (error) {
//         console.error("Error editing post:", error);
//       }
//     }
//   };
//   const FeedSection = ({
//     setLoginModal,
//     token = localStorage.getItem(Constant.USER_TOKEN),
//   }) => {
//     const [posts, setPosts] = useState([]);
//     const [content, setContent] = useState("");
//     const [isAnonymous, setIsAnonymous] = useState(false);
//     const [image, setImage] = useState(null);
//     const [activeCommentPostId, setActiveCommentPostId] = useState(null);
//     const [commentContent, setCommentContent] = useState("");
//     const [isCommentAnonymous, setIsCommentAnonymous] = useState(false);
//     const [activeSharePostId, setActiveSharePostId] = useState(null);
//     const [editingPostId, setEditingPostId] = useState(null);
//     const [editedContent, setEditedContent] = useState("");
//     const [editingCommentId, setEditingCommentId] = useState(null);
//     const [editedCommentContent, setEditedCommentContent] = useState("");
//     const [editingCommentPostId, setEditingCommentPostId] = useState(null);
//     const [openDropdownId, setOpenDropdownId] = useState(null);
//     const [confirmationDialog, setConfirmationDialog] = useState({
//       isOpen: false,
//       type: null, // 'post' or 'comment'
//       id: null,
//       commentId: null,
//     });
//     // ... [keep all previous methods like handleImageUpload, toggleLike, addPost, etc.]

//     const editComment = (commentId, content, postId) => {
//       setEditingCommentId(commentId);
//       setEditedCommentContent(content);
//       setEditingCommentPostId(postId);
//     };
//     const toggleDropdown = (postId) => {
//       setOpenDropdownId((prevId) => (prevId === postId ? null : postId));
//     };

//     const saveEditedComment = async () => {
//       if (!token) {
//         setLoginModal(true);
//         return;
//       }

//       if (editedCommentContent.trim()) {
//         try {
//           const response = await axios.put(
//             `https://api.sentryspot.co.uk/api/feed/feed-comment/${editingCommentId}`,
//             {
//               feed_id: editingCommentPostId,
//               content: editedCommentContent,
//             },
//             {
//               headers: {
//                 Authorization: token,
//                 "Content-Type": "application/json",
//               },
//             }
//           );

//           if (response.data && response.data.status === "success") {
//             // Update the comment in the posts state
//             setPosts(
//               posts.map((post) => {
//                 if (post.id === editingCommentPostId) {
//                   return {
//                     ...post,
//                     feed_comments: post.feed_comments.map((comment) =>
//                       comment.id === editingCommentId
//                         ? { ...comment, content: editedCommentContent }
//                         : comment
//                     ),
//                   };
//                 }
//                 return post;
//               })
//             );

//             // Reset editing states
//             setEditingCommentId(null);
//             setEditedCommentContent("");
//             setEditingCommentPostId(null);
//           } else {
//             console.error("Error editing comment:", response.data.message);
//           }
//         } catch (error) {
//           console.error("Error editing comment:", error);
//         }
//       }
//     };

//     const cancelCommentEdit = () => {
//       setEditingCommentId(null);
//       setEditedCommentContent("");
//       setEditingCommentPostId(null);
//     };

//     // ... [keep all existing methods from the previous implementation]

//     const handleImageUpload = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const imageUrl = URL.createObjectURL(file);
//         setImage(imageUrl);
//       }
//     };

//     const toggleLike = async (postId) => {
//       if (!token) {
//         setLoginModal(true);
//         return;
//       }

//       try {
//         const response = await axios.post(
//           `https://api.sentryspot.co.uk/api/feed/toggle-like/${postId}`,
//           {},
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data && response.data.status === "success") {
//           setPosts(
//             posts.map((post) =>
//               post.id === postId
//                 ? {
//                     ...post,
//                     liked: !post.liked,
//                     likes: post.liked ? post.likes - 1 : post.likes + 1,
//                   }
//                 : post
//             )
//           );
//         } else {
//           console.error("Error toggling like:", response.data.message);
//         }
//       } catch (error) {
//         console.error("Error toggling like:", error);
//       }
//     };

//     const addPost = async () => {
//       if (!token) {
//         setLoginModal(true);
//         return;
//       }
//       if (content.trim()) {
//         try {
//           const formData = new FormData();
//           formData.append("content", content);
//           // formData.append('isAnonymous', isAnonymous);
//           if (image) {
//             const imageBlob = await fetch(image).then((r) => r.blob());
//             formData.append("image_upload", imageBlob, "uploaded-image.jpg");
//           }

//           const response = await axios.post(
//             "https://api.sentryspot.co.uk/api/feed/feed-create",
//             formData,
//             {
//               headers: {
//                 Authorization: token,
//                 "Content-Type": "multipart/form-data",
//               },
//             }
//           );

//           if (response.data && response.data.status === "success") {
//             const newPost = response.data.data;
//             setPosts([newPost, ...posts]);
//             setContent("");
//             setIsAnonymous(false);
//             setImage(null);
//           } else {
//             console.error("Error creating post:", response.data.message);
//           }
//         } catch (error) {
//           console.error("Error creating post:", error);
//         }
//       }
//     };
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.sentryspot.co.uk/api/feed/pro/feeds",
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         if (response.data && Array.isArray(response.data.data.feed_data)) {
//           setPosts(response.data.data.feed_data);
//         } else {
//           console.error("Unexpected API response:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     useEffect(() => {
//       fetchPosts();
//     }, [posts.length]);

//     const addComment = (postId) => {
//       if (!token) {
//         setLoginModal(true);
//         return;
//       }

//       if (!commentContent.trim()) return;

//       axios
//         .post(
//           "https://api.sentryspot.co.uk/api/feed/feed-comment",
//           {
//             feed_id: postId,
//             content: commentContent,
//             //   isAnonymous: isCommentAnonymous
//           },
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         )
//         .then((response) => {
//           if (response.data && response.data.status === "success") {
//             const newComment = {
//               content: commentContent,
//               isAnonymous: isCommentAnonymous,
//             };
//             fetchPosts();
//             setPosts(
//               posts.map((post) =>
//                 post.id === postId
//                   ? {
//                       ...post,
//                       comments: [...(post.comments || []), newComment],
//                     }
//                   : post
//               )
//             );
//             setCommentContent("");
//             setIsCommentAnonymous(false);
//             setActiveCommentPostId(null);
//           } else {
//             console.error("Error adding comment:", response.data.message);
//           }
//         })
//         .catch((error) => {
//           console.error("Error adding comment:", error);
//         });
//     };

//     const handleCopyLink = (postId) => {
//       navigator.clipboard
//         .writeText(`https://example.com/post/${postId}`)
//         .then(() => alert("Link copied to clipboard"))
//         .catch((err) => console.error("Error copying link:", err));
//     };

//     const sharePost = (postId) => {
//       setActiveSharePostId(activeSharePostId === postId ? null : postId);
//       setCommentContent("");
//     };

//     const editPost = (postId, currentContent) => {
//       setEditingPostId(postId);
//       setEditedContent(currentContent);
//     };

//     const deletePost = async () => {
//       const { type, id, commentId } = confirmationDialog;

//       try {
//         let endpoint;

//         // Set the endpoint based on whether a comment is being deleted
//         if (commentId) {
//           endpoint = `https://api.sentryspot.co.uk/api/feed/feed/comment/${id}/${commentId}`;
//         } else {
//           endpoint = `https://api.sentryspot.co.uk/api/feed/feed/${id}`;
//         }

//         // Send the DELETE request
//         const response = await axios.delete(endpoint, {
//           headers: {
//             Authorization: `${token}`,
//           },
//         });

//         // Check for a successful response
//         if (response.data && response.data.status === "success") {
//           fetchPosts();
//           if (commentId) {
//             // Remove specific comment from the post
//             setPosts((prevPosts) =>
//               prevPosts.map((post) =>
//                 post.id === id
//                   ? {
//                       ...post,
//                       feed_comments: post.feed_comments.filter(
//                         (comment) => comment.id !== commentId
//                       ),
//                     }
//                   : post
//               )
//             );
//           } else {
//             // Remove entire post
//             setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
//           }

//           // Close confirmation dialog
//           setConfirmationDialog({
//             isOpen: false,
//             type: null,
//             id: null,
//             commentId: null,
//           });
//         } else {
//           console.error("Error deleting:", response.data.message);
//         }
//       } catch (error) {
//         console.error("Error deleting:", error);
//         // alert("There was an error deleting the post or comment.");
//       }
//     };

//     // Method to initiate delete confirmation for a post
//     // const confirmDeletePost = (postId) => {
//     //   setConfirmationDialog({
//     //     isOpen: true,
//     //     type: "post",
//     //     id: postId,
//     //     commentId: null,
//     //   });
//     // };
//     const confirmDeletePost = (postId) => {
//       console.log("Confirm Delete Post:", postId);
//       setConfirmationDialog({
//         isOpen: true,
//         type: "post",
//         id: postId,
//         commentId: null,
//       });
//       console.log("Confirmation Dialog State:", confirmationDialog);
//     };
//     // Method to initiate delete confirmation for a comment
//     const confirmDeleteComment = (postId, commentId) => {
//       setConfirmationDialog({
//         isOpen: true,
//         type: "comment",
//         id: postId,
//         commentId: commentId,
//       });
//     };

//     // Close confirmation dialog
//     const closeConfirmationDialog = () => {
//       setConfirmationDialog({
//         isOpen: false,
//         type: null,
//         id: null,
//         commentId: null,
//       });
//     };

//     const saveEditedPost = async (postId) => {
//       if (!token) {
//         setLoginModal(true);
//         return;
//       }
//       if (editedContent.trim()) {
//         try {
//           const response = await axios.put(
//             `https://api.sentryspot.co.uk/api/feed/feed-edit/${postId}`,
//             { content: editedContent },
//             {
//               headers: {
//                 Authorization: token,
//                 "Content-Type": "application/json",
//               },
//             }
//           );

//           if (response.data && response.data.status === "success") {
//             setPosts(
//               posts.map((post) =>
//                 post.id === postId ? { ...post, content: editedContent } : post
//               )
//             );
//             setEditingPostId(null);
//             setEditedContent("");
//           } else {
//             console.error("Error editing post:", response.data.message);
//           }
//         } catch (error) {
//           console.error("Error editing post:", error);
//         }
//       }
//     };

//     const toggleShowComments = (postId) => {
//       setPosts(
//         posts.map((post) =>
//           post.id === postId
//             ? { ...post, showAllComments: !post.showAllComments }
//             : post
//         )
//       );
//     };
//     return (
//       <>
//         <div className="max-w-xl mx-auto px-4 py-6 bg-gray-50">
//           {/* Post Creation Section */}
//           <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-t-4 border-blue-900">
//             <textarea
//               className="w-full p-3 text-lg text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               placeholder="Ask anything (even anonymously)..."
//             />

//             <div className="mt-4 flex justify-between items-center">
//               <div className="flex items-center space-x-4">
//                 <label
//                   htmlFor="file-upload"
//                   className="flex items-center cursor-pointer text-blue-600 hover:text-blue-800 transition-colors"
//                 >
//                   <i className="fas fa-camera mr-2"></i>
//                   <span className="text-sm">Upload Image</span>
//                   <input
//                     type="file"
//                     id="file-upload"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="hidden"
//                   />
//                 </label>

//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="anonymous"
//                     checked={isAnonymous}
//                     onChange={(e) => setIsAnonymous(e.target.checked)}
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor="anonymous"
//                     className="flex items-center cursor-pointer text-gray-700 hover:text-blue-900"
//                   >
//                     <span
//                       className={`w-5 h-5 mr-2 border rounded ${
//                         isAnonymous
//                           ? "bg-blue-900 border-blue-900"
//                           : "border-gray-300"
//                       }`}
//                     >
//                       {isAnonymous && (
//                         <i className="fas fa-check text-white text-xs"></i>
//                       )}
//                     </span>
//                     Anonymous Post
//                   </label>
//                 </div>
//               </div>

//               <button
//                 onClick={addPost}
//                 className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
//               >
//                 Post
//               </button>
//             </div>

//             {image && (
//               <div className="mt-4 relative ">
//                 <img
//                   src={image}
//                   alt="Uploaded"
//                   className="max-w-full h-auto rounded-md shadow-sm"
//                 />
//                 <button
//                   onClick={() => setImage(null)}
//                   className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//                 >
//                   <FaTimes />
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Posts Section */}
//           <div className="space-y-4">
//             {posts.length === 0 ? (
//               <div className="text-center text-gray-500 py-8 bg-white rounded-lg shadow-md">
//                 No posts available. Be the first to post!
//               </div>
//             ) : (
//               posts.map((post) => (
//                 <div
//                   key={post.id}
//                   className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow "
//                 >
//                   {/* Post Header */}
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex">
//                       <img
//                         src={
//                           post.user_photo
//                             ? `https://api.sentryspot.co.uk/${post.user_photo}`
//                             : "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
//                         }
//                         alt="Profile"
//                         className="w-10 h-10 rounded-full mr-3 object-cover "
//                       />
//                       <div>
//                         <div className="flex flex-col ">
//                           <Link to={`/community/${post.id}`}>
//                             <p className="font-semibold text-gray-800">
//                               {post.user_first_name} {post.user_last_name}
//                             </p>
//                           </Link>
//                           <p className="text-xs text-gray-500">
//                             {new Date(post.created_at).toLocaleDateString()}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Edit Button */}

//                     <div className="relative">
//                       {/* Three Dots Icon */}
//                       <button
//                         onClick={() => toggleDropdown(post.id)}
//                         className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
//                       >
//                         <FaEllipsisV />
//                       </button>

//                       {/* Dropdown Menu */}
//                       {openDropdownId === post.id && (
//                         <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
//                           {post.is_edit && editingPostId !== post.id && (
//                             <button
//                               onClick={() => {
//                                 editPost(post.id, post.content);
//                                 setOpenDropdownId(null); // Close dropdown
//                               }}
//                               className="flex items-center px-4 py-2 w-full text-left text-blue-600 hover:bg-blue-100"
//                             >
//                               <FaEdit className="mr-2" /> Edit
//                             </button>
//                           )}
//                           <button
//                             onClick={() => {
//                               confirmDeletePost(post.id);
//                               setOpenDropdownId(null); // Close dropdown
//                             }}
//                             className="flex items-center px-4 py-2 w-full text-left text-red-600 hover:bg-red-100"
//                           >
//                             <FaTrash className="mr-2" /> Delete
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Post Content */}
//                   {editingPostId === post.id ? (
//                     <div className="mb-4">
//                       <textarea
//                         className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
//                         value={editedContent}
//                         onChange={(e) => setEditedContent(e.target.value)}
//                       />
//                       <div className="flex justify-end space-x-2 mt-2">
//                         <button
//                           onClick={() => setEditingPostId(null)}
//                           className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           onClick={() => saveEditedPost(post.id)}
//                           className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
//                         >
//                           Save
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <p className="text-gray-700 mb-4 whitespace-pre-wrap">
//                       {post.content}
//                     </p>
//                   )}

//                   {/* Post Image */}
//                   {post.feed_image && (
//                     <img
//                       src={`https://api.sentryspot.co.uk${post.feed_image}`}
//                       alt="Post"
//                       className="w-full rounded-md mb-4 object-cover max-h-96 "
//                     />
//                   )}

//                   {/* Post Actions */}
//                   <div className="flex items-center justify-between p-2">
//                     {/* <button
//                   className={`flex items-center ${
//                     post.liked
//                       ? "text-pink-600 hover:text-pink-700"
//                       : "text-gray-500 hover:text-gray-700"
//                   }`}
//                   onClick={() => toggleLike(post.id)}
//                 >
//                   <i className="fas fa-heart mr-2"></i>
//                   <span>{post.likes} Likes</span>
//                 </button> */}
//                     <LikeButton post={post} />

//                     <button
//                       className="text-gray-500 hover:text-blue-600 flex items-center"
//                       onClick={() =>
//                         setActiveCommentPostId(
//                           activeCommentPostId === post.id ? null : post.id
//                         )
//                       }
//                     >
//                       <i className="fas fa-comment mr-2"></i>
//                       Comment
//                     </button>

//                     {/* <button
//                   className="text-gray-500 hover:text-green-600 flex items-center"
//                   onClick={() => sharePost(post.id)}
//                 >
//                   <i className="fas fa-share mr-2"></i>
//                   Share
//                 </button> */}
//                     <LinkedInShareButton post={post} />
//                   </div>

//                   {/* Comments Section */}
//                   {activeCommentPostId === post.id && (
//                     <div className="mt-6">
//                       <div className="bg-gray-50 rounded-lg p-4 mb-4">
//                         <textarea
//                           className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
//                           value={commentContent}
//                           onChange={(e) => setCommentContent(e.target.value)}
//                           placeholder="Join the conversation..."
//                         />
//                         <div className="flex justify-between items-center mt-4">
//                           <div className="flex items-center">
//                             <input
//                               type="checkbox"
//                               id={`comment-anonymous-${post.id}`}
//                               checked={isCommentAnonymous}
//                               onChange={(e) =>
//                                 setIsCommentAnonymous(e.target.checked)
//                               }
//                               className="hidden"
//                             />
//                             <label
//                               htmlFor={`comment-anonymous-${post.id}`}
//                               className="flex items-center cursor-pointer text-gray-700"
//                             >
//                               <span
//                                 className={`w-5 h-5 mr-2 border rounded ${
//                                   isCommentAnonymous
//                                     ? "bg-blue-900 border-blue-900"
//                                     : "border-gray-300"
//                                 }`}
//                               >
//                                 {isCommentAnonymous && (
//                                   <i className="fas fa-check text-white text-xs"></i>
//                                 )}
//                               </span>
//                               Comment Anonymously
//                             </label>
//                           </div>
//                           <button
//                             onClick={() => addComment(post.id)}
//                             className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
//                           >
//                             Post Comment
//                           </button>
//                         </div>
//                       </div>

//                       {/* Comment List */}
//                       {post.feed_comments && post.feed_comments.length > 0 && (
//                         <div className="space-y-3">
//                           {/* {post.feed_comments.map((comment, index) => (
//                         <div key={index} className="bg-gray-100 p-3 rounded-lg flex items-start">
//                           <img
//                             src={
//                               comment.isAnonymous
//                                 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTiGG5lX9viMNkyHJL-13qWwWJgQUI-LxSg&s"
//                                 : "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/149197250/original/e91f8ca9de6e762865d3c20959e544f07bb760cc/create-a-simple-professional-profile-picture-for-you.png"
//                             }
//                             alt="Profile"
//                             className="w-8 h-8 rounded-full mr-3 mt-1 object-cover"
//                           />
//                           <div>
//                             <p className="font-semibold text-sm text-gray-800">
//                               {comment.isAnonymous ? "Anonymous" : "User"}
//                             </p>
//                             <p className="text-gray-700 text-sm">{comment.content}</p>
//                             {/* Edit Button for Comments
//                             {comment.is_edit && (
//                               <button
//                                 onClick={() => editComment(comment.id, comment.content)}
//                                 className="text-blue-600 hover:text-blue-800 text-sm ml-2"
//                               >
//                                 Edit
//                               </button>
//                             )}

//                           </div>
//                         </div>
//                       ))} */}
//                           {post.feed_comments &&
//                             post.feed_comments.length > 0 && (
//                               <div className="space-y-3">
//                                 {post.feed_comments.map((comment, index) => (
//                                   <div
//                                     key={index}
//                                     className="bg-white p-3 rounded-lg flex items-start "
//                                   >
//                                     <img
//                                       src={
//                                         comment.isAnonymous
//                                           ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTiGG5lX9viMNkyHJL-13qWwWJgQUI-LxSg&s"
//                                           : "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/149197250/original/e91f8ca9de6e762865d3c20959e544f07bb760cc/create-a-simple-professional-profile-picture-for-you.png"
//                                       }
//                                       alt="Profile"
//                                       className="w-8 h-8 rounded-full mr-3 mt-1 object-cover"
//                                     />
//                                     {editingCommentId === comment.id ? (
//                                       <div className="flex-grow">
//                                         <textarea
//                                           className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
//                                           value={editedCommentContent}
//                                           onChange={(e) =>
//                                             setEditedCommentContent(
//                                               e.target.value
//                                             )
//                                           }
//                                         />
//                                         <div className="flex justify-end space-x-2 mt-2">
//                                           <button
//                                             onClick={cancelCommentEdit}
//                                             className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
//                                           >
//                                             Cancel
//                                           </button>
//                                           <button
//                                             onClick={saveEditedComment}
//                                             className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
//                                           >
//                                             Save
//                                           </button>
//                                         </div>
//                                       </div>
//                                     ) : (
//                                       <div className="flex justify-between items-center w-full ">
//                                         <div className="flex flex-col ">
//                                           <p className="font-semibold text-sm text-gray-800">
//                                             {comment.isAnonymous
//                                               ? "Anonymous"
//                                               : "User"}
//                                           </p>
//                                           <p className="text-gray-700 text-sm">
//                                             {comment.content}
//                                           </p>
//                                         </div>
//                                         {/* Edit Button for Comments */}
//                                         {/* {comment.is_edit && (
//                         <button
//                           onClick={() => editComment(comment.id, comment.content, post.id)}
//                           className="text-blue-600 hover:text-blue-800 text-sm mt-1 flex items-center"
//                         >
//                           <FaEdit className="mr-2" />
//                         </button>
//                       )} */}
//                                         <div className="relative">
//                                           {/* Three Dots Icon */}
//                                           <button
//                                             onClick={() =>
//                                               toggleDropdown(comment.id)
//                                             }
//                                             className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
//                                           >
//                                             <FaEllipsisV />
//                                           </button>

//                                           {/* Dropdown Menu */}
//                                           {openDropdownId === comment.id && (
//                                             <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
//                                               {comment.is_edit &&
//                                                 editingCommentId !==
//                                                   comment.id && (
//                                                   <button
//                                                     onClick={() => {
//                                                       editComment(
//                                                         comment.id,
//                                                         comment.content,
//                                                         post.id
//                                                       );
//                                                       setOpenDropdownId(null); // Close dropdown
//                                                     }}
//                                                     className="flex items-center px-4 py-2 w-full text-left text-blue-600 hover:bg-blue-100"
//                                                   >
//                                                     <FaEdit className="mr-2" />{" "}
//                                                     Edit
//                                                   </button>
//                                                 )}
//                                               <button
//                                                 onClick={() => {
//                                                   confirmDeleteComment(
//                                                     post.id,
//                                                     comment.id
//                                                   );
//                                                   setOpenDropdownId(null); // Close dropdown
//                                                 }}
//                                                 className="flex items-center px-4 py-2 w-full text-left text-red-600 hover:bg-red-100"
//                                               >
//                                                 <FaTrash className="mr-2" />{" "}
//                                                 Delete
//                                               </button>
//                                             </div>
//                                           )}
//                                         </div>
//                                       </div>
//                                     )}
//                                   </div>
//                                 ))}
//                                 <ConfirmationDialog
//                                   isOpen={confirmationDialog.isOpen}
//                                   onClose={closeConfirmationDialog}
//                                   onConfirm={deletePost}
//                                   title={
//                                     confirmationDialog.type === "post"
//                                       ? "Delete Post"
//                                       : "Delete Comment"
//                                   }
//                                   message={
//                                     confirmationDialog.type === "post"
//                                       ? "Are you sure you want to delete this post? This action cannot be undone."
//                                       : "Are you sure you want to delete this comment? This action cannot be undone."
//                                   }
//                                 />
//                               </div>
//                             )}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </>
//     );
//   };
//   return (
//     <>
//       <Header2 />
//       {/* <FixedHeader /> */}

//       <div className="page-content bg-white">
//         <div className="content-block">
//           <div className="section-full bg-white p-t50 p-b20">
//             <div className="container">
//               <div className="row">
//                 {/* <Profilesidebar data={"community"} /> */}
//                 <div className="col-xl-9 col-lg-8 m-b30">
//                   <section className="ls-section bg-stone-200">
//                     <div className="auto-container">
//                       <div className="row">
//                         <div
//                           className="offcanvas offcanvas-start"
//                           tabIndex="-1"
//                           id="filter-sidebar"
//                           aria-labelledby="offcanvasLabel"
//                         >
//                           <div className="filters-column hide-left">
//                             <div className=" pd-right ">
//                               <div className="filters-outer text-center">
//                                 <div className="flex-row flex justify-center">
//                                   <img
//                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
//                                     className="rounded-full w-28 h-28"
//                                     alt=""
//                                   />
//                                 </div>

//                                 <h4 className="m-3">Ben Dexter</h4>
//                               </div>
//                               <div className="filters-outer text-center bg-">
//                                 <div className="flex-row flex justify-center">
//                                   <img
//                                     src="https://w7.pngwing.com/pngs/352/661/png-transparent-flowers-bouquet-watercolor-flowers-flower-clip-art-thumbnail.png"
//                                     className="rounded-full w-28 h-28"
//                                     alt=""
//                                   />
//                                 </div>

//                                 <h6 className="m-3">YOUR GROUPS</h6>
//                                 <p className="text-xs my-2">
//                                   Discover and join groups with like-minded
//                                   women who share your interests, profession,
//                                   and lifestyle.
//                                 </p>
//                                 <button className="my-2 text-blue-950">
//                                   Explore
//                                 </button>
//                               </div>
//                               <div className="filters-outer text-center">
//                                 <div className="flex-row flex justify-center">
//                                   <img
//                                     src="https://www.shutterstock.com/image-vector/3d-illustration-abstract-modern-urban-600nw-2345134001.jpg"
//                                     className="rounded-full w-28 h-28"
//                                     alt=""
//                                   />
//                                 </div>

//                                 <h6 className="m-3">COMPANIES YOU FOLLOW</h6>
//                                 <p className="text-xs my-2">
//                                   Get alerted when there are new employee
//                                   reviews.
//                                 </p>
//                                 <button className="my-2 text-blue-950">
//                                   Explore
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="filters-column hidden-1023 w-1/5 col-md-8 col-sm-8 ms-20">
//                           {/* <FilterSidebar /> */}
//                           <div className=" pd-right ">
//                             <div className="filters-outer text-center">
//                               <div className="flex-row flex justify-center">
//                                 <img
//                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
//                                   className="rounded-full w-28 h-28"
//                                   alt=""
//                                 />
//                               </div>

//                               <h4 className="m-3">Ben Dexter</h4>
//                             </div>
//                             <div className="filters-outer text-center bg-">
//                               <div className="flex-row flex justify-center">
//                                 <img
//                                   src="https://w7.pngwing.com/pngs/352/661/png-transparent-flowers-bouquet-watercolor-flowers-flower-clip-art-thumbnail.png"
//                                   className="rounded-full w-28 h-28"
//                                   alt=""
//                                 />
//                               </div>

//                               <h6 className="m-3">YOUR GROUPS</h6>
//                               <p className="text-xs my-2">
//                                 Discover and join groups with like-minded women
//                                 who share your interests, profession, and
//                                 lifestyle.
//                               </p>
//                               <button className="my-2 text-blue-950">
//                                 Explore
//                               </button>
//                             </div>
//                             <div className="filters-outer text-center">
//                               <div className="flex-row flex justify-center">
//                                 <img
//                                   src="https://www.shutterstock.com/image-vector/3d-illustration-abstract-modern-urban-600nw-2345134001.jpg"
//                                   className="rounded-full w-28 h-28"
//                                   alt=""
//                                 />
//                               </div>

//                               <h6 className="m-3">COMPANIES YOU FOLLOW</h6>
//                               <p className="text-xs my-2">
//                                 Get alerted when there are new employee reviews.
//                               </p>
//                               <button className="my-2 text-blue-950">
//                                 Explore
//                               </button>
//                             </div>
//                           </div>
//                         </div>

//                         {/* <FeedSection /> */}

//                         <div className="filters-column hidden-1023 w-1/4 col-md-8 col-sm-8">
//                           <div className=" pd-right ">
//                             <div className="filters-outer text-center">
//                               <h4 className="">Personalize your jobs </h4>
//                               <div className="flex-row flex justify-center">
//                                 <img
//                                   src="https://img.freepik.com/premium-vector/people-talking-discussing-together-vector-young-man-woman-people-talking-have-funny-discussion-planning-togetherness-characters-boy-girl-communication-flat-cartoon-illustration_87720-5022.jpg"
//                                   className="rounded-full w-36 h-40 "
//                                   alt=""
//                                 />
//                               </div>

//                               <p className="text-xs my-2">
//                                 Get recommendations for recent and relevant
//                                 jobs.
//                               </p>
//                               <button className="py-1 px-4 m-3 bg-blue-950 text-white">
//                                 Get Started
//                               </button>
//                             </div>
//                             <div className="filters-outer text-center bg-">
//                               <div className="flex-row flex justify-center">
//                                 <img
//                                   src="https://w7.pngwing.com/pngs/352/661/png-transparent-flowers-bouquet-watercolor-flowers-flower-clip-art-thumbnail.png"
//                                   className="rounded-full w-28 h-28"
//                                   alt=""
//                                 />
//                               </div>

//                               <h6 className="m-3">YOUR GROUPS</h6>
//                               <p className="text-xs my-2">
//                                 Discover and join groups with like-minded women
//                                 who share your interests, profession, and
//                                 lifestyle.
//                               </p>
//                               <button className="my-2 text-blue-950">
//                                 Explore
//                               </button>
//                             </div>
//                             <div className="filters-outer text-center">
//                               <div className="flex-row flex justify-center">
//                                 <img
//                                   src="https://www.shutterstock.com/image-vector/3d-illustration-abstract-modern-urban-600nw-2345134001.jpg"
//                                   className="rounded-full w-28 h-28"
//                                   alt=""
//                                 />
//                               </div>

//                               <h6 className="m-3">COMPANIES YOU FOLLOW</h6>
//                               <p className="text-xs my-2">
//                                 Get alerted when there are new employee reviews.
//                               </p>
//                               <button className="my-2 text-blue-950">
//                                 Explore
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Community;

import React from "react";

import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";

import FixedHeader from "../Layout/fixedHeader";
import Profilesidebar from "../Element/Profilesidebar";

function Community() {
  return (
    <>
      <Header2 />
      <FixedHeader />

      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <Profilesidebar data={"community"} />
                <div className="col-xl-9 col-lg-8 m-b30">
                  <h5>Note:Scheduled to be Live on December 9th 2024</h5>
                  <div className="mt-4">
                    <img src="/community.png" alt="community" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Community;
