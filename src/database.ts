export class Database {
    
    database = {}
    
    select(table:string):object {
        const data = this.database[table] ?? [] 
        //?? VERIFICA SE A CONDIÇÃO DO LADO FOR NULL/UNDEFINED

        return data;
    }
    insert(table:string, data:object):object {
        if (Array.isArray(this.database[table])) {
            //SE SIM ENTRA AQUI
            this.database[table].push(data);
        } else {
            //SE NÃO ENTRA AQUI
            this.database[table] = [data];
        }
        return data
    }
}