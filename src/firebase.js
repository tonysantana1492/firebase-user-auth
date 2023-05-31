import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyBabo7XfrbgD_z4qIsf3KWHnPwwqUBM5xI",
//   authDomain: "fir-user-reg-auth.firebaseapp.com",
//   projectId: "fir-user-reg-auth",
//   storageBucket: "fir-user-reg-auth.appspot.com",
//   messagingSenderId: "720211998290",
//   appId: "1:720211998290:web:8291fab2697dbaafc2d18b"
// }

const firebaseConfig = {
	apiKey: "AIzaSyBWaI2AiwbIkRJUyn19ef09r6MseEZC2aY",
	authDomain: "testforemulator.firebaseapp.com",
	databaseURL: "https://testforemulator-default-rtdb.firebaseio.com",
	projectId: "testforemulator",
	storageBucket: "testforemulator.appspot.com",
	messagingSenderId: "512659986113",
	appId: "1:512659986113:web:0bf08797e33c8d23952640"
  };

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth();
connectAuthEmulator(auth, 'http://localhost:9099');
export {auth}

