var currentStatus = document.querySelector('h5');

var addFriend = document.querySelector("#add");

var check = 0;
addFriend.addEventListener('click',function(){
    if(check==0){
        currentStatus.innerHTML = "Friends"
        currentStatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        check = 1;
    }
    else{
        currentStatus.innerHTML = "Strangers"
        currentStatus.style.color = 'red'
        addFriend.innerHTML = "Add Friend"
        check = 0;
    }
   
})

