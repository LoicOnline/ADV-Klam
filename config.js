// ============================================================
// CONFIGURATION — ADV-Klam / Transit Documents
// ============================================================

// Firebase Realtime Database : conservation des dossiers + métadonnées.
// Firebase Storage n'est plus utilisé pour les fichiers.
const firebaseConfig = {
  apiKey: "AIzaSyA86YBL66rPWCt1aFG3ZnT9zxP2PHWdkJs",
  authDomain: "adv-klam.firebaseapp.com",
  databaseURL: "https://adv-klam-e2361-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adv-klam",
  messagingSenderId: "868435792590",
  appId: "1:868435792590:web:df5395abe3605319b9369f"
};

// ============================================================
// CLOUDINARY
// ============================================================
// À renseigner depuis Cloudinary > Settings > Upload > Upload presets.
// IMPORTANT : le preset doit être "Unsigned".
//
// Ne mettez JAMAIS l'API Secret Cloudinary dans ce fichier.
// Le nom du preset unsigned est volontairement côté navigateur.
// Protégez-le avec allowed_formats + max_file_size dans Cloudinary.
const CLOUDINARY_CONFIG = {
  cloudName: "dnobrigc3",
  uploadPreset: "ADV-Klam",
  folder: "adv-klam/documents"
};

// ============================================================
// Mot de passe administrateur
// ============================================================
const ADMIN_PASSWORD = "Klam2026!";

// ============================================================
// Exposition globale
// ============================================================
window.FIREBASE_CONFIG = firebaseConfig;
window.CLOUDINARY_CONFIG = CLOUDINARY_CONFIG;
window.ADMIN_PASSWORD = ADMIN_PASSWORD;
