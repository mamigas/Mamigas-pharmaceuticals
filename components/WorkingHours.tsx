"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

function WorkingHours() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
    const [loading, setLoading] = useState(false);
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/send-email", {
        name: form.name,
        email: form.email,
        message: `${form.message}\n\nPhone: ${form.number}`,
      });

      if (res.status === 200) {
        toast.success("Email sent successfully 😊");
        setForm({ name: "", email: "", number: "", message: "" });
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
    <section className="space overflow-hidden">
      <div className="container">
        <div className="appointment-row">
          <div className="schedule-box">
            <div className="shape"></div>
            <h3 className="box-title">Working Hours</h3>
            <p className="box-text">
              Variations of passages amt available are anything embarrassing.
            </p>
            <p className="box-timing">
              Monday - Tuesday: <span>9am - 6pm</span>
            </p>
            <p className="box-timing">
              Wednesday - Thursday: <span>8am - 5pm</span>
            </p>
            <p className="box-timing">
              Friday: <span>7am - 10pm</span>
            </p>
            <p className="box-timing">
              Saturday: <span>10am - 7pm</span>
            </p>
            <p className="box-timing">
              Sunday: <span>Closed</span>
            </p>
          </div>

          <div className="form-wrap">
            <div className="img-box4">
              <div className="img1">
                <img src="assets/img/mamigas/mamigas-why-chhose.jpg" alt="Doctor" />
              </div>
              <div className="img2">
                <img src="/assets/img/normal/form_1_2.jpg" alt="Clinic" />
              </div>
            </div>

            <form className="appointment-form" onSubmit={handleSubmit}>
              <h4 className="form-title">Contact Us</h4>
              <div className="row">
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="number"
                    placeholder="Phone Number"
                    value={form.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="th-btn btn-fw">
                    {loading ? "Sending..." : "SEND"}
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </section>
  );
}

export default WorkingHours;
