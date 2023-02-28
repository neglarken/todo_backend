import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { prisma } from './app/prisma.js'
import tableRouter from './app/tables/tables.routes.js'
import usersRouter from './app/users/users.routes.js'
import checklistsRouter from './app/checklists/checklists.routes.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'

dotenv.config()

const app = express()

async function main(){
    if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
    app.use(express.json())

    app.use('/api/tables', tableRouter)
    app.use('/api/tables/checklists', checklistsRouter)
    app.use('/api/users', usersRouter)

    app.use(notFound)
    app.use(errorHandler)

    const PORT = 5000

    app.listen(
        PORT,
        console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
}

main()
.then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })