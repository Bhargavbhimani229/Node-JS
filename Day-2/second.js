// Local module

let obj = {
  name : "John",
  fun : () =>{
    console.log("Hello My Fun....");
  },
  time : new Date().toLocaleDateString(),
  arr: [1,2,3,4,5]
}

module.exports = obj;