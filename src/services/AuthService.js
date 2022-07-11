import query from "../config/db";
import connection from "../config/db";

const userObject = [
  {
    name: "admin",
    password: "admin",
  },
  {
    name: "user",
    password: "user",
  },
];

class AuthService {
  async login(email, password) {
    const [admin] = await query("SELECT * FROM Admin WHERE email = ?", [email]);
    console.log(admin);
    if (admin.password === password) {
      return admin;
    }
    return null;
  }
}

export default new AuthService();
