import React from "react";

const UserCard = ({ user }) => {
  if (!user) {
    return <div className="user-card">loading...</div>;
  }
  const getColor = () => {
    if (parseInt(user.user_group_id) === 1) {
      return { backgroundColor: "#ffba2d" };
    }
    return { backgroundColor: "#a5a5a5" };
  };
  const renderUserPermissions = () => {
    const { permissions } = user;
    return permissions.map(permission => {
      return (
        <span
          key={`permission${permission.user_id}${permission.permission_id}`}
          className="permission-name"
        >
          {permission.name}
        </span>
      );
    });
  };
  return (
    <div className="user-card">
      <div className="color-indicator" style={getColor()} />
      <div className="user-information">
        <span>{user.username}</span>
        <span>{user.email}</span>
      </div>
      <div className="user-permissions">{renderUserPermissions()}</div>
    </div>
  );
};

export default UserCard;
