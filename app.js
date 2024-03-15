const makeMeUniquePlease = 
[
    {id : 1, name : 'Вася'},
    {id : 2, name : 'Вася'},
    {id : 1, name : 'Вася'}
]

 const almostThere = new Set(makeMeUniquePlease.map((obj) => obj.id))
 const res = []
 for(const id of almostThere){
    res.push(makeMeUniquePlease.find((elem) => {
if(elem.id === id){
    return elem.name
}
    }))}
 
 console.log(res)