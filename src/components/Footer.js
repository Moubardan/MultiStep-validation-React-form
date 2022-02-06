import React from "react";

function Footer({ page, setPage, handlerSubmit, formData }) {
  return (
    <div className="footer">
      <button
        disabled={page === 0}
        onClick={() => setPage((currPage) => currPage - 1)}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handlerSubmit(formData);
          setPage((currPage) => currPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Footer;
