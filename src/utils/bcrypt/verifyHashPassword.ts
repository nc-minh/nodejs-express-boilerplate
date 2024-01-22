import bcypt from 'bcrypt';

const verifyHashPassword = async (password: string, hashPassword: string) => {
  try {
    return await bcypt.compare(password, hashPassword);
  } catch (error) {
    return false;
  }
};

export default verifyHashPassword;
