import React from "react";

function SignUpInfo({
  formData,
  setFormData,
  passError,
  emailError,
  confPassError,
}) {
  return (
    <div className="sign-up-container">
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {emailError && <div className="error">{emailError}</div>}
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {passError && <div className="error">{passError}</div>}

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />
      {confPassError && <div className="error">{confPassError}</div>}
    </div>
  );
}

export default SignUpInfo;
