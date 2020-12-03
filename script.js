var h = [];
var n = [];
let p = 4
let x = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var l;

function Clear() {
    h = [];
    n = [];
    document.getElementById("res").innerHTML = '';
}

function RunTheRandom() {
    Clear();
    p = document.getElementById('number').value -1;
    for(i=0;i<=p;i++)
    {
        getRandomInt(0,x.length-1)

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            z = Math.floor(Math.random() * (max - min + 1)) + min;
            h.push(x[z]);
        }
        n = h.join('');
        document.getElementById("res").innerHTML = n;
    }
}

function Uppercase() {
    document.getElementById("res").innerHTML = n.toUpperCase();
}
