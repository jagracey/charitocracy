
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};





exports.pushVote = function(req){
  console.log(req,res);
  res.send('true');
};
