const areYou = (birhdayDate) => {
    const birthday = new Date(birhdayDate)
const now = new Date()
const almost = now - birthday
const fourteen = new Date(1984, 0, 1)
if(almost < fourteen){
    return false
}
return true
}
const date1 = '2022-01-11'
const date2 = '1999-03-14'
console.log(areYou(date1))
console.log(areYou(date2))