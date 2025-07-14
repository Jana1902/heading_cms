# Company ABC Website
This project is a responsive website for Company ABC with a dynamic heading text managed through a CMS. The heading is stored in MongoDB and updated via REST APIs.

---

## ✨ Tech Stack
**Frontend:**
- React
- Tailwind CSS
- Axios
- Zustand (state management)
- react-router-dom

**Backend:**
- Express.js
- MongoDB
- Mongoose

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm

---

### Clone the Repository
```bash
git clone <repository-url>
cd <project-folder>
```

### Install Dependencies

**Backend**
```bash
cd frontend
npm install
```

**Frontend**
```bash
cd backend
npm install
```

### Environment Variables
Create a `.env` file in your backend directory:
```ini
MONGODB_URI=mongodb+srv://<your-mongo-connection>
```

## 🚀 Running Locally

### Start Backend
```bash
cd backend server
npm start
```

### Start Frontend
```bash
cd frontend
npm run dev
```

## 🌐 Deployment
**Frontend:** Deployed on Vercel  
**Backend:** Deployed on Railway

**Production URLs:**
- Homepage: https://heading-cms.vercel.app/
- CMS Page: https://heading-cms.vercel.app/settings

## 🧩 Database Schema
This project uses the following Mongoose schema for the heading:

```javascript
{
  text: {
    type: String,
    required: true,
  },
}

```

## 📡 API Documentation
**Base URL:** https://headingcms-production.up.railway.app

### 🟢 GET /heading
**Description:** Retrieve the current heading text.

**Request:**
- Method: GET
- Parameters: None

**Response:**
- 200 OK
```json
{
  "text": "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI"
}
```

### 🟢 POST /update-heading
**Description:** Update the heading text.

**Request:**
- Method: POST
- Headers: Content-Type: application/json
- Body:
```json
{
  "text": "Your new heading text"
}
```

**Responses:**
- 200 OK
```json
{
  "message": "Heading updated successfully"
}
```

- 400 Bad Request
```json
{
  "message": "Heading is missing"
}
```

## 🖥️ Frontend Routes
| Path | Page |
|------|------|
| / | Landing Page |
| /settings | CMS Settings Page |

## 📦 Deployment Instructions

### Backend (Railway)
1. Push your code to a GitHub repository.
2. Create a new Railway project.
3. Connect your repository.
4. Set your environment variable:
   - MONGODB_URI
5. Deploy.

### Frontend (Vercel)
1. Push your client directory to a separate repository (or configure Vercel to use /frontend as root).
2. Import your project on Vercel.
3. Set build output to build.
4. Deploy.

## 📝 Notes
- If you change the heading text in /settings, it will instantly reflect on the homepage.
- Be sure to configure CORS on your backend if you host frontend and backend on different domains.
