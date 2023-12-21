//let num="12";
//let result="Hello+12";
//document.write(result);

/*let sekretNam =14;
let ansler=prompt("Угадайте число");
if(ansler==14){
    alert(" Ты победил. Поздравляю");
}else{
    alert("не угадал")
}
*/


for (let i=0;i<14;i++){
        let ansler=prompt("Угадайте число");
    if(ansler==14){
        alert(" Ты победил. Поздравляю");
        break
    }else{
        alert("не угадал")
    }
}