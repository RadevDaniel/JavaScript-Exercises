function print(arr){
    let delimeter = arr.pop(arr[arr.length - 1]);
    
    console.log(arr.join(delimeter));
}
print(['How about no?',
'I',
'will',
'not',
'do',
'it!',
'_']
)