# 💬 FAQ Chatbot

A full-stack FAQ chatbot built with **FastAPI** and **React + Vite** that answers user questions by matching them with the most relevant FAQ using **Natural Language Processing (NLP)** and **cosine similarity**.

Users can ask questions in a chat interface, and the chatbot returns the best matching answer instantly.

---

## 📌 Project Overview

This project is designed to answer frequently asked questions automatically through a chatbot interface.

A list of FAQ questions and answers is stored in the backend. When the user enters a question:

- the text is cleaned and tokenized using **NLTK**
- converted into vectors using **TF-IDF**
- compared with stored FAQs using **cosine similarity**
- the most relevant answer is returned to the user

The frontend provides a clean chat experience using React.

This project demonstrates:

- FastAPI backend development
- React UI development
- NLP preprocessing with NLTK
- TF-IDF vectorization
- cosine similarity matching
- frontend ↔ backend integration

---

## 🚀 How to Use

1. Open the chatbot.
2. Type a question in the input box.
3. Click **Send** or press **Enter**.
4. The chatbot compares your question with available FAQs.
5. The best matching answer is displayed instantly.

Example:

```text
User:
What is your return policy?

Bot:
You can return any product within 7 days.
```

---

## ✨ Features

- 💬 Chat-style FAQ interface
- 🧠 NLP-based text preprocessing
- 🔍 cosine similarity FAQ matching
- ⚡ instant response
- 🎨 clean responsive UI
- ⌨️ Enter key support

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- FastAPI
- Uvicorn
- Python

### NLP / Machine Learning

- NLTK
- Scikit-learn

---

## ⚙️ Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/your-username/faq-chatbot-fastapi-react.git
```

Move into project:

```bash
cd faq-chatbot-fastapi-react
```

---

## 2. Backend setup

Move into backend:

```bash
cd backend
```

Create virtual environment

### Windows

```bash
python -m venv faqenv
faqenv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run backend

```bash
uvicorn main:app --reload
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

---

## 3. Frontend setup

Open a new terminal

Move into frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run React

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

## 🧠 NLP Workflow

Example:

User asks:

```text
Can I return a product?
```

Preprocessing:

```text
can i return a product
```

Compare with stored FAQs:

```text
What is your return policy?
Do you offer warranty?
How long does shipping take?
```

Highest similarity:

```text
What is your return policy?
```

Bot returns:

```text
You can return any product within 7 days.
```

---

## 🌟 Sample FAQs

Example dataset:

- What is your return policy?
- Do you offer warranty?
- How long does shipping take?
- Can I cancel my order?
- Do you offer cash on delivery?

You can replace these with any topic:

- ecommerce
- college admissions
- hospital FAQs
- customer support
- company helpdesk

---

## 🎯 Future Improvements

Possible enhancements:

- chat history
- timestamps
- FAQ suggestions
- confidence score
- voice input
- chatbot typing animation
- database integration

---
