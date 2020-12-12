// Исписати Марио пирамиду одређене висине:
// За n = 5

// #
// ##
// ###
// ####
// #####

let n = 5
let count = 1

for(let i = 1; i <= n; i++){
    console.log('#'.repeat(count));
    count ++
}