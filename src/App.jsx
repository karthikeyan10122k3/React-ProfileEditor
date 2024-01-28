import { useState } from "react";
import "./App.css";
import ProfileContainer from "./ProfileContainer";
import EditProfileContainer from "./EditProfileContainer";

function App() {
  const [showEditPage, setShowEditPage] = useState(false);
  const [userName, setUserName] = useState("karthikeyan1012");
  const [email, setEmail] = useState("karthikeyan10dec2k3@gmail.com");
  const [contact, setcontact] = useState("987654321");

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const contactChange = (event) => {
    setcontact(event.target.value);
  };

  return (
    <div className="App">
      <div className="profile-edit-container">
        {showEditPage && (
          <EditProfileContainer
            userNameChange={userNameChange}
            emailChange={emailChange}
            contactChange={contactChange}
            setShowEditPage={setShowEditPage}
          />
        )}
        <ProfileContainer
          showEditPage={showEditPage}
          setShowEditPage={setShowEditPage}
          userName={userName}
          email={email}
          contact={contact}
        />
      </div>
    </div>
  );
}

export default App;
