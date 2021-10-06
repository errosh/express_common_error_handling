const { Pool } = require('pg')
const pool = new Pool({ user: 'postgres',
host: 'localhost',
database: 'test',
password: 'root',
port: 5432,})

let MenuList = [];

const dbConnection = async () => {
    const client = await pool.connect()
    try {
      const mainMenuList = await client.query('SELECT * FROM module_list WHERE parent_id=0');
      const mainMenu = mainMenuList.rows;
      getChild(mainMenu,client)
      
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
}


const getChild = async (mainMenu,client)=>{
    mainMenu.forEach(async menu=>{
        const menuId    = menu.id;
        const childMenu = await client.query(`SELECT * FROM module_list WHERE parent_id=${menuId}`);
        if(!menu.parent_id){
           
        }else{
            getChild(childMenu.rows,client);
            if(childMenu.rows.length > 0){
           // console.log({menu,subMenu:childMenu.rows});
           console.log(Object.assign(menu,{subMenu:childMenu.rows}))
               let newObj  = Object.assign(menu,{subMenu:childMenu.rows});
                MenuList.push(newObj);
            }
           
        }
    })
  //  console.log(MenuList);
}







module.exports = dbConnection;
  
