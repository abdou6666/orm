// TODOs:
/*
    create_db (init method?)
    convert models into tables ?? i need graphe DS to resolve models correctly (relations)
    listen to schema changes & update db schema (maybe flag for devmode in config when setting up orm)
    the models by default supports simple crud operations
    the models supports relations (1 to 1 || 1 to N || N to N)
    hard : the model supports methods chaining for joins & queries
    support sql queries (string)

    make migrations files? (creation_date_table_name) up & down methods

    cli ?? generation models/migrations

*/

// _____________________________
/*
class A extends BaseModel {
    constructor() {
        super();
    }
    table = 'name'

    schema must at least contain primary key
    schema() {
        return {
            id: [Type.ID,Validation.],
            name: Type.STRING,
        }

    }
}
*/
// _____________________________


/*

    import queryBuilder from '...'
    const res = queryBuilder('table_name').methods....

    const execSql = queryBuilder().rawSQL();
    const queryResult = await execSql('select * from table1 as x join table2 as y on x.id = y.id')
*/