import User from '../../model/user';
import { generateToken } from '../../auth';

const LoginEmailMutation = async (root, args) => {
  const { email, password } = args;
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    return {
      token: null,
      error: 'INVALID_EMAIL_PASSWORD',
      email: null,
      name: null,
    };
  }

  const correctPassword = user.authenticate(password);

  if (!correctPassword) {
    return {
      token: null,
      error: 'INVALID_EMAIL_PASSWORD',
      email: null,
      name: null,
    };
  }

  return {
    token: generateToken(user),
    error: null,
    email: user.email,
    name: user.name,
  };
};

export default LoginEmailMutation;
