## Project Overview

**PassHub** is a simple and secure password manager built with the MERN stack (MongoDB, Express, React, Node.js) and styled using Tailwind CSS. It allows users to store, manage, and organize their credentials (website, username, password) in one place with a clean, modern UI.

---

## Features

- **Add, view, edit, and delete credentials** (website, username, password)
- **Copy credentials** to clipboard with one click
- **Show/hide password** toggle for better security
- **Responsive and modern UI** using Tailwind CSS
- **Backend API** with Express and MongoDB for persistent storage
- **Frontend** built with React and Vite
- **Toast notifications** for user feedback

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Toastify
- **Backend:** Node.js, Express, MongoDB
- **Other:** uuid, dotenv, body-parser, cors

---

## Directory Structure

```
/
├── backend/                # Express server and backend logic
│   ├── server.js           # Main backend server file
│   └── package.json        # Backend dependencies
├── src/                    # Frontend source code
│   ├── components/         # React components (Navbar, Manager, Face, Footer, Main)
│   ├── assets/             # Icons and images
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── ...                 # Styles and other files
├── public/                 # Static files
├── package.json            # Frontend dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (running locally or accessible remotely)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Tejas-00/PassHub-full-stack.git
cd password-manager-MERN
```

#### 2. Install dependencies

- **Frontend:**
  ```bash
  npm install
  ```

- **Backend:**
  ```bash
  cd backend
  npm install
  ```

#### 3. Set up environment variables

- Create a `.env` file in the `backend/` directory if you want to override the default MongoDB connection string.

#### 4. Start the backend server

```bash
cd backend
node server.js
```

#### 5. Start the frontend development server

```bash
cd ..
npm run dev
```

- The frontend will run on [http://localhost:5173](http://localhost:5173)
- The backend API will run on [http://localhost:3000](http://localhost:3000)

---

## Usage

- Open the frontend in your browser.
- Add new credentials using the form.
- View, copy, edit, or delete credentials from the table.
- All data is stored in your MongoDB database.

---

## Screenshots

![image](https://github.com/user-attachments/assets/eb44fc8a-0b5f-430e-a5d1-49ee63341cd5)
![image](https://github.com/user-attachments/assets/481a6d23-295d-434b-827c-ccba3e21f22b)

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Credits

- Built by Tejas Sonawane
- Inspired by modern password managers

---
