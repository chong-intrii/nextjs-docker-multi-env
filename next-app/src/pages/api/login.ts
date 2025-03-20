// pages/api/login.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: '只允許 POST 請求' });
    }
  
    try {
      const params = new URLSearchParams();
      params.append("username", "administrator");
      params.append("password", '1234');
      
      // 在服務端發送請求
      const loginResponse = await fetch(`https://local.mdos.intrii.com/sso/user/login`, {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      
      const loginData = await loginResponse.json();
      console.log("服務端獲取的登錄數據:", loginData);
      
      // 將數據返回給客戶端
      res.status(200).json(loginData);
    } catch (error) {
      console.error("服務端請求錯誤:", error);
      res.status(500).json({ message: '服務端請求失敗', error: error.message });
    }
  }
  