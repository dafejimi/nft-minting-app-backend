# **NFT Minting API**  
🚀 **A backend service for minting NFTs, storing metadata, and retrieving user-owned NFTs. Built with Node.js, Express.js, and MongoDB.**  

---

## **🔗 Live API**  
- 🌍 **Deployed API**: [Live API URL](https://social-deana-dafe-6dd7000c.koyeb.app/)  
- 📂 **Frontend Repository**: [GitHub Repo](https://github.com/yourusername/nft-minting-frontend)  

---

## **📌 Features**  
✅ **Store NFT metadata** (MongoDB)  
✅ **Retrieve NFT metadata by ID**  
✅ **Fetch all NFTs owned by a specific wallet**  
✅ **CORS & Security Middleware Enabled**  
✅ **Error Handling & Logging**  

---

## **🛠️ Tech Stack**
- **Node.js** (Express.js for API)  
- **MongoDB** (Mongoose for ORM)  
- **CORS & Helmet** (Security Enhancements)  

---

## **🛠️ API Endpoints**
### **1️⃣ Store NFT Metadata**
- **Method**: `POST`  
- **Endpoint**: `/api/nft`  
- **Description**: Stores NFT metadata in MongoDB  
- **Request Body**:
```json
{
  "nftId": 12345,
  "name": "Cool NFT",
  "description": "This is a test NFT",
  "logoUrl": "https://example.com/nft.png",
  "userWalletAddress": "0xYourWalletAddress"
}
```
- **Response**:
```json
{
  "success": true,
  "data": {
    "nftId": 12345,
    "name": "Cool NFT",
    "description": "This is a test NFT",
    "logoUrl": "https://example.com/nft.png",
    "userWalletAddress": "0xYourWalletAddress"
  }
}
```

---

### **2️⃣ Get NFT by ID**
- **Method**: `GET`  
- **Endpoint**: `/api/nft/:nftId`  
- **Description**: Retrieves metadata of a specific NFT  
- **Response**:
```json
{
  "success": true,
  "data": {
    "nftId": 12345,
    "name": "Cool NFT",
    "description": "This is a test NFT",
    "logoUrl": "https://example.com/nft.png",
    "userWalletAddress": "0xYourWalletAddress"
  }
}
```

---

### **3️⃣ Get NFT Gallery by Wallet**
- **Method**: `GET`  
- **Endpoint**: `/api/nft/gallery/:userWalletAddress`  
- **Description**: Fetches all NFTs owned by a specific wallet  
- **Response**:
```json
{
  "success": true,
  "data": [
    {
      "nftId": 12345,
      "name": "Cool NFT",
      "description": "This is a test NFT",
      "logoUrl": "https://example.com/nft.png",
      "userWalletAddress": "0xYourWalletAddress"
    }
  ]
}
```

---

## **🚀 Getting Started**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/nft-minting-backend.git
cd nft-minting-backend
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the root directory and add:  
```
PORT=4000
MONGO_URI=mongodb+srv://your_mongo_connection_string
```

### **4️⃣ Run the Server**
```bash
npm start
```

---

## **🔐 Security Enhancements**
- **Helmet.js** to protect against web vulnerabilities  
- **CORS enabled** for secure frontend-backend communication  
- **Error Handling Middleware** for consistent API responses  

---

## **📜 Submission Steps**
✅ **API Deployed** (Link above)  
✅ **GitHub Repository Created & Shared**  
✅ **Frontend Integration Completed**  
✅ **Invited `cytric-jobs` to Repository**  

---

Made with ❤️ by **[DAFE]** 🚀
