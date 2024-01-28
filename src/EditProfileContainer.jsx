const EditProfileContainer = (props) => {
  return (
    <div className="edit-container">
      <form action="">
        <label htmlFor="UserName">UserName: </label>
        <input type="text" onChange={props.userNameChange} />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="text" onChange={props.emailChange} />
        <br />
        <label htmlFor="institution">contact: </label>
        <input type="text" onChange={props.contactChange} />
        <br />
        <button
          type="button"
          onClick={() => {
            props.setShowEditPage(false);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfileContainer;
