export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://json-server-test-nu.vercel.app/api"
    : "http://localhost:3004";
