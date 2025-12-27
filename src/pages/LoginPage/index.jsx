import Login from "../../components/Login";
import { login } from "../../services/api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      alert("Email và password không được để trống");
      setLoading(false);
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Email không đúng định dạng");
      return;
    }
    try {
      await login({ email, password });
      navigate("/dashboard");
      setLoading(false);
    } catch (error) {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Login
        handleLogin={handleLogin}
        handleGoogleLogin={handleGoogleLogin}
        loading={loading}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </>
  );
};

export default LoginPage;
