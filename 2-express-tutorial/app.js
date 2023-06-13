
const express = require('express')
const app = express()

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
}
