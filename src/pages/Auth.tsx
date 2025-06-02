import { useState } from "react";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const  Auth:React.FC = () => {

  const [activeTab, setActiveTab] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async () => {
    if(activeTab === "login") {
      const res = await loginUser(email, password);
      if(res.success) {
        navigate("/dashboard");
      }
      else {
        console.error("Login failed:", res.message);
      }

    }
    else{
      console.log("Registering user:", { name, email, password });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Ibra<span className="text-blue-600">Track</span>
          </h1>
          <p className="text-gray-600">Sign in to manage your car repair records</p>
        </div>

        {/* Main Card */}
        <div className="card bg-white shadow-lg">
          <div className="card-body">
            {/* Authentication Header */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Authentication</h2>
              <p className="text-gray-600 text-sm">Sign in to your account or create a new one</p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Email Input */}
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full bg-gray-200 text-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-full bg-gray-200 text-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Forgot Password Link */}
              {activeTab === "login" && (
                <div className="text-right">
                  <button
                    type="button"
                    className="link link-primary text-sm"
                    onClick={() => console.log("Forgot password clicked")}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button 
                  type="button" 
                  className="btn bg-blue-500 w-full border-none shadow-none"
                  onClick={handleSubmit}
                >
                  {activeTab === "login" ? "Sign In" : "Create Account"}
                </button>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                {activeTab === "login" 
                  ? "Don't have an account? " 
                  : "Already have an account? "
                }
                <button
                  className="link link-primary"
                  onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")}
                >
                  Click {activeTab === "login" ? "Register" : "Login"} above
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;