const bcrypt = require ('bcryptjs')

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'shahid',
    email: 'shahid@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'raza',
    email: 'raza@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

module.exports= users