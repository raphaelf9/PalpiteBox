const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1bVjYO_1_LkRJcArTykq7Hs4nbx8t_HOzEwSXEMv5fnE')

const run = async() => {
    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.tittle)
    
    const sheet = doc.sheetsByIndex[1]

    //Nome	Email	Whatsapp	Promo
    
    await sheet.addRow({
        Nome:'Raphael Faria',
        Email:'raphaelf9@gmail.com',
        Whatsapp:'11 912345678',
        Cupon:'aaaa111',
        Promo:'testesabc'
    })
  
    }
    catch(err){
        console.log(err)
    }
}
run()