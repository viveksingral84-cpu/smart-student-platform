import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, db } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      if (isRegister) {
        // ================= REGISTER =================

        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        const user = userCredential.user;

        // Create student document in Firestore
        await setDoc(doc(db, "students", user.uid), {
          email: user.email,
          name: "Student",
          role: "student",
          createdAt: serverTimestamp(),
        });

        setMessage("Account created successfully!");

        setTimeout(() => {
          navigate("/");
        }, 800);

      } else {
        // ================= LOGIN =================

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        setMessage("Login successful!");

        setTimeout(() => {
          navigate("/");
        }, 800);
      }

    } catch (error) {
      console.error(
        "Firebase Authentication / Firestore Error:",
        error
      );

      if (error.code === "auth/email-already-in-use") {
        setMessage("This email is already registered.");

      } else if (error.code === "auth/invalid-credential") {
        setMessage("Incorrect email or password.");

      } else if (error.code === "auth/weak-password") {
        setMessage(
          "Password should contain at least 6 characters."
        );

      } else if (error.code === "auth/invalid-email") {
        setMessage(
          "Please enter a valid email address."
        );

      } else if (error.code === "permission-denied") {
        setMessage(
          "Database permission denied. Please check Firestore rules."
        );

      } else {
        setMessage(
          error.code + " - " + error.message
        );
      }

    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsRegister(!isRegister);
    setMessage("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-page">

      <div className="login-background-shape shape-one"></div>
      <div className="login-background-shape shape-two"></div>

      <div className="login-card">

        <div className="login-logo">
          <div className="logo-icon">🎓</div>
        </div>

        <div className="login-header">

          <h1>
            Smart Student
          </h1>

          <h2>
            {isRegister
              ? "Create your account"
              : "Welcome back!"}
          </h2>

          <p>
            {isRegister
              ? "Start your academic and career journey."
              : "Continue your academic and career journey."}
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >

          <div className="input-group">

            <label>
              Email Address
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                ✉
              </span>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

          </div>

          <div className="input-group">

            <label>
              Password
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                🔒
              </span>

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
                minLength="6"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

          </div>

          {!isRegister && (
            <div className="forgot-password">

              <button type="button">
                Forgot password?
              </button>

            </div>
          )}

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isRegister
              ? "Create Account"
              : "Login"}
          </button>

        </form>

        {message && (
          <div
            className={`login-message ${
              message.includes("successfully") ||
              message.includes("Login successful")
                ? "success"
                : "error"
            }`}
          >
            {message}
          </div>
        )}

        <div className="login-divider">
          <span>
            OR
          </span>
        </div>

        <div className="switch-account">

          <span>
            {isRegister
              ? "Already have an account?"
              : "Don't have an account?"}
          </span>

          <button
            type="button"
            onClick={switchMode}
          >
            {isRegister
              ? "Login"
              : "Create Account"}
          </button>

        </div>

        <div className="login-footer">

          <span>
            🎓
          </span>

          <p>
            Build your skills. Shape your career.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;