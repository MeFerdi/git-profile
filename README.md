# GitHub Profile Viewer

GitHub Profile Viewer is a web application that allows users to view GitHub profiles, repositories, contributions, and README content in a clean and intuitive interface. The application is built with **React** for the frontend and **Python Flask** for the backend.

## Features

- **View GitHub Profile**: Display user details such as name, bio, followers, and public repositories.
- **View Repositories**: List all public repositories with descriptions and links.
- **View Contributions**: Display the total number of contributions in the last year.
- **View README**: Render the user's README content (if available) in Markdown format.
- **Light/Dark Mode**: Toggle between light and dark themes for better user experience.

---

## Technologies Used

- **Frontend**:
  - React
  - React Icons
  - React Markdown
  - Axios (for API requests)
- **Backend**:
  - Python Flask
  - GitHub API (REST and GraphQL)
- **Styling**:
  - CSS Flexbox and Grid
  - Custom themes for light and dark modes

---

## Getting Started

### Prerequisites

- **Node.js** (for the React frontend)
- **Python 3.8+** (for the Flask backend)
- **GitHub API Token** (to access GitHub APIs)

### Installation

1. **Clone the Repository**:
```bash
git clone https://github.com/MeFerdi/github-profile-viewer.git
```
```bash
cd github-profile-viewer
```
#### Set Up the Backend:

Navigate to the backend directory:

```bash
cd backend
Install Python dependencies:
```

```bash
pip install -r requirements.txt
Create a .env file and add your GitHub API token:
```
plaintext

GITHUB_TOKEN=your_github_token_here

Start the Flask backend:
```bash

python app.py
```
### Set Up the Frontend:

Navigate to the frontend directory:

```bash
cd ../frontend
```
#### Install Node.js dependencies:

```bash
npm install
```
#### Start the React frontend:

```bash
npm start
```
#### Open the Application:

The frontend will open in your browser at http://localhost:3000.

### Usage
- Enter a GitHub Username:

- Type a GitHub username in the search bar and click Fetch Data.

- View Profile Details:

The user's profile, repositories, contributions, and README content will be displayed in floating cards.

#### Toggle Theme:

- Click the sun/moon icon in the top-right corner to switch between light and dark modes.

##### Project Structure
```bash
github-profile-viewer/
├── backend/
│   ├── app.py                  # Flask backend server
│   ├── requirements.txt        # Python dependencies
│   ├── .env                    # Environment variables (GitHub token)
│   └── README.md               # Backend documentation
│
├── frontend/
│   ├── public/
│   │   └── index.html          # HTML template
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── Header.js       # Header component
│   │   │   ├── Profile.js      # Profile component
│   │   │   ├── Repos.js        # Repositories component
│   │   │   ├── Contributions.js # Contributions component
│   │   │   └── ThemeToggle.js  # Light/dark mode toggle
│   │   ├── App.js              # Main React component
│   │   ├── App.css             # Global styles
│   │   ├── theme.js            # Light/dark theme configuration
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Base styles
│   ├── package.json            # Frontend dependencies
│   └── README.md               # Frontend documentation
│
└── README.md                   # Project documentation
```
### Available Scripts
In the frontend directory, you can run:
```bash
npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.
```
```bash
npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
```
```bash
npm test
Launches the test runner in interactive watch mode.
```
```bash
npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
```