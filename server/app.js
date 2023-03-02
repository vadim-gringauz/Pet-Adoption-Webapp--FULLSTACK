require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const userRoute = require('./routes/userRouter')
const petRoute = require('./routes/petRouter')
const adminRoute = require('./routes/adminRouter')

app.use('/user', userRoute)
app.use('/pet', petRoute)
app.use('/admin', adminRoute)


app.listen(3005, async () => {
  console.log('Server is running on port 3005')
})
