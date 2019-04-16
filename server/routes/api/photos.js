
const express = require('express');
const router = express.Router();
const axios = require('axios')
const { UNSPLASH_API_HOST} = require('../../constants');

router.get('/:random', async (req, res, next) => {
	try {
    let response =  await axios.get(`${UNSPLASH_API_HOST}/photos/random?client_id=${process.env.UNSPLASH_API_KEY}`)
		res.json({success:true, response:response.data})
	} catch (error) { 
		res.json({success:false, error})
  }
});

module.exports = router;
