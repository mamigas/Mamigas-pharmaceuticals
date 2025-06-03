"use client";
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/send-email", {
        name: form.name,
        email: form.email,
        message: `${form.message}\n\nPhone: ${form.phone}`,
      });

      if (res.status === 200) {
        toast.success("Email sent successfully 😊");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong 😔");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong 😔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="space-bottom">
        <div className="container">
          <form
          onSubmit={handleSubmit}
            className="contact-form "
            style={{
              backgroundImage: "url('/assets/img/bg/contact_form_bg.png')",
            }}
          >
            <div className="input-wrap">
              <h2 className="sec-title">Get In Touch!</h2>
              <div className="row">
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <i className="fal fa-user"></i>
                </div>
                <div className="form-group col-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                  <i className="fal fa-envelope"></i>
                </div>
                <div className="form-group col-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  <i className="fal fa-phone"></i>
                </div>
                <div className="form-group col-12">
                  <textarea
                    name="message"
                    cols={30}
                    rows={3}
                    className="form-control"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type..."
                    required
                  ></textarea>
                  <i className="fal fa-pencil"></i>
                </div>
                <div className="form-btn col-12">
                  <button
                    type="submit"
                    className="th-btn btn-fw"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "SEND"}
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default ContactForm;
