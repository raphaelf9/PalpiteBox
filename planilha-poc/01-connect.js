const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1bVjYO_1_LkRJcArTykq7Hs4nbx8t_HOzEwSXEMv5fnE')

const run = async() => {
    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.tittle)
    }
    catch(err){
        console.log(err)
    }
}
run()