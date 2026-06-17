const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('<h1>Docker Web Server successfully kaj kortese! 🎉</h1>');
});

// Explicitly binding to 0.0.0.0 so Docker can expose it
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});