import http from 'http'
import url from 'url'

const server = http.createServer((request, response) => {
  // content-length формируется автоматически!
  console.log(request.url)
  const queryData = url.parse(request.url, true)
  const sum = Number(queryData.query.a) + Number(queryData.query.b)
  const multiplication = Number(queryData.query.a) * Number(queryData.query.b)
  const result = 'Sum is ' + sum + '. Multiplicaition is ' + multiplication
  response.write(String(result))
  response.end()
})

const port = 4000
server.listen(port, () => {
  console.log('Server has been started')
})
