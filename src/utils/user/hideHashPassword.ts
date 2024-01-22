import User from 'models/types/User';

const hideHashPassword = (user: User) => {
  return {
    _id: user._id,
    username: user.username,
    password_changed_at: user.password_changed_at,
    avatar_url: user.avatar_url,
    role: user.role,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
};

export default hideHashPassword;
