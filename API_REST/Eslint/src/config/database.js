require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE,
  define:{
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt':'created_at',
    'updateAt':'updated_at'
  },
  dialectOptions:{
    // timezone: 'America/Sao_Paulo'
    timezone: '-03:00'

  },
  // timezone: 'America/Sao_Paulo'
  timezone: '-03:00'

}
