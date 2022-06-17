const express = require('express');
const app = express();           //Common setup (could be called anything)
const PORT =  8000;

const data = {    
}

app.get('/', function (req, res) { 
    res.send('Hello World!');     //Respond with a string
});

// Accepts an array of digits and outputs a tabulated(?) phone number: (123) 456-7890")

/*My Answer builds a string */
function createPhoneNumber(numbers) {
        
    var strBldr = "(";
        
    for (i = 0; i < 3; i++) {
        strBldr += numbers[i];
    }
    strBldr += ") ";
    for (i = 3; i < 6; i++) {
        strBldr += numbers[i];
    }
    strBldr += "-"
    for (i = 6; i < 10; i++) {
        strBldr += numbers[i];
    }

    return strBldr;
}

/* Top Answer */
// Replace finds the first encountered variable and replaces with second parameter.
function createPhoneNumberTwo(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  /* Second Top Answer */
  // array.join creates a string from the array.. f([1,2,3]) = 123
  // Return statement is the stringBuilder
  function createPhoneNumberThree(numbers){
    numbers = numbers.join(''); //no adjoining character
    return '(' + numbers.substring(0, 3) + ') ' //substring(start,end+1) -> 123
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }

app.get( '/api', (request, res) => {  //Notice ES5 arrow-func; req=request,res=response

    //respond with file/data
    response.sendFile ( __dirname + '/index.html' );   //__dirname=
});

app.get('/api1', (req, res) => {
    console.log(req.params.age);
    res.json(people);
});


app.listen(PORT, function () { 
    console.log(createPhoneNumber([6,8,7,5,2,9,7,1,3,7]));
    console.log(`Listening to Port, ${PORT}`);    
});
