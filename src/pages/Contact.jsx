const Contact = () => {
  const handleSubmit = (formData) => {
    formData.preventDefault();
    formData = new FormData(formData.target);
    const formdetails = Object.fromEntries(formData.entries());
    console.log(formdetails);
  };

  return (
    <>
      <div className="container my-5">
        <div className="card text-center mx-auto" style={{width: "100%" , maxWidth:"35rem"}}>
          <div className="card-body">
            <h1 style={{ fontFamily: "sans-serif" }}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="Enter Your Name"
                  required
                  name="userName"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                  name="userEmail"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter Your Messages Here..."
                  required
                  name="userMessage"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-outline-primary w-100">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
