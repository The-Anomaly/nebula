import { adeoti, amaku, anthony, dalu, ifere, moore, naomi, oyudo } from "assets";
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
      image: ifere,
      name: "Ifere",
      role: "Engineer/CEO",
    },
    {
      image: moore,
      name: "Moore",
      role: "Engineer/CTO",
    },
    {
      image: amaku,
      name: "David",
      role: "Blockchain Dev",
    },
    {
      image: adeoti,
      name: "Adeoti",
      role: "Designer",
    },
    // {
    //   image: oyudo,
    //   name: "Oyudo",
    //   role: "Designer",
    // },
    // {
    //   image: anthony,
    //   name: "Anthony",
    //   role: "Business Analyst",
    // },
    // {
    //   image: naomi,
    //   name: "Naomi",
    //   role: "Copywriter",
    // },
    // {
    //   image: dalu,
    //   name: "Dalu",
    //   role: "Mobile Dev",
    // },
  ];
  return (
    <section className={styles.teamBg}>
      <div className={`siteWrapper ${styles.team}`}>
        <h2 className={styles.ttl}>The Team</h2>
        <p className={styles.txt}>
          Our team is made up of a talented pool of engineers, designers,
          entrepreneurs and artists working tirelessly together on the single
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
