function Contact() {
    return (
        <section className="bg-light m-auto container-sm">
        <div className="row">
          <h2>Contact Me</h2>
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email:</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">Message:</label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    )
}

export default Contact;