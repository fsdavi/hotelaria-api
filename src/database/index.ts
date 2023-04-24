import { Sequelize } from 'sequelize';

// Variáveis de ambiente
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

// Instância do Sequelize
export const sequelize = new Sequelize({
  dialect: 'postgres', // Dialeto do banco de dados
  host: DB_HOST, // Endereço do servidor de banco de dados
  port: Number(DB_PORT), // Porta do servidor de banco de dados
  database: DB_NAME, // Nome do banco de dados
  username: DB_USER, // Usuário do banco de dados
  password: DB_PASSWORD, // Senha do banco de dados
  define: {
    timestamps: true, // Habilita os timestamps 'createdAt' e 'updatedAt'
    underscored: true // Nome das colunas em snake_case
  }
});

// Teste de conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log('Conexão estabelecida com o banco de dados.'))
  .catch((err: any) => console.error('Erro ao conectar com o banco de dados:', err))