let string = "";
let count = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string; 
        }
        else if(e.target.innerHTML == '-/+'){
            if(count == 0){
                count += 1;
                string = "-" + string;
                document.querySelector('input').value = string;
            }
            else if(count > 0){
                count -= 1;
                string = string.startsWith('-') ? string.slice(1) : string;
                document.querySelector('input').value = string;
            }
        }
        else if(e.target.innerHTML == 'AC' || e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target); 
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
