import React from "react";

function PersonalInfo({ formData, setFormData, firstError, lastError }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      {firstError && <div className="error">{firstError}</div>}
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      {lastError && <div className="error">{lastError}</div>}
      <input
        type="text"
        placeholder="User Name"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
      />
    </div>
  );
}

export default PersonalInfo;
