import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home({ initialLoginData }) {
  const [loginData, setLoginData] = useState(initialLoginData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginClick = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/login", {
        method: "POST",
      });
      
      const data = await response.json();
      setLoginData(data);
      console.log("已從API路由獲取登錄數據:", data);
    } catch (error) {
      setError(error.message);
      console.log("錯誤:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={loginClick} disabled={isLoading}>
          {isLoading ? "請求中..." : "點擊發送網絡請求"}
        </button>
        
        {loginData && (
          <div style={{ marginTop: "20px" }}>
            <h3>登錄結果:</h3>
            <pre>{JSON.stringify(loginData, null, 2)}</pre>
          </div>
        )}
        
        {error && (
          <div style={{ color: "red", marginTop: "20px" }}>
            錯誤: {error}
          </div>
        )}
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}

// 在服務端獲取初始數據（如果需要）
export async function getServerSideProps() {
  // 這裡可以放置初始登錄數據獲取邏輯
  // 在這個例子中，我們不預先獲取登錄數據
  return {
    props: {
      initialLoginData: null
    },
  };
}
