Array.prototype.customeMap = function (cb) {
    let temp = []
    for(i = 0 ; i<this.length; i++){
        temp.push(cb(this[i],i,this));
    }
    return temp
}

const table = [2,4,6,8]

const doubleTable = table.customeMap((num)=>{

    return num*2;

})
console.log(doubleTable)
console.log(table)