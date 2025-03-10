$(()=>{
    $('#navbar').load('/components/navbar.html',loginIfNeeded)
    $('#content').load('/components/all-posts.html')
    $('#footer').load('/components/footer.html')
    
    
})

function loginIfNeeded(){
    // creates a global level currentUser so that we can use it everwhere
     window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser){
        $.post('/api/users',{},(user)=>{
            if(user){
                console.log("Registered as : " + user.username);
                window.localStorage.user = JSON.stringify(user)
                currentUser=user
                $('#navbar-username').text(currentUser.username)
            }
           
        })
    }else{
        console.log("Resuming session as : " + currentUser.username);
        $('#navbar-username').text(currentUser.username)
    }
}

