import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../features/auth/auth";
import { sendMessage, updateMessages } from "../../features/messages/messages";

const Homepage = () => {
   const loggedUser = useSelector((state) => state.user.loggedUser);
   const messages = useSelector((state) => state.messages.messages);
   const dispatch = useDispatch();
   const [message, setMessage] = useState("");

   useEffect(() => {
      dispatch(logIn());
      return;
   }, [dispatch]);

   const sendMessageHandler = (e) => {
      e.preventDefault();
      dispatch(
         sendMessage({
            author: loggedUser,
            text: message,
         })
      );
      setMessage("");
   };
   useEffect(() => {
      const onUpdateMessage = () => {
         setTimeout(() => dispatch(updateMessages()), 0);
      };
      window.addEventListener("storage", onUpdateMessage);
      return () => window.removeEventListener("storage", onUpdateMessage);
   }, [dispatch]);
   return (
      <>
         {messages ? (
            <>
               {messages.map((msg, index) => (
                  <h2 key={index}>{msg.text}</h2>
               ))}
            </>
         ) : null}

         <br />
         <br />
         <br />
         <div>{loggedUser} is logged in on this page</div>
         <br />
         <br />
         <br />
         <div>
            <form onSubmit={sendMessageHandler}>
               {loggedUser ? (
                  <label htmlFor="message">{loggedUser}</label>
               ) : (
                  <label htmlFor="message">Anonymous</label>
               )}
               <textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
               />
               <button>send</button>
            </form>
         </div>
      </>
   );
};

export default Homepage;
