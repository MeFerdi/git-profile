from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# GitHub API base URL
GITHUB_API_URL = "https://api.github.com"

# Fetch user profile data
def fetch_user_profile(username):
    url = f"{GITHUB_API_URL}/users/{username}"
    headers = {
        "Authorization": f"token {os.getenv('GITHUB_TOKEN')}",
        "Accept": "application/vnd.github.v3+json"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None

# Fetch user repositories
def fetch_user_repos(username):
    url = f"{GITHUB_API_URL}/users/{username}/repos"
    headers = {
        "Authorization": f"token {os.getenv('GITHUB_TOKEN')}",
        "Accept": "application/vnd.github.v3+json"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None

# Fetch user contributions using GraphQL
def fetch_user_contributions(username):
    query = """
    {
        user(login: "%s") {
            contributionsCollection {
                contributionCalendar {
                    totalContributions
                    weeks {
                        contributionDays {
                            date
                            contributionCount
                        }
                    }
                }
            }
        }
    }
    """ % username

    headers = {
        "Authorization": f"token {os.getenv('GITHUB_TOKEN')}",
        "Accept": "application/vnd.github.v4+json"
    }
    response = requests.post(
        "https://api.github.com/graphql",
        json={"query": query},
        headers=headers
    )
    if response.status_code == 200:
        return response.json()
    else:
        return None
def fetch_readme(username):
    url = f"{GITHUB_API_URL}/repos/{username}/{username}/readme"
    headers = {
        "Authorization": f"token {os.getenv('GITHUB_TOKEN')}",
        "Accept": "application/vnd.github.v3+json"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json().get("content", "")
    else:
        return None
    
# API endpoint to fetch user data
@app.route("/user/<username>", methods=["GET"])
def get_user_data(username):
    profile = fetch_user_profile(username)
    repos = fetch_user_repos(username)
    contributions = fetch_user_contributions(username)
    readme = fetch_readme(username)

    if profile and repos and contributions:
        print("Profile:", profile)
        print("Repos:", repos)
        print("Contributions:", contributions)
        return jsonify({
            "profile": profile,
            "repos": repos,
            "contributions": contributions,
            # "readme": readme
        })
    else:
        return jsonify({"error": "User not found"}), 404
    

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)