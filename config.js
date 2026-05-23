// ============================================================
//  CONFIGURATION FIREBASE — ADV-Klam
//  Projet de Loic — Transit Documents
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyA86YBL66rPWCt1aFG3ZnT9zxP2PHWdkJs",
  authDomain: "adv-klam.firebaseapp.com",
  databaseURL: "https://adv-klam-e2361-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adv-klam",
  storageBucket: "adv-klam.firebasestorage.app",
  messagingSenderId: "868435792590",
  appId: "1:868435792590:web:df5395abe3605319b9369f"
};

// ============================================================
//  Mot de passe administrateur
//  (à changer ici si besoin plus tard)
// ============================================================
const ADMIN_PASSWORD = "Klam2026!";

// ============================================================
//  Ne modifie rien en dessous
// ============================================================
window.FIREBASE_CONFIG = firebaseConfig;
window.ADMIN_PASSWORD = ADMIN_PASSWORD;
