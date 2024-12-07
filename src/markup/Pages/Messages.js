// import React, { useEffect, useState } from "react";
// import Header from "./../Layout/Header";
// import Footer from "../Layout/Footer";
// import "../../css/Profile.css";
// import { Link } from "react-router-dom";
// import { socket } from "../../socket/Socket";

// function Messages() {
//   useEffect(() => {
//     function onConnect() {
//       console.log("connected");
//     }

//     function onDisconnect() {
//       console.log("disconnected");
//     }

//     socket.on("connect", onConnect);
//     socket.on("disconnect", onDisconnect);

//     return () => {
//       socket.off("connect", onConnect);
//       socket.off("disconnect", onDisconnect);
//     };
//   }, []);

//   const [conversations, setConversations] = useState([
//     {
//       id: 1,
//       name: "Sandeep Kumar",
//       messages: [
//         { text: "Hello Anita Chouhan,", isUser: false },
//         { text: "I am representing Spring Edge...", isUser: false },
//         // Add more messages here
//       ],
//     },
//     {
//       id: 2,
//       name: "A Kumar",
//       messages: [
//         { text: "Hello Anita Chouhan,", isUser: false },
//         { text: "I am representing ....", isUser: false },
//         // Add more messages here
//       ],
//     },
//     {
//       id: 3,
//       name: "B Kumar",
//       messages: [
//         { text: "Hello Anita Chouhan,", isUser: false },
//         { text: "I am representing ....", isUser: false },
//         // Add more messages here
//       ],
//     },
//     {
//       id: 4,
//       name: "C Kumar",
//       messages: [
//         { text: "Hello Anita Chouhan,", isUser: false },
//         { text: "I am representing ....", isUser: false },
//         // Add more messages here
//       ],
//     },
//     {
//       id: 5,
//       name: "D Kumar",
//       messages: [
//         { text: "Hello Anita Chouhan,", isUser: false },
//         { text: "I am representing ....", isUser: false },
//         // Add more messages here
//       ],
//     },
//   ]);
//   const [currentConversation, setCurrentConversation] = useState(1);
//   const [inputText, setInputText] = useState("");

//   const handleSendMessage = () => {
//     if (inputText.trim() !== "") {
//       const updatedConversations = conversations.map((conversation) => {
//         if (conversation.id === currentConversation) {
//           return {
//             ...conversation,
//             messages: [
//               ...conversation.messages,
//               { text: inputText, isUser: true },
//             ],
//           };
//         }
//         return conversation;
//       });
//       setConversations(updatedConversations);
//       setInputText("");
//     }
//   };

//   const currentConversationName = conversations.find(
//     (conv) => conv.id === currentConversation
//   )?.name;

//   const lastMessage = conversations
//     .find((conv) => conv.id === currentConversation)
//     ?.messages.slice(-1)[0]?.text;

//   return (
//     <>
//       <Header />
//       <div className="page-content bg-white">
//         <div className="content-block">
//           <div className="section-full bg-white p-t50 p-b20">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-9">
//                   <div className="row">
//                     <div className="col-xl-4 col-lg-5 m-b30">
//                       <div className="candidate-info company-info">
//                         <div
//                           className="candidate-detail "
//                           style={{ padding: "15px 0px" }}>
//                           <div className="candidate-title mt-0">
//                             <div className="pl-3">
//                               <h4>Messaging</h4>
//                             </div>

