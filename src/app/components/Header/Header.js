import React from "react";
import styles from "./Header.module.css";
import Container from "../Container/Container";
import Link from "next/link";
const Header = () => {
  return (
    <Container>
      <div className={styles.header}>
        <div>
          <h3>Aon 2023</h3>
        </div>
        <ul className={styles.ul}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Help</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
