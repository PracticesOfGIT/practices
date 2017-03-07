var express = require('express');
var router = express.Router();

router.get('/archive', function(req,res,next){
   res.render('ind', { title: 'Work archived' });
});

module.exports = router;