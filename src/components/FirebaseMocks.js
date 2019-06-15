// import { jsxAttribute } from "@babel/types";

// const stateData = { email: "MOCK_EMAIL",
//         password: "MOCK_PASSWORD",
//         error: "MOCK_ERROR",
//         loading: "MOCK_BOOLEAN" 
//       };
// const docResult = {
//   // simulate firestore get doc.data() function
//     setState: () => stateData
// };






//const get = jest.fn(() => Promise.resolve(docResult));


// const signInWithEmailAndPassword = jest.fn(email,password)
// const createUserWithEmailAndPassword = jest.fn(email,password)

// const emailSignIn = {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword
// }

// const auth = jest.fn(()=> emailSignIn);

// const firebase = jest.fn(() => {
//   return {
//     auth,
//   };
// });
// const firestore = () => {
//   return { firebase };
// };
// firestore.FieldValue = {
//   serverTimestamp: () => {
//     return "MOCK_TIME";
//   }
// };

export { firestore };