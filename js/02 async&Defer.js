// ! 1. async
//     it is by default.
//     It download the JScode parallely, then run the code.


// ! 2. defer
//     It will download the whole <html> document then download the JSCode.
//     It gives error.
//     document.write() will not work with defer. 