//                             <ul className="job-list-container">
//                               {conversations.map((conversation) => (
//                                 <li key={conversation.id}>
//                                   <Link
//                                     to={"#"}
//                                     className={`conversation-item ${
//                                       conversation.id === currentConversation
//                                         ? "active"
//                                         : ""
//                                     }`}
//                                     onClick={() =>
//                                       setCurrentConversation(conversation.id)
//                                     }>
//                                     <h6 className="mb-0">
//                                       {" "}
//                                       <i
//                                         className="fa fa-user-o"
//                                         aria-hidden="true"></i>{" "}
//                                       {conversation.name}
//                                     </h6>
//                                     <p className="mb-0 ml-3">
//                                       {" "}
//                                       {conversation.messages.slice(-1)[0]?.text}
//                                     </p>
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-xl-8 col-lg-7 m-b30">
//                       <div className="chatbox" style={{ paddingTop: "240px" }}>
//                         <div>
//                           <div className="chatbox-header">
//                             <h5>{currentConversationName}</h5>
//                           </div>
//                           {conversations.map((conversation) => (
//                             <div
//                               key={conversation.id}
//                               className={`chat ${
//                                 conversation.id === currentConversation
//                                   ? "active"
//                                   : ""
//                               }`}>
//                               {conversation.messages.map((message, index) => (
//                                 <div
//                                   key={index}
//                                   className={`message ${
//                                     message.isUser
//                                       ? "user-message"
//                                       : "bot-message"
//                                   }`}>
//                                   {message.isUser ? (
//                                     <div className="user-name">you</div>
//                                   ) : (
//                                     <div className="bot-name">
//                                       {message.isUser
//                                         ? currentConversationName
//                                         : conversation.name}
//                                     </div>
//                                   )}
//                                   <div className="message-text">
//                                     {message.text}
//                                   </div>
//                                 </div>
//                               ))}
//                               <div className="message-input">
//                                 <input
//                                   type="text"
//                                   value={inputText}
//                                   onChange={(e) => setInputText(e.target.value)}
//                                   placeholder="Type your message..."
//                                 />
//                                 <button
//                                   onClick={handleSendMessage}
//                                   className="site-button">
//                                   Send
//                                 </button>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3">
//                   <div className="profile-summary">
//                     <div className="p-content">
//                       <div className="profile-card">
//                         <img
//                           src="/static/media/pic1.63e5cf4e.jpg"
//                           alt="Profile"
//                           className="cover-picture"
//                           style={{ height: "100px" }}
//                         />
//                         <img
//                           src="/static/media/pic1.63e5cf4e.jpg"
//                           alt="Profile"
//                           className="profile-picture"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             marginTop: "-45px",
//                             borderRadius: "10px",
//                           }}
//                         />
//                       </div>
//                       <div style={{ padding: "10px 30px" }}>
//                         <h6 className="mb-0">State Bank of India</h6>

//                         <p>
//                           LinkedIn Member, grow your career by following State
//                           Bank of India
//                         </p>
//                         <p
//                           className="mb-0"
//                           style={{
//                             color: "#1c2957",
//                             fontSize: "13px",
//                             lineHeight: "20px",
//                           }}>
//                           Keep up with interesting, relevant update
//                         </p>
//                         <div className="job-time m-t15 m-b10 text-center">
//                           <a className="mr-1 " href="#">
//                             <span
//                               style={{
//                                 padding: "5px 20px",
//                                 borderRadius: "100px",
//                                 width: "200px",
//                               }}>
//                               {" "}
//                               Follow
//                             </span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Messages;






// import LoginPopup from "../../../common/form/login/LoginPopup";

// import MenuToggler from "../../MenuToggler";
// import Header2 from "./../Layout/Header2";
// import FixedHeader from "../Layout/fixedHeader";
// import { useSelector } from "react-redux";
// import Profilesidebar from "../Element/Profilesidebar";
// import Footer from "./../Layout/Footer";
// import React, { useEffect, useState } from "react";
// import { FaTelegram, FaUserCircle } from "react-icons/fa";
// const Messages = () => {
// //   const { chatSidebar } = useSelector((state) => state.toggle);
//   const [socket, setSocket] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [activeChat, setActiveChat] = useState(15);
//   const [contacts, setContacts] = useState([
//     {
//       id: 15,
//       name: "John Snow",
//       avatar: "https://avatar.iran.liara.run/public/boy?username=Ash",
//       lastMessage: "Hello, how are you?",
//       time: "4:30 PM",
//       unreadCount: 3,
//     },
//     {
//       id: 16,
//       name: "Emma Watson",
//       avatar: "https://avatar.iran.liara.run/public/girl?username=Emma",
//       lastMessage: "See you later",
//       time: "3:45 PM",
//       unreadCount: 1,
//     },
//   ]);

