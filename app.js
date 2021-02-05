// console.log(firebase)

const submitBtn = document.querySelector("#submit")

let userName = document.querySelector("#userName")
let userEmail = document.querySelector("#userEmail")
let userMessage = document.querySelector("#userMessage")

submitBtn.addEventListener('click', function(){
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;
    let key = firebase.database().ref('student').push().key

firebase.database().ref('student/' + key ).set({
    name: userNameInput,
    email: userEmailInput,
    message: userMessageInput,
    key: key,
   })

//    .than(function(){
//        console.log('data save')
//    })
//    .catch(function(error){
//        console.log(error)
//    });
 })