const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const dynamicContent = 'This is the root page with dynamic content.';
    res.render('menu', { dynamicContent });
});

router.get('/menu1', (req, res) => {
    const dynamicContent = 'This is dynamic content for Menu 1';
    res.send(dynamicContent);
});

router.get('/menu2', (req, res) => {
    const dynamicContent = 'This is dynamic content for Menu 2';
    res.send(dynamicContent);
});
  
module.exports = router;