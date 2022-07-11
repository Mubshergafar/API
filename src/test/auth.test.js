import axios from "axios";
import { use, expect } from "chai";

describe("Auth", () => {
  it("should be login", async () => {
    const { data } = await axios.post("http://localhost:3000/admin/login", {
      email: "admin@admin.com",
      password: "123456",
    });
    console.log(data);
    expect(data.name).to.equal("admin");
  });
});
