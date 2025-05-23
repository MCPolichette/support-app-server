💻 On Your Development Machine (PC):
Write code

Commit & push to GitHub

Test locally with npm run dev

🍓 On the Raspberry Pi (Server):
You do these after SSHing into the Pi:

bash
Copy
Edit
ssh pi@raspberrypi.local
cd ~/projects/support-app-server
Then:

✅ 1. Pull latest code:
bash
Copy
Edit
git pull
✅ 2. Install/update dependencies:
bash
Copy
Edit
npm install
✅ 3. Start with PM2:
bash
Copy
Edit
pm2 start src/index.js --name support-app
pm2 save
pm2 startup
⚠️ Don’t forget to copy/paste the exact command PM2 gives you after pm2 startup.

🎯 In summary:
Do your dev on your PC

Do your deploy steps on the Pi
