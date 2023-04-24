import dotenv from 'dotenv';

dotenv.config();

const config = {
 port: process.env.PORT || 3000, // Porta do servidor
 db: {
   host: process.env.DB_HOST || 'localhost', // Endereço do banco de dados
   port: process.env.DB_PORT || 27017, // Porta do banco de dados
   name: process.env.DB_NAME || 'hotelaria', // Nome do banco de dados
   user: process.env.DB_USER || '', // Usuário do banco de dados (se necessário)
   password: process.env.DB_PASSWORD || '', // Senha do banco de dados (se necessário)
 },
 auth: {
   secret: process.env.AUTH_SECRET || 'mysecret', // Chave secreta para autenticação JWT
 },
 apiKey: process.env.API_KEY || 'myapikey', // Chave de API para acesso a recursos restritos
};

export default config;