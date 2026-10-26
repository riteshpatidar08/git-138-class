function itWillbeHof(cb){
return cb;
} ;
// console.log('declaration' , test)

const returnRes = itWillbeHof( function(){
    console.log('called...')
});
console.log(returnRes)
// console.log('expression' , test1)

itWillbeHof(() => {
    console.log('another callback')
})

// const test2 = () => {};
// console.log('arrowfn' , test2);