//   useEffect(() => {
//     const ws = new WebSocket("wss://api.sentryspot.co.uk/ws");

//     ws.onopen = () => {
//       console.log("WebSocket connection opened");
//     };

//     ws.onmessage = (event) => {
//       const incomingMessage = JSON.parse(event.data);
//       console.log("Message received:", incomingMessage);

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           content: incomingMessage.message,
//           time: incomingMessage.timestamp || new Date().toLocaleTimeString(),
//           sender: incomingMessage.sender || "John",
//         },
//       ]);
//     };

//     ws.onerror = (error) => {
//       console.error("WebSocket error:", error);
//     };

//     ws.onclose = () => {
//       console.log("WebSocket connection closed");
//     };

//     setSocket(ws);

//     return () => {
//       ws.close();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (inputValue.trim() === "") return;

//     const data = {
//       message: inputValue,
//       receiver_id: activeChat,
//       sender_id: 29,
//     };

//     if (socket && socket.readyState === WebSocket.OPEN) {
//       socket.send(JSON.stringify(data));
//       console.log("Message sent:", data);
//       setInputValue("");
//     } else {
//       console.error("WebSocket is not open");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       sendMessage();
//     }
//   };

//   return (
//     <>
//       <Header2 />
//       <FixedHeader />

//       <div className="page-content bg-white">
//         <div className="content-block">
//           <div className="section-full bg-white p-t50 p-b20">
//             <div className="container">
//               <div className="row">
//                 <Profilesidebar data={"messages"} />
//                 {/* <LoginPopup /> */}
//                 <div className="col-xl-9 col-lg-8 m-b30">
//                   <div className="job-bx-title  clearfix">
//                     <h5 className="font-weight-700 pull-left text-uppercase">
//                       Messages!
//                     </h5>
//                   </div>

//                   {/* <!-- Dashboard --> */}
//                   <section className="user-dashboard">
//                     <div className="dashboard-outer">
//                       {/* <MenuToggler /> */}

//                       <div className="row">
//                         <div
//                         //   className={`col-lg-12 ${
//                         //     chatSidebar ? "active-chat-contacts" : ""
//                         //   }`}
//                         className="col-lg-12"
//                         >
//                           <div className="chat-widget">
//                             <div className="widget-content">
//                               <div className="row">
//                                 <div className=" ">
//                                   <div className="d-flex flex h-screen bg-blue-50">
//                                     {/* Contacts Sidebar */}
//                                     <div className="w-80 bg-white border-r border-blue-100 shadow-lg">
//                                       <div className="search-box-one p-2">
//                                         <form method="post" action="#">
//                                           <div className="form-group">
//                                             <span className="icon flaticon-search-1"></span>
//                                             <input
//                                               type="search"
//                                               name="search-field"
//                                               placeholder="Search"
//                                               required=""
//                                             />
//                                           </div>
//                                         </form>
//                                       </div>
//                                       <ul className="contacts">
//                                         <li>
//                                           <a href="#">
//                                             <div className="d-flex bd-highlight">
//                                               <div className="img_cont">
//                                                 <img
//                                                   src="/images/resource/candidate-1.png"
//                                                   className="rounded-circle user_img"
//                                                   alt="chatbox avatar"
//                                                 />
//                                               </div>
//                                               <div className="user_info">
//                                                 <span>Darlene Robertson</span>
//                                                 <p> Head of Development</p>
//                                               </div>
//                                               <span className="info">
//                                                 35 mins
//                                               </span>
//                                             </div>
//                                           </a>
//                                         </li>
//                                         {/* End single Contact List */}

