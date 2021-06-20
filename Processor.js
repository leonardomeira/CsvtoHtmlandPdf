class Processor
{
    static process(data)
    {
        let rows = data.split('\r\n')
        let singleRows = []
        rows.forEach(row => {
            let arr = row.split(',')
            singleRows.push(arr)
        })
        return singleRows
    }
}

module.exports = Processor