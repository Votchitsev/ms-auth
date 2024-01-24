import express from 'express'
import 'dotenv/config'
import routes from './routes/index'
import swaggerDocs from './utils/swagger'

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(express.json())

app.listen(port, () => {
    routes(app)
    swaggerDocs(app, port)

    console.log(`Example app listening at http://localhost:${port}`)
})

export default app
