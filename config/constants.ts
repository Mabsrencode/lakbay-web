// Purpose: To store all the constants used in the application.
export const config = {
  PORT: 5000,

  MESSAGE: {
    WELCOME: "You're successfully connected to MONGO API.",
  },

  DB: {
    URI: "",
  },

  ENDPOINTS: {
    MAIN: "/",
    SERVER: "/api",
    USER: {
      MAIN: "/user",
      GET_ALL: "/get/all",
      GET: "/get/:id",
      CREATE: "/create",
      UPDATE: "/update",
      DELETE: "/delete/:id",
    },
  },
};
