function madlib() {
    var form =          document.getElementById('myForm');
    var span = document.getElementById('madlib');
    
    var adjective1 =    document.getElementsByName('adjective1')[0].value;
    var adjective2 =    document.getElementsByName('adjective2')[0].value;
    var adjective3 =    document.getElementsByName('adjective3')[0].value;
    var adjective4 =    document.getElementsByName('adjective4')[0].value;
    var nationality =   document.getElementsByName('nationality')[0].value;
    var person =        document.getElementsByName('person')[0].value;
    var noun1 =         document.getElementsByName('noun1')[0].value;
    var noun2 =         document.getElementsByName('noun2')[0].value;
    var noun3 =         document.getElementsByName('noun3')[0].value;
    var plural_noun =   document.getElementsByName('plural_noun')[0].value;
    var number1 =       document.getElementsByName('number1')[0].value;
    var number2 =       document.getElementsByName('number2')[0].value;
    var shape =         document.getElementsByName('shape')[0].value;
    var food1 =         document.getElementsByName('food1')[0].value;
    var food2 =         document.getElementsByName('food2')[0].value;
    
    madlib =    'Pizza was invented by a ' + adjective1 + ' ' + nationality + 
                ' chef named ' + person + '. To make a pizza, you need to take a lump of ' + noun1 + 
                ', and make a thin, round ' + adjective2 + ' ' + noun2 + 
                '. Then you cover it with ' + adjective3 + ' sauce '  + adjective4 + 
                ' cheese, and freshly chopped '  + plural_noun + '. When it is done, cut it into '  + shape +
                's. Some kids like ' + food1 + ' pizza the best, but my favorite is the ' + food2 + 
                ' pizza. If I could, I would eat pizza ' + number2 + ' times a day!';
    
    span.textContent = madlib;
}


function reset() {
    var form = document.getElementById('myForm');
    form.reset();
}
