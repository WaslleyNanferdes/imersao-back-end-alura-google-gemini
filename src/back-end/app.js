import express from 'express'


const app = express()

app.listen(Number(process.env.PORT_SERVER), () => {
    console.log('Server iniciado...')
})

app.get('/api', (request, result) => {
    result.status(200).send('Request realizado com sucesso!')
})