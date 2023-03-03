import jwt from 'jsonwebtoken'

export const generateToken = usersId => jwt.sign(
    {
        usersId,
    },
    process.env.ACCESS_TOKEN,
    {
        expiresIn: '10d',
    }
)