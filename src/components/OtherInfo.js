import React from "react";

function OtherInfo({ formData, setFormData, nasError }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(e) =>
          setFormData({ ...formData, nationality: e.target.value })
        }
      />
      {nasError && <div className="error">{nasError}</div>}
      <input
        type="text"
        placeholder="Other"
        value={formData.other}
        onChange={(e) => setFormData({ ...formData, other: e.target.value })}
      />
    </div>
  );
}

export default OtherInfo;
