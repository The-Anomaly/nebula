import * as React from "react";
import styles from "./styles.module.css";

interface MemberProps {
  image: string;
  name: string;
  role: string;
}

const Member: React.FC<MemberProps> = ({ image, name, role }) => {
  return (
    <div className={styles.member}>
      <div className={styles.img}>
        <img src={image} alt={name} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers: MemberProps[] = [
    {
      image: "",
      name: "Ifere",
      role: "Engineer/CEO",
    },
    {
      image: "",
      name: "Moore",
      role: "Engineer/CTO",
    },
    {
      image: "",
      name: "Amaku",
      role: "Blockchain Dev",
    },
    {
      image: "",
      name: "Adeoti",
      role: "Designer",
    },
    {
      image: "",
      name: "Nachi",
      role: "Project Manager",
    },
    {
      image: "",
      name: "Oyudo",
      role: "Designer",
    },
    {
      image: "",
      name: "Anthony",
      role: "Business Analyst",
    },
    {
      image: "",
      name: "Naomi",
      role: "Copywriter",
    },
    {
      image: "",
      name: "Dalu",
      role: "Mobile Developer",
    },
  ];
  return (
    <section className={styles.teamBg}>
      <div className={`siteWrapper ${styles.team}`}>
        <h2 className={styles.ttl}>The Team</h2>
        <p className={styles.txt}>
          Our team is made up of a talented pool of engineers, designers,
          entrepreneurs and artists working tiredlessly together on the single
          mission to make managing your digital assets easy while bringing the
          best experience
        </p>
        <div className={styles.memberList}>
          {teamMembers.map((member, index) => (
            <Member {...member} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team };
