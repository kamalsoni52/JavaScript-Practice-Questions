// const table = [5,8,7,6,11]

// const newtable = table.filter((value,i,values)=>{
//     return value>7;

// });

// console.log(newtable)
// output [ 8, 11 ]

Array.prototype.customeFilter = function (callback){
    let filterArray = []
    for(i = 0 ; i<this.length ; i++){
        if(callback(this[i],i,this)){           
            filterArray.push(this[i]);
        }
    }

    return filterArray
}
let newt = [4,89,54,2,63,7,3,6,97,1,64,5,1,7,9,6,2]
let newtable = newt.customeFilter((value,i, values)=>{
    return value > 10;
})
console.log(newtable)
