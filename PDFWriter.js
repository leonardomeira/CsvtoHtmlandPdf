const pdf = require('html-pdf')

class PDFWriter
{
    static writePDF(fileName, html)
    {
        pdf.create(html, {}).toFile(fileName,()=>{})
    }
}

module.exports = PDFWriter