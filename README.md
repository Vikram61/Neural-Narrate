# 📝 Neural Narrate – AI-Powered Blog Generator



**Neural Narrate** is a full-stack web application that allows users to generate, manage, and publish blogs effortlessly using AI. With the power of **Google Gemini API**, **MERN stack**, and **ImageKit**, creating engaging content has never been easier.  

---

## 🌟 Features

- **AI-Powered Content Generation** – Generate blog content automatically using the Gemini API.  
- **Rich Text Editor** – WYSIWYG editor powered by Quill.js.  
- **Image Upload & Optimization** – Upload blog thumbnails via ImageKit with automatic WebP optimization.  
- **Dashboard & Analytics** – View total blogs, drafts, comments, and latest posts.  
- **Comments & Interaction** – Users can leave comments; admin can moderate them.  
- **Responsive UI** – Tailwind CSS ensures mobile-friendly and professional design.  

---

## 🛠️ Tech Stack

| Layer       | Technology                         |
|------------|-----------------------------------|
| Frontend   | React.js, Tailwind CSS, Quill.js   |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB                             |
| AI         | Google Gemini API                   |
| Images     | ImageKit                            |
| Auth       | JWT & Protected Routes              |
| Deployment | Vercel  |

---

## 🚀 Installation

### Backend
```bash
git clone https://github.com/yourusername/neural-narrate.git
cd neural-narrate/server
npm install
Create a .env file:
```
Start the backend server:
```bash

cd ../server
npm install
npm run dev
Create a .env file:
```
Backend env file
Copy code
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
GEMINI_API_KEY=your_google_gemini_api_key

```


Frontent env file
```bash
VITE_API_URL=http://localhost:5000
```
Start the frontend server:

```bash
npm run dev
```
