# 📹 ClearConnect  

**Real-time Video Conferencing Made Simple.**  
ClearConnect is a modern web-based video calling platform powered by **WebRTC**, **Socket.IO**, and **React**. It enables users to host and join meetings with essential collaboration features—seamlessly and securely.  

[🌐 Live Demo](https://clearconnect.onrender.com/) · [💻 GitHub Repository](https://github.com/Pranay-Mathurkar/ClearConnect_VideoCall)  

---

## ✨ Features  

- 🎥 **Multi-user Video Calls** – Peer-to-peer video & audio using WebRTC  
- 💬 **Chat Support** – Built-in real-time messaging during calls  
- 🖥️ **Screen Sharing** – Present your screen to all participants  
- 🎙️ **Mute/Unmute Controls** – Flexible audio/video toggling  
- 🔒 **User Authentication** – Secure join and host options  
- 📼 **Recording** – Save meetings for later reference *(if enabled)*  
- 📱 **Responsive Design** – Works smoothly on all devices  

---

## 💻 Tech Stack  

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js, Socket.IO  
- **WebRTC**: Peer-to-peer real-time communication  
- **Database**: MongoDB (for auth and sessions)  
- **CI/CD**: GitHub Actions  
- **Hosting**: Render  



## 🔧 How It Works  

1. A user **hosts or joins a meeting** via the app.  
2. The app establishes **WebRTC peer connections**, with **Socket.IO signaling** on the backend.  
3. Users can **toggle mic/camera**, share screens, and chat in real time.  
4. The backend manages sessions, rooms, and communication between peers.  
5. (Optional) **Recording functionality** stores meeting sessions for later.  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js (v14+)  
- npm  
- MongoDB Atlas (for storing sessions/auth)  

### Installation  
```bash
git clone https://github.com/Pranay-Mathurkar/ClearConnect_VideoCall.git
cd ClearConnect_VideoCall
npm install