//                                         <li>
//                                           <a href="#">
//                                             <div className="d-flex bd-highlight">
//                                               <div className="img_cont">
//                                                 <img
//                                                   src="/images/resource/candidate-2.png"
//                                                   className="rounded-circle user_img"
//                                                   alt="chatbox avatar"
//                                                 />
//                                               </div>
//                                               <div className="user_info">
//                                                 <span>Jane Cooper</span>
//                                                 <p>Head of Development</p>
//                                               </div>
//                                               <span className="info">
//                                                 35 mins{" "}
//                                                 <span className="count">2</span>
//                                               </span>
//                                             </div>
//                                           </a>
//                                         </li>
//                                         {/* End single Contact List */}

//                                         <li>
//                                           <a href="#">
//                                             <div className="d-flex bd-highlight">
//                                               <div className="img_cont">
//                                                 <img
//                                                   src="/images/resource/candidate-3.png"
//                                                   className="rounded-circle user_img"
//                                                   alt="chatbox avatar"
//                                                 />
//                                               </div>
//                                               <div className="user_info">
//                                                 <span>Arlene McCoy</span>
//                                                 <p>Head of Development</p>
//                                               </div>
//                                               <span className="info">
//                                                 35 mins{" "}
//                                                 <span className="count bg-success">
//                                                   2
//                                                 </span>
//                                               </span>
//                                             </div>
//                                           </a>
//                                         </li>
//                                         {/* End single Contact List */}

//                                         <li>
//                                           <a href="#">
//                                             <div className="d-flex bd-highlight">
//                                               <div className="img_cont">
//                                                 <img
//                                                   src="/images/resource/candidate-4.png"
//                                                   className="rounded-circle user_img"
//                                                   alt="chatbox avatar"
//                                                 />
//                                               </div>
//                                               <div className="user_info">
//                                                 <span>Albert Flores</span>
//                                                 <p>Head of Development</p>
//                                               </div>
//                                               <span className="info">
//                                                 35 mins
//                                               </span>
//                                             </div>
//                                           </a>
//                                         </li>
//                                         {/* End single Contact List */}

//                                         <li className="active">
//                                           <a href="#">
//                                             <div className="d-flex bd-highlight">
//                                               <div className="img_cont">
//                                                 <img
//                                                   src="/images/resource/candidate-5.png"
//                                                   className="rounded-circle user_img"
//                                                   alt="chatbox avatar"
//                                                 />
//                                               </div>
//                                               <div className="user_info">
//                                                 <span>Williamson</span>
//                                                 <p>Head of Development</p>
//                                               </div>
//                                               <span className="info">
//                                                 35 mins{" "}
//                                                 <span className="count bg-warning">
//                                                   2
//                                                 </span>
//                                               </span>
//                                             </div>
//                                           </a>
//                                         </li>
//                                         {/* End single Contact List */}

//                                         <li>
//                                           <a href="#">
//                                             <div className="d-flex bd-highlight">
//                                               <div className="img_cont">
//                                                 <img
//                                                   src="/images/resource/candidate-6.png"
//                                                   className="rounded-circle user_img"
//                                                   alt="chatbox avatar"
//                                                 />
//                                               </div>
//                                               <div className="user_info">
//                                                 <span>Kristin Watson</span>
//                                                 <p>Head of Development</p>
//                                               </div>
//                                               <span className="info">
//                                                 35 mins
//                                               </span>
//                                             </div>
//                                           </a>
//                                         </li>
//                                         {/* End single Contact List */}

//                                         <li>
//                                           <a href="#">
//                                             <div className="d-flex bd-highlight">
//                                               <div className="img_cont">
//                                                 <img
//                                                   src="/images/resource/candidate-7.png"
//                                                   className="rounded-circle user_img"
//                                                   alt="chatbox avatar"
//                                                 />
//                                               </div>
//                                               <div className="user_info">
//                                                 <span>Annette Black</span>
//                                                 <p>Head of Development</p>
//                                               </div>
//                                               <span className="info">
//                                                 35 mins
//                                               </span>
//                                             </div>
//                                           </a>
//                                         </li>
//                                         {/* End single Contact List */}

