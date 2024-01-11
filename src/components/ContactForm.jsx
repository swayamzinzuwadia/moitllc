import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can handle form submission logic here
    // console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md mt-5">
      <h2 className="text-md font-bold mb-4">GET IN TOUCH</h2>
      <h1 className="text-3xl font-bold mb-4">Ready to Get Started?</h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 border rounded w-full"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-2 border rounded w-full"
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="p-2 border rounded w-full"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-2 border rounded w-full"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white rounded-full px-4 py-2 w-52"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
