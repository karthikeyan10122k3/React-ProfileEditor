const ProfileContainer = (props) => {
  return (
    <div className="profile-container">
      <img src="Karthikeyan_R.jpg" alt="Profile Pic" className="profile-pic" />

      <h1>Karthikeyan R</h1>
      <p>
        <b>UserName: </b>
        {props.userName}
      </p>
      <p>
        <b>Email: </b>
        {props.email}
      </p>
      <p>
        <b>contact: </b>
        {props.contact}
      </p>
      <button
        className="edit-btn"
        onClick={() => {
          props.setShowEditPage(!props.showEditPage);
        }}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileContainer;
