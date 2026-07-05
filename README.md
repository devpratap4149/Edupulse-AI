# EduPulse AI

**EduPulse AI** is an AI-powered student intelligence, safety, wellness, and campus analytics platform designed for smart schools and colleges.

It helps institutions detect academic risk, student wellbeing concerns, safety issues, and campus hotspots before they become serious problems.

## Live Demo

🔗 **Live Project:** https://edupulse-ai-beige.vercel.app/

## Tagline

"Every footprint tells a story. USIP listens before it becomes a dropout, a crisis, or a missed opportunity."

## Problem Statement

Educational institutions generate large amounts of student and campus data every day, but most of this data remains disconnected across paperwork, spreadsheets, attendance systems, academic records, fee data, counselling notes, and manual communication channels.

Because of this, institutions often identify student problems too late, such as:

- Students at risk of dropping out
- Declining academic performance
- Bullying, ragging, or harassment
- Mental wellness concerns
- Unsafe campus zones
- Delayed parent-teacher communication
- Lack of verified student achievement records

EduPulse AI solves this by converting institutional data into actionable intelligence.

## Solution

EduPulse AI is a student intelligence and campus safety ecosystem that uses explainable AI-based risk scoring, NLP-style report classification, and campus pattern detection to support early intervention.

The platform helps administrators, teachers, counsellors, parents, students, and security teams take timely action.

## Key Features

### 1. Risk Intelligence Dashboard

A central dashboard showing:

- Total students monitored
- High-risk students
- Active SOS reports
- High-risk campus zones
- Pending interventions
- Parent/teacher alerts

### 2. Dropout Radar AI

Predicts students who may be at risk of academic decline, disengagement, or dropout.

It analyzes:

- Attendance patterns
- Marks/performance trends
- Fee delays
- Activity participation
- Counselling history

Output:

- Dropout risk score
- Academic risk score
- Engagement risk score
- Suggested intervention

### 3. SilentSOS

An anonymous student safety and wellbeing reporting system.

Students can report:

- Bullying
- Ragging
- Harassment
- Mental pressure
- Discrimination
- Safety concerns

The system classifies reports by:

- Category
- Severity
- Urgency score
- Assigned authority

### 4. Campus Heatmap

Visualizes campus activity and risk zones.

It highlights:

- High-risk areas
- Repeated complaint locations
- Crowded zones
- Underused infrastructure
- Safety blind spots

### 5. Intervention Tracker

Tracks support actions assigned to teachers, counsellors, or security teams.

It includes:

- Student name
- Issue type
- Assigned authority
- Priority
- Status
- Recommended action

### 6. Parent & Teacher Alerts

Generates role-based alerts for parents, teachers, counsellors, and security teams.

Example:

> Aman's attendance has dropped from 86% to 62%. A parent-teacher meeting is recommended.

### 7. Student Skill Passport

A verified digital portfolio for student achievements beyond marks.

It stores:

- Projects
- Hackathons
- Sports achievements
- Certifications
- Leadership roles
- Volunteering activities

## AI Implementation

For the MVP, EduPulse AI uses an explainable AI approach.

### Dropout Risk Scoring

The system calculates risk using factors such as:

- Low attendance
- Academic decline
- Fee delay
- Low activity participation
- Counselling history

### SilentSOS NLP Classification

The system uses keyword-based NLP-style classification to identify report categories such as:

- Bullying
- Mental health
- Safety concern
- General concern

### Campus Intelligence

EduPulse AI detects repeated patterns in campus reports and highlights risky locations.

### Intervention Recommendation

The platform recommends suitable actions such as:

- Counselling session
- Parent meeting
- Academic mentoring
- Security monitoring
- Teacher follow-up

## Tech Stack

- React.js
- Vite
- JavaScript
- CSS
- React Router DOM
- Dummy JSON data for MVP

## Project Structure

```txt
src/
│
├── components/
│   ├── Navbar.jsx
│   └── DashboardCard.jsx
│
├── data/
│   ├── students.js
│   ├── sosReports.js
│   ├── skills.js
│   ├── campusLocations.js
│   ├── interventions.js
│   └── alerts.js
│
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── DropoutRadar.jsx
│   ├── StudentProfile.jsx
│   ├── SilentSOS.jsx
│   ├── SkillPassport.jsx
│   ├── CampusHeatmap.jsx
│   ├── Interventions.jsx
│   └── Alerts.jsx
│
├── App.jsx
├── main.jsx
└── App.css