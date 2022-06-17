'use strict';

// need to refactor // but note instructions don't tell me how to validate. AKA this is a low priority
function validateQuery(req, res, next) {
  let { yumyum } = req.query;
  if (!yumyum) {
    next('Please enter a name query parameter like this:  /hello?yumyum:grub');
  } else {
    console.log('yumyum:', yumyum); 
  }
  next();
}

module.exports = validateQuery;
