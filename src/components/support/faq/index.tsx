import { PlusIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

export interface FAQType {
  category: string;
  faqs: FAQITemProps[];
}

interface FAQITemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQITemProps> = ({ question, answer }) => {
  const [active, setActive] = React.useState(0);
  const contentEl = React.useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${styles.faqItem} ${
        active === 1 ? styles.activeItem : styles.inactiveItem
      }`}
    >
      <button
        onClick={() => setActive(active === 0 ? 1 : 0)}
        className={styles.faqBtn}
      >
        <span>{question}</span>{" "}
        <PlusIcon className={active === 1 ? styles.cancel : ""} />
      </button>
      <div
        ref={contentEl}
        className={styles.faqBody}
        style={
          active === 1 && contentEl.current
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

interface FAQProp {
  faqs: FAQType[];
}

const Faq: React.FC<FAQProp> = ({ faqs }) => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);

  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  const isInView1 = useIsInViewport(ref1);
  const isInView2 = useIsInViewport(ref2);
  const isInView3 = useIsInViewport(ref3);
  const isInView4 = useIsInViewport(ref4);

  const categories = [
    {
      name: "Getting started",
      scrollId: "gettingStarted",
      active: isInView1,
    },
    {
      name: "Sending and Receiving",
      scrollId: "sending",
      active: isInView2,
    },
    {
      name: "Security",
      scrollId: "security",
      active: isInView3,
    },
    {
      name: "Other Topics",
      scrollId: "other",
      active: isInView4,
    },
  ];

  return (
    <section className={styles.faqBg}>
      <div className={`siteWrapper ${styles.faq}`}>
        <div className={styles.faqCategory}>
          {categories.map((item, index) => (
            <p
              key={index}
              className={item.active ? styles.active : ""}
              role="button"
              tabIndex={0}
              onClick={() => scrollToCategory(item.scrollId)}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className={styles.faqWrap}>
          <div ref={ref1} id="gettingStarted">
            <p className={styles.categoryTtl}>Getting Started</p>
            <div className={styles.faqList}>
              {faqs[0].faqs.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div ref={ref2} id="sending">
            <p className={styles.categoryTtl}>Sending and Receiving</p>
            <div className={styles.faqList}>
              {faqs[1].faqs.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div ref={ref3} id="security">
            <p className={styles.categoryTtl}>Security</p>
            <div className={styles.faqList}>
              {faqs[2].faqs.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div ref={ref4} id="other">
            <p className={styles.categoryTtl}>Other topics</p>
            <div className={styles.faqList}>
              {faqs[3].faqs.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };

const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  React.useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
