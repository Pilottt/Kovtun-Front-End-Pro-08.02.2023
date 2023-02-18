let a, b, c, d, first = prompt('Перше число?:');
let second = prompt('Друге число?:');
a = String(+first + +second);
b = String(first - second);
c = String(first * second);
d = String(first / second);
alert('Користувач ввів ' + first  + ' ' + 'і' +  ' ' + second  +  '\n ' +
    first + ' + ' + second + ' = ' + a +  '\n ' +
    first + ' - ' + second + ' = ' + b +  '\n ' +
    first + ' * ' + second + ' = ' + c +  '\n ' +
    first + ' / ' + second + ' = ' + d)