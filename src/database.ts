import fs from "node:fs/promises";
import { json } from "stream/consumers";

//DATABASE.JS É O NOVO ARQUIVO, AONDE VAI SER ARMAZENADO OS DADOS;
const databasePath = new URL('../database.json', import.meta.url);

export class Database {
    
    database:any = {}

    constructor() {
        fs.readFile(databasePath, 'utf8')
        .then(data => {
            this.database = JSON.parse(data);
        }).catch(() => {
            this.persist();
        });
    }

    //TODA VEZ QUE EU CHAMAR O MÉTODO PERSIST, VAI SALVAR;
    //SÓ PODE SER USANDO DENTRO DA CLASSE;
    persist() {
        fs.writeFile(databasePath, JSON.stringify(this.database))
    }
    
    select(table:string):object {
        const data = this.database[table] ?? [] 
        //?? VERIFICA SE A CONDIÇÃO DO LADO FOR NULL/UNDEFINED;

        return data;
    }
    insert(table:string, data:object):object {
        if (Array.isArray(this.database[table])) {
            //SE SIM ENTRA AQUI;
            this.database[table].push(data);
            this.persist();
        } else {
            //SE NÃO ENTRA AQUI;
            this.database[table] = [data];
        }
        return data
    }
}