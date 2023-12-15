const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height1').value);
    const weight = parseInt(document.querySelector('#weight1').value);
    const result = document.querySelector('#results');
    

    if(height==='' || height<0  || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
        const criteria = document.querySelector('#criteria');
        if(bmi<18.6){
            criteria.innerHTML = 'You are UnderWeight';
        }
        else if(bmi>18.8 && bmi<24.9){
            criteria.innerHTML = "You are in Normal category"

        }
        else{
            criteria.innerHTML = "You are overWeight";
        }
    }

})