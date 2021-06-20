class Table
{
    constructor(arr)
    {
        this.header = arr[0]
        arr.shift()
        this.body = arr
    }
    
    get RowCount()
    {
        return this.body.length
    }
    
    get ColumnCount()
    {
        return this.header.length
    }
}

module.exports = Table