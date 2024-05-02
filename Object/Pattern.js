// Patterns

// 1.
const n = 4;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= ((n + i) - 1); j++) {
    const value = (j <= n - i) ? `<span class="blue">* </span>` : '* ';
    document.write(value);
  }
  document.write('<br>');
}

document.write('<hr>');

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= ((2 * n) - i); j++) {
    const value = (j <= i - 1) ? `<span class="blue">* </span>` : '* ';
    document.write(value);
  }
  document.write('<br>');
}

document.write('<hr>');

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= ((n + i) - 1); j++) {
    const value1 = (j <= n - i) ? `<span class="blue">* </span>` : '* ';
    document.write(value1);
  }
  document.write('<br>');
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= ((2 * n) - i); j++) {
    const value2 = (j <= i - 1) ? `<span class="blue">* </span>` : '* ';
    document.write(value2);
  }
  document.write('<br>');
}

document.write('<hr>');

let max = 0;
for (let i = 1; i <= 2 * n; i++) {
  let cols = 0;
  if (i <= n) {
    cols = n + i - 1;
    max = cols;
  }
  else {
    cols = max;
    max--;
  }
  for (let j = 1; j <= cols; j++) {
    let value = '';
    if (i <= n) {
      value = (j <= n - i) ? `<span class="blue">* </span>` : '* ';
    }
    else {
      value = (j <= i - n - 1) ? `<span class="blue">* </span>` : '* ';
    }
    document.write(value);
  }
  document.write('<br>');
}

document.write('<hr>');

const n1 = 9;
const center = Math.ceil(n1 / 2);
for (let i = 1; i <= n1; i++) {
  for (let j = 1; j <= n1; j++) {
    if ((i == 1 && j >= center) || (j == 1 && i <= center) || i === center || j === center ||
     (j == n1 && i >= center) || (i == n1 && j <= center)) {
      document.write('* ');
    }
    else {
      document.write(`<span class="blue">* </span>`);
    }
  }
  document.write('<br/>');
} 

document.write('<hr>');

for( let i=1; i<=n1 ; i++)
{
  for( let j=1; j<=n1 ; j++)
  {
    if (i===n1 || i===1 || j === 1 || j === n1)
    {
      document.write('* ');
    }
    else {
      document.write(`<span class="blue">* </span>`);
    }
  }
  document.write('<br/>');
}

document.write('<hr>');

for( let i=1; i<=n1 ; i++)
{
  for( let j=1; j<=n1 ; j++)
  {
    if (i=== j || i+j === n1+1)
    {
      document.write('* ');
    }
    else {
      document.write(`<span class="blue">* </span>`);
    }
  }
  document.write('<br/>');
}

document.write('<hr>');

for( let i=1; i<=n1 ; i++)
{
  for( let j=1; j<=n1 ; j++)
  {
    if ( j === 1 || j === n1 || (i === j && j <= center) || (i+j === n1+1 && j >= center ))
    {
      document.write('* ');
    }
    else {
      document.write(`<span class="blue">* </span>`);
    }
  }
  document.write('<br/>');
}

document.write('<hr>');

for(let i = 1; i <= n1; i++) {
    for(let j = 1; j <= n1; j++) {
        if( (j==1&& i!=1 ) ||
            (j==n1 && i!= 1) ||
            (i==1 && j!=1 && j!=n1) ||
            (i==center)
            )
         {
            document.write('* ');
        } else {
            document.write(`<span class="blue">* </span>`);
        }
    }
    document.write('<br/>');
}

document.write('<hr>');

const n2= 5;
let a = 2;
for (let i =1; i<= n2; i++){
   for ( let j=1; j<=i; j++){
      document.write(` ${a-i} `);
      a++;
   }
   document.write('<br/>');
}