import express from 'express'
import 'dotenv/config'
import routes from './routes/index'
import swaggerDocs from './utils/swagger'
import connectDb from './utils/connect_db'

const app = express()
const port = Number(process.env.APP_PORT) || 3000

app.use(express.json())

app.listen(port, async () => {
    routes(app)
    swaggerDocs(app, port)
    await connectDb()

    console.log(`Example app listening at http://localhost:${port}`)
})

export default app
