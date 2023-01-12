import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../features/auth/auth";
import { sendMessage, updateMessages } from "../../features/messages/messages";
import { Wrapper } from "./HomepageStyles";
import avatar from "../../images/avatar.png";

const Homepage = () => {
   const loggedUser = useSelector((state) => state.user.loggedUser);
   const messages = useSelector((state) => state.messages.messages);
   const dispatch = useDispatch();
   const messagesEndRef = useRef();
   const [message, setMessage] = useState("");
   // const [paginatedData, setPaginatedData] = useState([]);
   // const [chatSize, setChatSize] = useState(25);

   useEffect(() => {
      dispatch(logIn());
   }, [dispatch]);

   // useEffect(() => {
   //    const getPaginetedData = () => {
   //       let slicedmsg = messages.slice(
   //          messages.length - chatSize,
   //          messages.length
   //       );
   //       setPaginatedData(slicedmsg);
   //    };

   //    getPaginetedData();
   // }, [chatSize, message, messages]);

   useEffect(() => {
      const onUpdateMessage = () => {
         setTimeout(() => dispatch(updateMessages()), 0);
      };
      window.addEventListener("storage", onUpdateMessage);
      return () => window.removeEventListener("storage", onUpdateMessage);
   }, [dispatch]);

   const sendMessageHandler = (e) => {
      if (message.length < 1) {
         return;
      } else {
         e.preventDefault();
         dispatch(
            sendMessage({
               author: loggedUser,
               text: message,
            })
         );
      }
      setMessage("");
   };

   // const loadmoreMessages = () => {
   //    if (messages.length < chatSize + 25) {
   //       setChatSize(messages.length);
   //    } else {
   //       setChatSize(chatSize + 25);
   //    }
   // };

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      console.log("updated");
   };

   useEffect(() => {
      scrollToBottom();
   }, [messages]);

   return (
      <Wrapper>
         <div className="header">
            <h3>welcome {loggedUser}</h3>
            <hr />
         </div>

         <div className="msgWrapper">
            {/* <div className="loadmore">
               {messages.length > chatSize ? (
                  <button onClick={loadmoreMessages}>load more messages</button>
               ) : null}
            </div> */}

            {messages ? (
               <>
                  {messages.map((msg, index) => (
                     <div
                        key={index}
                        className={
                           msg.author === loggedUser ? "left" : "message"
                        }
                     >
                        <div className="circle">
                           <img src={avatar} alt="avatar" />
                        </div>
                        <div className="content">
                           <p className="sender">{msg.author}</p>
                           <p>{msg.text}</p>
                        </div>
                     </div>
                  ))}
               </>
            ) : null}
         </div>
         <div ref={messagesEndRef} />
         <form onSubmit={sendMessageHandler}>
            <textarea
               id="message"
               placeholder="Message..."
               onChange={(e) => setMessage(e.target.value)}
               value={message}
            />
            <button>send</button>
         </form>
      </Wrapper>
   );
};

export default Homepage;
