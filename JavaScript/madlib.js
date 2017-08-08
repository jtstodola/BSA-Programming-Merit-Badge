function madlib() {
    var inputs = document.querySelectorAll("input[type=text], input[type=number]")
    var input_values = new Array;
    var text = document.getElementById('madlib_text');
    
    for (var i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    console.log(input_values);
    
    var madlib ='Pizza was invented by a ' + input_values[0] + ' ' + input_values[1] + 
                ' chef named ' + input_values[2] + '. To make a pizza, you need to take a lump of ' 
                + input_values[3] + ', and make a thin, round ' + input_values[4] + ' ' 
                + input_values[5] + '. Then you cover it with ' + input_values[6] + ' sauce, '  
                + input_values[7] + ' cheese, and freshly chopped '  + input_values[8] 
                + '. When it is done, cut it into ' + input_values[9] + ' ' + input_values[10] 
                + '. Some kids like ' + input_values[11] + ' pizza the best, but my favorite is the ' 
                + input_values[12] +  ' pizza. If I could, I would eat pizza ' + input_values[13] 
                + ' times a day!';

    text.textContent = madlib;
}


function reset() {
    var form = document.getElementById('myForm');
    form.reset();
}
