let left_box = document.querySelector('.left_box')
let right_box = document.querySelector('.right_box')
let mid_box = document.querySelector('.mid_box')

left_box.onclick = () => 
{
    val = 0;
    console.log(val);
    if(right_box == a)
    {
        right_box.innerText = val
    }else
    {
        right_box.innerText = val
    }
}

right_box.onclick = () =>
{
    a = Math.ceil(Math.random()*100)
    console.log(a);
    if(right_box.innerText == 'Reset')
    {
        right_box.innerText = a
    }else 
    {
        right_box.innerText = a
    }
}
mid_box.onclick = () =>
{
    for(let i = 0; i <=100; i++)
    {
        if(mid_box.innerText == '')
        {
            mid_box.innerText = i
        }else 
        {
            mid_box.innerText = i
        }
    }
}













// var counterVal = 0;
// function incrementClick() {updateDisplay(++counterVal);}
// function resetCounter() {counterVal = 0;updateDisplay(counterVal);}
// function updateDisplay(val) {document.getElementById("counter-label").innerHTML = val;}