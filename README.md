Blackcoffer Assignment – Data Visualization Dashboard
📌 Project Overview

This project is a full-stack data visualization dashboard developed as part of the Blackcoffer Assignment.
The application fetches insights data from a MongoDB database through a Node.js + Express backend and displays interactive charts on a React frontend.

The dashboard provides:

📊 Topic Distribution Visualization
🌍 Region Distribution Analysis
📈 Intensity Trends Over Years
🔍 Dynamic Filtering by:
Year
Topic
Region
Country

The backend exposes REST APIs for retrieving insights data, while the frontend visualizes the data using Chart.js.

🚀 Tech Stack
Frontend
React.js
Chart.js
React ChartJS 2
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
CORS
📂 Project Structure
blackcoffer-assignment/
│
├── backend/
│   ├── index.js
│   ├── models/
│   │   └── Insight.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── components/
│   ├── package.json
│
└── README.md
⚙️ Features
✅ Interactive Dashboard
Displays data visually using bar charts and line charts.
✅ Dynamic Filters

Users can filter data by:

Year
Topic
Region
Country
✅ REST API Integration

Frontend fetches data from backend APIs.

✅ MongoDB Integration

Data stored and managed using MongoDB.

✅ Responsive Design

Simple and clean UI for better usability.

🛠️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/blackcoffer-assignment.git
cd blackcoffer-assignment
Backend Setup
2️⃣ Navigate to Backend Folder
cd backend
3️⃣ Install Dependencies
npm install
4️⃣ Start MongoDB

Make sure MongoDB is running locally.

Default MongoDB URL used:

mongodb://localhost:27017/blackcoffer
5️⃣ Run Backend Server
node index.js

Backend runs on:

http://localhost:5000

The backend API retrieves insights data using Express and Mongoose.

Frontend Setup
6️⃣ Navigate to Frontend Folder
cd frontend
7️⃣ Install Dependencies
npm install
8️⃣ Start React Application
npm start

Frontend runs on:

http://localhost:3000
📊 API Endpoint
Get All Insights
GET /api/insights

Example:

http://localhost:5000/api/insights

The API fetches all records from MongoDB and returns them in JSON format.

📈 Dashboard Visualizations

The dashboard includes:

🔹 Topic Distribution

Bar chart representing count of different topics.

🔹 Region Distribution

Bar chart showing insights across regions.

🔹 Intensity Over Years

Line chart representing total intensity grouped by year.

Charts are implemented using Chart.js in React.

🗄️ Database Schema

The MongoDB schema contains fields such as:

intensity
sector
topic
insight
region
country
relevance
likelihood
impact
source
title

Defined using Mongoose schema.

📦 Dependencies

Backend dependencies include:

Express.js
Mongoose
CORS

Configured in package.json.

🔮 Future Improvements
Add authentication
Improve UI/UX design
Add more chart types
Deploy using Render/Vercel
Add pagination & search
Real-time analytics support
👨‍💻 Author

Developed by Gattu Raghavendra as part of the Blackcoffer Assignment.

📜 License

This project is developed for educational and assignment purposes only.
