$(()=>{
    let item = $('#item')
    let list = $('#list')

    $('#prepend').click(() =>{
        let text = item.val()
        list.prepend($('<li></li>').text(text))
    }
    )

    $('#append').click(() =>{
        let text = item.val()
    list.append($('<li></li>').text(text))
    }
    )

    
}

)
console.log(5);