import express from 'express'
import routes from './routes/index'
import swaggerDocs from './utils/swagger'

const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
    routes(app)
    swaggerDocs(app, port)

    console.log(`Example app listening at http://localhost:${port}`)
})

export default app
