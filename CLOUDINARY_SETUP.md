# Configuration Cloudinary — ADV-Klam

Cette version utilise :

- **Firebase Realtime Database** uniquement pour les dossiers et métadonnées.
- **Cloudinary** pour les fichiers PDF/JPG/PNG.
- **Firebase Storage n'est plus utilisé**.

## 1. Créer le preset Cloudinary

Dans Cloudinary :

1. Ouvrir **Settings → Upload → Upload presets**.
2. Créer un nouveau preset.
3. Choisir **Unsigned**.
4. Donner-lui un nom, par exemple `adv_klam_docs`.
5. Configurer au minimum :
   - `Allowed formats` : `pdf,jpg,jpeg,png`
   - `Maximum file size` : `10 MB`
   - `Disallow public ID` : recommandé
6. Enregistrer.

Cloudinary recommande de limiter les formats et la taille sur les presets unsigned, car le nom du preset est visible dans le navigateur.

## 2. Renseigner config.js

Remplacer :

```js
const CLOUDINARY_CONFIG = {
  cloudName: "VOTRE_CLOUD_NAME",
  uploadPreset: "VOTRE_UNSIGNED_UPLOAD_PRESET",
  folder: "adv-klam/documents"
};
```

par votre `cloudName` et le nom exact du preset.

**Ne mettez jamais l'API Secret Cloudinary dans `config.js`.**

## 3. Fonctionnement

Quand le client envoie un document :

1. Le navigateur valide le type et la taille.
2. Le fichier est envoyé directement à Cloudinary.
3. Cloudinary renvoie `secure_url`, `public_id`, `resource_type`, etc.
4. Seules ces métadonnées sont enregistrées dans Firebase Realtime Database.
5. L'administrateur ouvre le document via l'URL HTTPS Cloudinary.

## 4. Suppression / remplacement

La suppression d'un asset Cloudinary nécessite une requête authentifiée avec l'API Secret. Il ne faut donc surtout pas effectuer cette opération directement depuis le JavaScript public.

Dans cette version, « Redemander » retire le document du dossier Firebase afin que le client puisse en envoyer un nouveau, mais l'ancien asset reste dans Cloudinary.

Pour une suppression automatique complète, il faut ajouter une petite API backend/serverless qui utilise l'API Key + API Secret Cloudinary.

## 5. Important pour des documents sensibles

Le mode unsigned est pratique pour une application statique, mais il ne constitue pas une authentification forte : le preset peut être découvert côté client.

Pour un niveau de sécurité supérieur, la version recommandée est :

**client → endpoint backend signé → Cloudinary → Firebase**

Le secret Cloudinary reste alors uniquement côté serveur.

## 6. Hébergement

Cloudinary remplace ici **Firebase Storage**, pas l'hébergement HTML.

Vous pouvez continuer à héberger :

- `index.html`
- `admin.html`
- `client.html`
- `config.js`

sur GitHub Pages, Netlify, Vercel, etc.

Cloudinary stocke les documents.
Firebase Realtime Database stocke les dossiers.


## 7. Erreur HTTP 401 lors de l'ouverture d'un PDF

Si l'envoi fonctionne mais que le bouton **Voir** ouvre une page Cloudinary avec `HTTP ERROR 401`, vérifiez les réglages de sécurité Cloudinary. Sur les comptes Cloudinary Free, la livraison des PDF peut être bloquée par défaut pour des raisons de sécurité.

Dans Cloudinary :

1. Ouvrir **Settings → Security**.
2. Rechercher **Allow delivery of PDF and ZIP files**.
3. Activer cette option.
4. Vérifier également que le preset `ADV-Klam` utilise un type de livraison public (**Upload**) et non `Private` ou `Authenticated`.

Les PDF sont normalement stockés comme ressources `image` et leur `secure_url` peut ensuite être ouvert directement dans le navigateur.

Référence : https://cloudinary.com/documentation/paged_and_layered_media
