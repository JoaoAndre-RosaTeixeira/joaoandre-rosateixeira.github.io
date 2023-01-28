import * as mysql from 'mysql2';

export class Database {
  private DB_URL = 'portfolio-joao_bdd.alwaysdata.net';
  private DB_USERNAME = '297915';
  private DB_PASSWORD = '46821973';
  private DB_NAME = 'portfolio-joao_bdd';

  private connection: mysql.Connection |null;

  constructor() {
    this.connection = null;
    this.initDb();
  }

  initDb() {

    this.connection = mysql.createConnection({
      host: this.DB_URL,
      user: this.DB_USERNAME,
      password: this.DB_PASSWORD,
      database: this.DB_NAME
    });
    this.connection.connect();
  }
}
