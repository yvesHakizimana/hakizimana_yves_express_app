const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

// just a small weclome message.
app.get('*', (req, res) => {
    res.send("Hello DevOps!")
})

app.listen(PORT, () => {
    console.log(`The app connected to the ${PORT} successfully`)
})