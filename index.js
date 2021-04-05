// Code your solutions in this file
// const cards = ['Lisa', 'Kaitlin', 'Jan']
// function writeCards(cards){
//     return (`Thank you, ${cards} for the wonderful surprise gift!`)
// }

function writeCards(names,event){
    let newArr = []
for (let i = 0; i < names.length; i++){
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArr 

}
function countDown(){
    let countDown = 0;
    while (countDown < 11){
    console.log(countDown++)
    }
}