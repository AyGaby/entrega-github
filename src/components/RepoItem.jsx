import "../styles/ResultItem.css";

const RepoItem = ({ item, onClick }) => (
  <div onClick={onClick} className="result-item">
    <img
      src={item.owner.avatar_url || ""}
      alt={`${item.name}'s avatar`}
      className="avatar"
    />
    <h3>{item.name || "No Name"}</h3>
    <p>Default Branch: {item.default_branch || ""}</p>
    <p>Description: {item.description || ""}</p>
    <p>Stars: {item.stargazers_count || 0}</p>
    <p>id: {item.id || ""} </p>
    <p>Name: {item.Name || ""}</p>
    <p>avatar_url: {item.avatar || ""}</p>
  </div>
);

export default RepoItem;
