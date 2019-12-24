const signUp = {
  termsConditions: 'I read and agree to Terms & Conditions',
  signUp: 'SIGN UP',
  usernamePlaceholder: 'Username',
  emailPlaceholder: 'Email',
  passwordPlaceholder: 'Password',
  signInMessage: 'Already have an account? Sign In',
};

const signIn = {
  helloLabel: 'Hello',
  emailPlaceholder: 'Email',
  passwordPlaceholder: 'Password',
  signInButton: 'SIGN IN',
  signInLabel: 'Sign in to your account',
  signUpButton: "Don't have an account? Sign Up",
  forgotPasswordButton: 'Forgot Password',
};

const forgotPassword = {
  forgotPasswordLabel: 'Forgot Password',
  resetPasswordButton: 'RESET PASSWORD',
  enterEmailLabel: 'Please enter your email address',
};

const errors = {
  'field-required': 'This field is required',
  'field-pattern': 'The format of this field was unexpected',
  'userName-minLength': 'Username must be longer than 3 and 20 characters',
  'password-minLength': 'Password must be between 8 and 30 characters',
  'userName-maxLength': 'Username must be longer than 3 and 20 characters',
  'password-maxLength': 'Password must be between 8 and 30 characters',
  'email-pattern': 'This doesnt look like an email',
};

export default {
  signIn,
  signUp,
  errors,
  forgotPassword,
};
