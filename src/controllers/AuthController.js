import AuthService from "../services/AuthService";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;
    const admin = await AuthService.login(email, password);
    if (admin) {
      res.json(admin);
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  }

  
}

export default new AuthController();
