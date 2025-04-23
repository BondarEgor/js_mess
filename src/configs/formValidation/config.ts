export const formConfig = {
  login: {
    required: "Login is required",
    minLength: {
      value: 5,
      message: "Login must be at least 5 characters long",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Invalid email format",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
  },
};
