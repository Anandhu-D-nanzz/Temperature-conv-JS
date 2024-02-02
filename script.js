

// function tempConvert() {
//     var fahrenheit = document.getElementById("fahrenheit").value;
//     var celsius = document.getElementById("celsius").value;

//     if(fahrenheit != " "){                                      // see the value
//         celsius = (parseFloat(fahrenheit) - 32) / 1.8;
//     }
//     else {
//         fahrenheit = (parseFloat(celsius) * 1.8) + 32;
//     }

//     document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1)
//     document.getElementById("celsius").value = parseFloat(celsius).toFixed(1)
// }
// tempConvert()

// function cleared() {
//     document.getElementById("fahrenheit").value = " ";
//     document.getElementById("celsius").value = " ";
// }
// cleared()

// -------------------------------------------------------------------------

function tempConvert() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if(fahrenheit != 0){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }
    else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1)
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1)
}
// tempConvert()

function cleared() {
    document.getElementById("fahrenheit").value = " ";
    document.getElementById("celsius").value = " ";
}
// cleared()