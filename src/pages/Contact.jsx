import { useState } from "react"

const Contact = (props) => {
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" })
  const [errorMessage, setErrorMessage] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true)

  const handleContactForm = (e) => {
    switch (e.target.name) {
      case "name":
        setContactData({ ...contactData, name: e.target.value })
        break;
      case "email":
        const email = e.target.value
        setContactData({ ...contactData, email: email })
        setIsEmailValid(validateEmail(email))
        break;
      case "message":
        setContactData({ ...contactData, message: e.target.value })
        break;
      default:
    }
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contactData.name.trim() === "" || contactData.email.trim() === "" || contactData.message.trim() === "") {
      setErrorMessage("All fields are required.")
      return
    }
    if (!isEmailValid) {
      setErrorMessage("Please enter a valid email address.")
      return
    }
    // send contact form data to backend
    console.log(contactData)
  }

  return (
    <>
      <h1>Contact Form</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }} className="px-5">

        {/* ============ left side ==========================  */}

        <div style={{ width: "80%" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="John Doe"
                value={contactData.name}
                onChange={handleContactForm}
              />
            </div>

            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="jndoe@example.com"
                value={contactData.email}
                onChange={handleContactForm}
              />
              {!isEmailValid && <div style={{ color: "red" }}>Please enter a valid email address.</div>}
            </div>

            <div style={{ width: "80%" }}>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                placeholder="Your message here..."
                value={contactData.message}
                onChange={handleContactForm}
              />
            </div>

            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

            <div style={{ marginTop: "1rem" }}>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )

}

export default Contact
