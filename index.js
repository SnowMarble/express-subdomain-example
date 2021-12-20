import express from 'express'
import subdomain from 'express-subdomain'

// imports routers
import api from './routers/api.js'
import blog from './routers/blog.js'

const PORT = process.env.PORT || 3000
const app = express()

// Sets the subdomain offset to one more than the number of points in the host name.
// ex) localhost -> 1  example.com -> 2
app.set('subdomain offset', 1)

// register subdomain
app.use(subdomain('api', api))
app.use(subdomain('blog', blog))
// now we can access api.localhost and blog.localhost

app.listen(PORT, () => console.log('server is running on port ' + PORT))
