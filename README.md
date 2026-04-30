# 📊 Student Performance Dashboard (Google Apps Script)

An interactive **Student Performance Dashboard** built using **Google Apps Script + Google Sheets + Plotly.js**.

This project provides real-time insights into student performance, tracks assignment progress, and automatically sends email notifications when assignments are graded.

---

## 🚀 Live Demo

👉 **Dashboard Link:**
[https://script.google.com/macros/s/AKfycbwg1N-steAcbBXiArpiK7we0g47JHYHpPtswUXROO40ZnLal7LfN1B4CtdMl7XLFSQK/exec](https://script.google.com/macros/s/AKfycbwg1N-steAcbBXiArpiK7we0g47JHYHpPtswUXROO40ZnLal7LfN1B4CtdMl7XLFSQK/exec)

---

## ✨ Features

### 📌 Data Integration

* Live connection with **Google Sheets**
* Automatically fetches data from the `Assignments` sheet

### 📊 Dashboard Analytics

* Total Records
* Average Score
* Completed / Graded Assignments
* Low Scores (< 50%)
* Overdue Pending Assignments

### 📈 Visualizations (Plotly.js)

* 📉 Score trend over time
* 📊 Subject-wise performance
* 🥧 Assignment status breakdown
* 🏆 Student completion ranking
* ⚠️ Risk analysis (low score + overdue)

### 🔍 Smart Filtering

* Filter by Subject
* Filter by Status
* Date range filtering
* Search by student name or email

### ⚠️ Risk Detection

* Highlights low scores
* Flags overdue assignments
* Displays smart badges (On Track / Risk / Overdue)

### 📧 Automation (Email Notification)

Automatically sends email when:

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
├── index.html     # Frontend UI (Dashboard)
├── Code.gs        # Backend (Apps Script logic)
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

### 1. Open Google Sheets

Go to:

```
Extensions → Apps Script
```

---

### 2. Add Project Files

Create:

* `index.html`
* `Code.gs`

Paste the respective code.

---

### 3. Configure Spreadsheet

Update inside `Code.gs`:

```javascript
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";
const SHEET_NAME = "Assignments";
```

---

### 4. Deploy Web App

1. Click **Deploy → New Deployment**
2. Select **Web App**
3. Configure:

   * Execute as → `Me`
   * Who has access → **Anyone**
4. Click **Deploy**
5. Authorize permissions
6. Copy the `/exec` URL

---

### 5. Enable Email Automation

Add a trigger:

| Function               | Event   |
| ---------------------- | ------- |
| sendGradedNotification | On edit |

---

## 🎯 Use Case

Built as part of an **internship assessment for 10 Minute School**.

Helps educators and admins to:

* Monitor student performance
* Identify weak students
* Track assignment completion
* Automate grading notifications

---

## 📌 Highlights

* Fully serverless (Google Apps Script)
* Real-time data sync with Google Sheets
* Interactive UI with modern dashboard design
* Automated email workflow
* Scalable for real-world education systems

---

## 👨‍💻 Author

**MD. Irfanul Kabir**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
