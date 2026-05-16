// Keepalive — pinga il backend ogni 10 minuti
setInterval(() => {
  fetch('https://personalcare-backend-c20r.onrender.com/health')
    .then(() => console.log('Backend sveglio'))
    .catch(() => console.log('Backend non raggiungibile'));
}, 600000);
