
 let num=prompt("enter your number:")

function pt2(num) {
    var i, j;
    for (i = num; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            document.write(i)
        }
        document.write('<br/>')
    }
}
pt2(num)


function pattern(num) {
    var i, j;
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= i; j++) {
            document.write(i)
        }
        document.write('<br/>')
    }
}
pattern(num);


/*

function pattern(num) {
    var i, j, k;
    for (i = 1; i <= num; i++) {
        for (k = 1; k <= (num - i); k++) {
            document.write("&nbsp;")
        }
        for (j = 1; j <= i; j++) {

            document.write('*')
        }
        document.write('<br/>')
    }
}
pattern(5);       


   function pattern1(num) {
    var i, j, k;
    for (i = num; i>=1; i--) {
        for (k = 1; k <=num-i; k++) {
            document.write('&nbsp;')
        }
        for (j = 1; j <= i; j++) {

            document.write('*')
        }
        document.write('<br/>')
    }
}
pattern1(5);   


*/

 //hollow pattern of triangle
/*
function pattern1(num) {
    var i, j, k;
    for (i = 1; i <= num; i++) {
        for (k = 5; k >= i; k--) {
            document.write('&nbsp; &nbsp;')
        }
        for (j = 1; j <= ((i * 2) - 1); j++) {
            if (i == 1 || i == 5 || j == 1 || j == ((i * 2) - 1))
             {
                document.write(' * ')
             }
            else
             {
                document.write('&nbsp; &nbsp;')
             }
        }
        document.write('<br/>')
    }
}
pattern1(5);



*/