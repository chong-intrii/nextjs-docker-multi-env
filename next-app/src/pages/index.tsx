import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const loginClick = async() => {
    console.log("请求网络接口-----");
    const params = new URLSearchParams();
					params.append("username", "administrator");
					params.append("password", '1234');
    try {
      const loginResponse = await fetch(`/sso/user/login`, {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const loginData = await loginResponse.json();
      console.log("loginData=====", loginData);
    } catch (error) {
      console.log("error===", error)
    }
   
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <button onClick={loginClick}>
            点击发送网络请求
          </button>
      </main>

      <footer className={styles.footer}>
       footer
      </footer>
    </div>
  );
}
