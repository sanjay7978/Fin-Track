# 💰 FinTrack – Personal Expense Tracker with Budget & AI Insights

![FinTrack Badge](https://img.shields.io/badge/FinTrack-Personal%20Finance%20Manager-green?style=for-the-badge)
[![Made with Bolt](https://img.shields.io/badge/Made%20with-Bolt.new-blueviolet?style=for-the-badge&logo=thunder)](https://bolt.new)

A modern full-stack personal finance tracker that helps users manage their income, expenses, and budgets — with intelligent insights and visual dashboards.

🌐 **Live Demo**: [https://fintrk.netlify.app/](https://fintrk.netlify.app/)

---

## 🚀 Features

- 📊 **Dashboard Overview** – View weekly, monthly, and yearly expense trends.
- 💸 **Transaction Management** – Add, edit, and delete categorized income/expenses.
- 🎯 **Budgets & Goals** – Set budgets by category and monitor progress toward savings goals.
- 🧠 **AI Insights (Coming Soon)** – Personalized suggestions based on spending patterns.
- 🔔 **Budget Alerts** – Get notified when you exceed your budget limits.
- 🔐 **User Authentication** – Secure login/signup system with role-based access.
- 🌈 **Responsive UI** – Built using Tailwind CSS and React for a modern feel.

---

## 🛠️ Tech Stack

### 🔹 Frontend
- ⚛️ React.js (Vite)
- 💅 Tailwind CSS
- 🌐 React Router DOM
- 🧪 Zustand (State Management)
- 🔗 Axios

### 🔹 Backend
- 🟢 Node.js + Express.js
- 🐬 MongoDB with Mongoose
- 🔐 JWT Authentication
- 📊 MongoDB Aggregation Pipelines for analytics
- 🌍 Deployed on [Render](https://render.com)

---

## 📸 Screenshots

### 📊 Dashboard
<img src="https://github.com/Ravik27280/FinTrack/blob/main/dashboard.png" width="100%" />

### 🗂 Budgets
<img src="https://github.com/Ravik27280/FinTrack/blob/main/budget.png" width="100%" />

### 💸 Transactions
<img src="https://github.com/Ravik27280/FinTrack/blob/main/transaction.png" width="100%" />

### 🧠 AI Insights (Coming Soon)
<img src="https://github.com/Ravik27280/FinTrack/blob/main/Insights.png" width="100%" />

---

![bolt](https://github.com/Ravik27280/FinTrack/blob/main/black_circle_360x360.png)

---

## 🧪 Getting StartedMore actions

### Prerequisites

- Node.js (v18+)
- MongoDB (local or cloud)
- npm or yarn

### 🔧 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ravik27280/FinTrack.git
   cd FinTrack
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Setup Environment Variables**

   Create a `.env` file in `server/`:

   ```
   PORT=5000
   MONGODB_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the App**

   - Run backend
     ```bash
     cd server
     npm run dev
     ```

   - Run frontend
     ```bash
     cd client
     npm run dev
     ```

   App will be live at: [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

```
FinTrack/
├── client/           # React frontend
├── server/           # Node/Express backend
├── README.md
```

---

## 📌 Upcoming Features

- 🔍 Search & Filter for transactions
- 📅 Calendar View for daily tracking
- 📥 Import/Export transactions (CSV/Excel)
- 🤖 AI Assistant for financial tips
- 📱 PWA Support for mobile use

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.


---

## 📄 License

This project is licensed under the MIT License.

## Thank You Very Much
