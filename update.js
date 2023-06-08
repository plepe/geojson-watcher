const async = require('async')

const config = require('./src/config')
const repository = require('./src/repository')
const sources = require('./src/sources')

async.waterfall([
  (done) => config.load(done),
  (done) => repository.check(done),
  (done) => sources.download(done),
], (err) => {
  if (err) { console.error(err) }
})