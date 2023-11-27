import React from "react";
import styles from "./Footer.module.css";
import Container from "../Container/Container";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <Container>
      <div className={styles.footer}>
        <div className={styles.content}>
          <p style={{ fontSize: 20 }}>All Rights Reserved - Aon2023</p>
          <div className={styles.icons}>
            <FaFacebookSquare size={35} />
            <FaTwitterSquare size={35} />
            <TiSocialInstagram size={40} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
