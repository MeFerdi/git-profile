import React from "react";

const Profile = ({ profile, theme }) => {
  return (
    <div className="profile">
      <img
        src={profile.avatar_url}
        alt={`${profile.name}'s profile`}
        style={{ width: "100px", borderRadius: "50%", marginBottom: "10px" }}
      />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <p>Followers: {profile.followers}</p>
      <p>Public Repos: {profile.public_repos}</p>
    </div>
  );
};

export default Profile;