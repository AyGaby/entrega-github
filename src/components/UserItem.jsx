import "../styles/ResultItem.css";

const UserItem = ({ item, onClick }) => (
  <div onClick={onClick} className="result-item">
    <img
      src={item.avatar_url || ""}
      alt={`${item.login}'s avatar`}
      className="avatar"
    />
    <h3>{item.login || "No Name"}</h3>
    <p>Type: {item.type || "-"}</p>
    <p>Score: {item.score || 0}</p>
  </div>
);

export default UserItem;
