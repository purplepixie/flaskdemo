const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  var ans = Number(req.query.x) + Number(req.query.y);
  var ret = { 'answer': ans }
  res.json(ret);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
