$(()=>{
    let list = $('#list')
    $('#fetch').click(()=>{
        $.get(`https://reqres.in/api/users?page=2`, (data)=>{
            for(let p of data.data){
                list.append($(`<li>${p.first_name} ${p.last_name}
                <img width="100px" src="${p.avatar}">

                </li>`))
            }
        })
        
    }

    )

}

)