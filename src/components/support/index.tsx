import { Contact } from "components/generalComponents";
import * as React from "react";
import { Faq, FAQType } from "./faq";
import { HeroSection } from "./hero";
import styles from "./styles.module.css";

const SupportUI = () => {
  const faqs: FAQType[] = [
    {
      category: "gettingStarted",
      faqs: [
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
      ],
    },
    {
      category: "sending",
      faqs: [
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
      ],
    },
    {
      category: "security",
      faqs: [
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
      ],
    },
    {
      category: "other",
      faqs: [
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
        {
          question: "What's Neula Wallet?",
          answer: "How don't you know?",
        },
      ],
    },
  ];
  return (
    <>
      <HeroSection />
      <Faq faqs={faqs} />
      <Contact title={"Still got questions?"} />
    </>
  );
};

export { SupportUI };
