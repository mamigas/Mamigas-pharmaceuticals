"use client";
import React, { useState } from "react";
import "@/assets/css/app.min.css";
import "@/assets/css/style.css";
import "@/assets/css/fontawesome.min.css";

const faqs = [
  {
    question: "What types of pharmaceutical products do you supply?",
    answer:
      "Mamigas provides a wide range of pharmaceutical products including prescription drugs, over-the-counter medications, and medical supplies.",
  },
  {
    question: "How can hospitals or distributors place an order?",
    answer:
      "Hospitals and distributors can place orders by contacting us through our website, phone, or email. We offer personalized support for bulk orders.",
  },
  {
    question: "Do you offer delivery services across Ethiopia?",
    answer:
      "Yes, we deliver across Ethiopia. We ensure safe and timely delivery of pharmaceutical products nationwide.",
  },
  {
    question:
      "Are your medicines approved by Ethiopian regulatory authorities?",
    answer:
      "Absolutely. All our medicines are approved by the Ethiopian Food and Drug Authority (EFDA) and meet all regulatory standards.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space" id="faq-sec">
      <div className="container">
        <div className="row gy-40 align-items-center">
          <div className="col-xl-6">
            <div className="title-area text-center text-xl-start">
              <span className="sub-title">
                <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                Frequently Asked Questions
              </span>
              <h2 className="sec-title">
                FAQs – Mamigas Pharmaceutical Services
              </h2>
            </div>

            <div className="accordion active-white">
              {faqs.map((faq, index) => (
                <div
                  className={`accordion-card ${
                    index === activeIndex ? "active" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <button className="accordion-button">{faq.question}</button>
                  </div>
                  {index === activeIndex && (
                    <div className="accordion-collapse show">
                      <div className="accordion-body">
                        <p className="faq-text">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-6">
            <div className="ps-xl-5">
              <div className="rounded-20">
                <img
                  className="w-100"
                  src="assets/img/mamigas/mamigas-faq.jpg"
                  alt="faq"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
