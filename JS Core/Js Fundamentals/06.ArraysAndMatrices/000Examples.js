function example(matrix){
    let nsh = matrix.map(a => matrix.join(' ')).join('\n')
    console.log(nsh)

}
  example(['0,0', '0,1', '0,2'],
  ['1,0', '1,1', '1,2'],
  ['2,0', '2,1', '2,2']
);