import React, { useState } from "react"
import { Fade } from "react-reveal"

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill out all fields.")
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch("https://sheetdb.io/api/v1/kvrchw9orn45e", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              Email: email,
              Message: message,
            },
          ],
        }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      console.log("Success:", data)

      setName("")
      setEmail("")
      setMessage("")
      setErrorMessage("")
    } catch (error) {
      console.error("Error:", error)
      setErrorMessage("Something went wrong. Please try again later.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <Fade>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? Fill out the form below, and Rudra will get back to you
              as soon as possible.
            </p>
          </Fade>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id="message"
              placeholder="Message"
              className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <button
              type="submit"
              className={`mx-auto w-32 rounded-md bg-blue-500 p-2 font-medium text-white hover:bg-blue-600 ${
                submitting && "opacity-50 cursor-not-allowed"
              }`}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form