//                                         <li>
//                                           <a href="#">
//                                             <div className="d-flex bd-highlight">
//                                               <div className="img_cont">
//                                                 <img
//                                                   src="/images/resource/candidate-8.png"
//                                                   className="rounded-circle user_img"
//                                                   alt="chatbox avatar"
//                                                 />
//                                               </div>
//                                               <div className="user_info">
//                                                 <span>Jacob Jones</span>
//                                                 <p>Head of Development</p>
//                                               </div>
//                                               <span className="info">
//                                                 35 mins
//                                               </span>
//                                             </div>
//                                           </a>
//                                         </li>
//                                         {/* End single Contact List */}
//                                       </ul>
//                                     </div>

//                                     {/* Main Chat Area */}
//                                     <div className="flex-1 flex flex-col">
//                                       {/* Chat Header */}
//                                       <div className="bg-white p-4 shadow-sm flex items-center border-b border-blue-100">
//                                         <img
//                                           src="https://avatar.iran.liara.run/public/boy?username=Ash"
//                                           alt="User avatar"
//                                           className="w-12 h-12 rounded-full mr-4"
//                                         />
//                                         <div>
//                                           <h2 className="text-lg font-semibold text-blue-800">
//                                             John Snow
//                                           </h2>
//                                           <p className="text-sm text-green-500">
//                                             Online
//                                           </p>
//                                         </div>
//                                       </div>

//                                       {/* Messages Display */}
//                                       <div className="flex-1 overflow-y-auto p-6 bg-blue-50">
//                                         <div className="space-y-4">
//                                           {messages.map((msg, index) => (
//                                             <div
//                                               key={index}
//                                               className={`flex ${
//                                                 msg.sender === "John"
//                                                   ? "justify-start"
//                                                   : "justify-end"
//                                               }`}
//                                             >
//                                               <div
//                                                 className={`
//                   max-w-xs p-3 rounded-xl 
//                   ${
//                     msg.sender === "John"
//                       ? "bg-white text-blue-800 border border-blue-100 rounded-bl-none"
//                       : "bg-blue-600 text-white rounded-br-none"
//                   }
//                 `}
//                                               >
//                                                 <p className="break-words">
//                                                   {msg.content}
//                                                 </p>
//                                                 <div
//                                                   className={`text-xs text-opacity-70 text-right mt-1 
//                     ${msg.sender === "John" ? "text-blue-500" : "text-blue-200"}
//                   `}
//                                                 >
//                                                   {msg.time}
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           ))}
//                                         </div>
//                                       </div>

//                                       {/* Input Area */}
//                                       <div className="bg-white p-4 border-t border-blue-100">
//                                         <div className="flex items-center space-x-3">
//                                           <button className="text-blue-500 hover:text-blue-700">
//                                             <FaUserCircle size={24} />
//                                           </button>
//                                           <input
//                                             type="text"
//                                             placeholder="Type a message"
//                                             value={inputValue}
//                                             onChange={(e) =>
//                                               setInputValue(e.target.value)
//                                             }
//                                             onKeyPress={handleKeyPress}
//                                             className="flex-1 p-2 bg-blue-50 text-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                                           />
//                                           <button
//                                             onClick={sendMessage}
//                                             className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
//                                           >
//                                             <FaTelegram size={24} />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
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

// export default Messages;


import React from "react";

import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";

import FixedHeader from "../Layout/fixedHeader";
import Profilesidebar from "../Element/Profilesidebar";

function Messages() {
  return (
    <>
      <Header2 />
      <FixedHeader />

      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <Profilesidebar data={"messages"} />
                <div className="col-xl-9 col-lg-8 m-b30">
                  <h5>Note:Scheduled to be Live on December 9th 2024</h5>
            <div className="mt-4">
            <img src="/messages.png" alt="messages" />
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

export default Messages;
