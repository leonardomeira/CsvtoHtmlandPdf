const Reader = require('./Reader')
const Writer = require('./Writer')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PDFWriter = require('./PDFWriter')

let leitor = new Reader()
let escritor = new Writer()
async function main()
{
    let result = await leitor.read('./teste.csv')
    let treatedData = Processor.process(result)

    let usuarios = new Table(treatedData)

    let html = await HtmlParser.Parse(usuarios)
    escritor.write(`${Date.now()}.html`, html)
    PDFWriter.writePDF(`${Date.now()}.pdf`, html)
}

main()