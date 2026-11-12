
import { auth, db } from "./firebase";

function App() {
  console.log("Firebase Auth:", auth.app.name);
  console.log("Firestore:", db.app.name);

  return <h1>Student Portal - Firebase Test</h1>;
}

export default App;
