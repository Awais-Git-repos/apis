const express = require('express');

const app = express();


app.get('/:password', (req, res) => {
    const { password } = req.params;
    console.log(password);
    try {
        if (password == '123') {
            return res.status(200).json({ msg: 'Correct Password' })
        }
        else {
            return res.status(200).json({ msg: 'InCorrect Password' })
        }
    } catch (error) {
        return res.status(400).json({ error })
    }
});


app.listen(8080, () => { console.log('Server Listening on PORT 8080') })

