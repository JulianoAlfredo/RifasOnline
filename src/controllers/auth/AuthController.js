const authService = require('../../services/Auth/AuthService.js');
class AuthController {
    async login(req, res){
        const {username, password} = req.body

        try{
            const user=await authService.authenticate(username, password)

            const token = authService.generateToken(user);

            res.json({ token });
        }catch(error){
            res.status(401).json({ message: 'Falha na autenticação', error: error.message });
        }
    }
}


module.exports = new AuthController();