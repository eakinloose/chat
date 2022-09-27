import styled from "styled-components";

export const Wrapper = styled.div`
   width: 90%;
   max-width: 500px;
   margin: 9rem auto;

      form {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-content: center;
         padding: 0.7rem 0;
      }

      textarea {
         margin: 0.7rem 0;
         outline: none;
      }

      textarea:focus,
      textarea:active,
      textarea:hover {
         outline: none;
         margin: 0.7rem 0;
         /* width: 100%; */
      }

      button {
         padding: 1rem;
         color: white;
         border: none;
         background: teal;
      }
`;
