import React from "react";
import styles from "./Card.module.css";
import "normalize.css";
import Image from "next/image";
const dayjs = require("dayjs");
import Link from "next/link";

const Card = (props) => {
  return (
    <Link className={styles.link} href={`/article/${props.id}`}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src={props.photo_url}
            width={380}
            height={200}
            alt={props.id}
            loading="lazy"
          />
        </div>
        <h1 style={{ fontSize: 26, marginTop: 0, color: "#000" }}>
          {props.title}
        </h1>
        <p style={{ color: "#666666", fontSize: 18, paddingTop: 10 }}>
          {props.category}
        </p>
        <div className={styles.cardInfo}>
          <h4 style={{ marginTop: 0, marginBottom: 0, color: "blue" }}>
            Read Article
          </h4>
          <p
            style={{
              marginTop: 0,
              marginBottom: 0,
              color: "#666666",
              fontSize: 18,
            }}
          >
            {dayjs(props.created_at).format("YYYY mm dddd")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
