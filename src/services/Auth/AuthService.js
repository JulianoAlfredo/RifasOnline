class AuthService {
    constructor() {
        this.users = [
          { id: 1, username: 'user1', password: 'password1' },
          { id: 2, username: 'user2', password: 'password2' },
        ];
      }
 // Verificar as credenciais do usuário
 async authenticate(username, password) {
    const user = this.users.find((u) => u.username === username && u.password === password);
    if (!user) {
      throw new Error('Credenciais inválidas');
    }
    return user;
  }

  // Gerar um token de autenticação (pode usar uma biblioteca de token como jsonwebtoken)
  generateToken(user) {
    // Simples exemplo de geração de token
    return `Bearer ${user.id}`;
  }
}

module.exports = new AuthService();