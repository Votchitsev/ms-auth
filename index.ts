import * as express from 'express'
import type { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Bun!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
