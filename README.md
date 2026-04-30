# 📊 Student Performance Dashboard (Google Apps Script)

An interactive **Student Performance Dashboard** built using **Google Apps Script + Google Sheets + Plotly.js**.

This project provides real-time insights into student performance, tracks assignment progress, and automatically sends email notifications when assignments are graded.

---

## 🚀 Live Deployment

👉 [Open Dashboard]([https://script.google.com/macros/s/AKfycbwg1N-steAcbBXiArpiK7we0g47JHYHpPtswUXROO40ZnLal7LfN1B4CtdMl7XLFSQK/exec](https://script.google.com/macros/s/AKfycbwg1N-steAcbBXiArpiK7we0g47JHYHpPtswUXROO40ZnLal7LfN1B4CtdMl7XLFSQK/exec)

---

## ✨ Features

### 📌 Data Integration

* Live connection with **Google Sheets**
* Automatically fetches data from `Assignments` sheet

### 📊 Dashboard Analytics

* Total Records
* Average Score
* Completed / Graded Assignments
* Low Scores (< 50%)
* Overdue Pending Assignments

### 📈 Visualizations (Plotly.js)

* Score trend over time
* Subject-wise performance
* Assignment status breakdown
* Student completion ranking
* Risk analysis (low score + overdue)

### 🔍 Smart Filtering

* Filter by Subject
* Filter by Status
* Date range filtering
* Search by student name or email

### ⚠️ Risk Detection

* Highlights low scores
* Flags overdue assignments
* Displays smart status badges (On Track / Risk)

### 📧 Automation (Email Notification)

* Automatically sends email when:

  ```
  Status changes: Pending → Graded
  ```

---

## 🛠️ Tech Stack

* Google Apps Script
* Google Sheets
* HTML5 + CSS3
* JavaScript (Vanilla)
* Plotly.js

---

## 📁 Project Structure

```
student-performance-dashboard/
│
├── index.html     # Frontend UI
├── Code.gs        # Backend logic (Apps Script)
└── README.md
```

---

## 📄 Google Sheet Structure

Sheet Name:

```
Assignments
```

Required Columns:

```
Student Name
Subject
Assignment Score
Submission Date
Status
Student Email
Due Date
```

---

## ⚙️ Setup Instructions

### 1. Open Google Sheet

```
Extensions → Apps Script
```

### 2. Add Project Files

Create:

* `index.html`
* `Code.gs`

### 3. Configure Spreadsheet

Update inside `Code.gs`:

```javascript
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";
const SHEET_NAME = "Assignments";
```

### 4. Deploy the App

1. Click **Deploy → New Deployment**
2. Select **Web App**
3. Set access:

   ```
   Anyone with the link
   ```
4. Deploy and authorize

### 5. Enable Email Automation

Add trigger:

| Function               | Event   |
| ---------------------- | ------- |
| sendGradedNotification | On edit |

---

## 🎯 Use Case

Built for **10 Minute School Internship Assessment** to:

* Track student performance
* Identify low-performing students
* Monitor assignment completion
* Automate grading notifications

---

## 👨‍💻 Author

**MD. Irfanul Kabir**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
