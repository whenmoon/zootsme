// import firebase from "firebase/app";
// import { firestore } from "../setupTests";
// firebase.firestore = firestore;

// describe("setDocData", () => {
//   const mockData = { fake: "data" };
//   beforeEach(() => {
//     jest.clearAllMocks();
//     setDocData("fakeDocID", mockData);
//   });

//   it("writes the correct doc", () => {
//     expect(firestore().doc).toHaveBeenCalledWith("docs/fakeDocID");
//   });

//   it("adds a timestamp, and writes it to the doc", () => {
//     expect(firestore().doc().set).toHaveBeenCalledWith({
//       created: "MOCK_TIME",
//       fake: "data"
//     });
//   });
// });

// // resets the password state 

