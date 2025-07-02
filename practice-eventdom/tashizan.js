b = document.querySelector('button#calc');
b.addEventListener('click', greeting);
function greeting() {
    let a = document.querySelector('input[name="left"]');  
    left = a.value;
    let a1 = Number(left); 

    let b = document.querySelector('input[name="right"]');  
    right = b.value;
    let b1 = Number(right);
    
    answer = a1 + b1; 
    let p = document.querySelector('span#answer');
    p.textContent = answer;

}