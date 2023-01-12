import styled from "styled-components";

export const Wrapper = styled.div`
   width: 50%;
   max-width: 450px;
   min-width: 365px;
   margin: 5vh auto;
   border-radius: 10px;
   height: 90vh;
   background: white;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 2rem 1rem 1rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

   .header {
      text-align: center;

      h3 {
         margin: 10px;
         text-transform: uppercase;
         font-weight: 400;
      }
   }

   .msgWrapper {
      height: 82%;
      overflow-y: scroll;
      position: relative;

      .loadmore {
         width: 100%;
         text-align: center;

         button {
            margin: 1rem;
            padding: 3px 5px;
            border-radius: 5px;
            font-size: 13px;
            outline: none;
         }
      }

      .message,
      .left {
         width: 80%;
         background: whitesmoke;
         border-radius: 10px;
         padding: 10px;
         margin: 10px 0;
         display: flex;

         .circle {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: #249edd;
            background: #2299fd;
            margin-right: 1rem;
            margin-left: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
               width: 65%;
               height: 65%;
            }
         }

         .sender {
            text-transform: capitalize;
            font-weight: 400;
            margin-bottom: 5px;
         }

         .content {
            width: 80%;
         }
      }

      .left {
         background: teal;
         background: #3f75cc;
         background: #249edd;
         background: #2299fd;
         color: whitesmoke;
         margin-left: 20%;
         display: flex;
         flex-direction: row-reverse;

         .circle {
            background: whitesmoke;
            margin-right: 0;
            margin-left: 1rem;
         }
      }
   }

   form {
      width: 100%;
      background-color: white;
      display: flex;
      flex-direction: column;

      textarea {
         margin: 7px 0;
         height: 50px;
         padding: 10px;
      }

      textarea:focus,
      textarea:active {
         outline: none;
      }

      button {
         padding: 0.8rem;
         background: #249edd;
         background: #2299fd;
         color: white;
         border: none;
         cursor: pointer;
      }

      button:hover {
         filter: brightness(80%);
      }
   }
`;
