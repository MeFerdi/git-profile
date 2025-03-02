import React, { useState } from "react";
import axios from "axios";
// import ReactMarkdown from "react-markdown"
// import remarkGfm from "remark-gfm";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Contributions from "./components/Contributions";
import ThemeToggle from "./components/ThemeToggle";
import { lightTheme, darkTheme } from "./theme";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [contributions, setContributions] = useState(0);
  // const [readme, setReadme] = useState("");
  const [theme, setTheme] = useState(lightTheme);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/user/${username}`);
      console.log("API Response:", response.data); // Log the response
      setProfile(response.data.profile);
      setRepos(response.data.repos);
      setContributions(
        response.data.contributions.data.user.contributionsCollection
          .contributionCalendar.totalContributions
      );
      // setReadme(response.data.readme);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  // const decodeReadme = (base64Content) =>{
  //   return atob(base64Content);
  // };

  return (
    <div
      className="App"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <div className = "header-container">
      <Header />
      </div>
      {/* <ThemeToggle toggleTheme={toggleTheme} theme={theme} /> */}
      <div className="search-toggle-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ backgroundColor: theme.cardBackground, color: theme.text }}
          />
          <button
            onClick={fetchData}
            style={{ backgroundColor: theme.buttonBackground, color: theme.buttonText }}
          >
            Search
          </button>
        </div>
        <div className="theme-toggle-container">
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </div>

      <div className="grid">
        {profile && (
          <div className="card">
            <Profile profile={profile} theme={theme} />
          </div>
        )}
        {repos.length > 0 && (
          <div className="card">
            <Repos repos={repos} theme={theme} />
          </div>
        )}
        {contributions > 0 && (
          <div className="card">
            <Contributions contributions={contributions} theme={theme} />
          </div>
        )}
     {/* {readme && (
  <div className="card">
    <h3>README</h3>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {decodeReadme(readme)}
    </ReactMarkdown>
  </div>
)} */}
      </div>
    </div>
  );
}

export default App;