import type { Express } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../package.json'

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MS Auth API',
            version,
            description: 'Micro service for authentication and authorization with JWT'
        }
    },
    apis: ['./routes/*ts']
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs (app: Express, port: number) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })

    console.log(`Docs available at http://localhost:${port}/`)
}

export default swaggerDocs
