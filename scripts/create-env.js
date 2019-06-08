const fs = require('fs')
fs.writeFileSync('../.env', 
`API_KEY=${process.env.API_KEY}\n
AUTH_DOMAIN=${process.env.AUTH_DOMAIN}\n
DATABASE_URL=${process.env.DATABASE_URL}\n`)