import "../styles/ResultItem.css";

const UserItem = ({ item, onClick }) => (
  <div onClick={onClick} className="result-item">
    <img
      src={item.avatar_url || ""}
      alt={`${item.login}'s avatar`}
      className="avatar"
    />
    <h3>{item.login || "No Name"}</h3>
    <p>Type: {item.type || ""}</p>
    <p>Score: {item.score || 0}</p>
    <p>id: {item.id || ""} </p>
    <p>Name: {item.Name || ""}</p>
    <p>avatar_url: {item.avatar || ""}</p>
    <p>Description: {item.Description || ""}</p>
  </div>
);

export default UserItem;
