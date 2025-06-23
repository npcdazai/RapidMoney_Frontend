const routes = {
  LOGIN: {
    path: "/login",
    requireLogin: false,
    allowAccessWhenLoggedIn: false,
    pageTitle: "Login",
  },
  SIGNUP: {
    path: "/signup",
    requireLogin: false,
    allowAccessWhenLoggedIn: false,
    pageTitle: "SignUp",
  },
};

export default routes;
