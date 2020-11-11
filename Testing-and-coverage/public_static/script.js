

$(function(){
    let kmBox = $('#km')
let minBox = $('#time')
let SubmitBtn = $('#calcfare')
let fareBox = $('#fare')
let rateBtn = $('#getRate')
let rateList = $('#rateList')

SubmitBtn.click(()=>{
    $.post('/calcfare',{
        km:kmBox.val(),
        min:minBox.val() , 
    },(data)=>{
fareBox.text(data.fare)
    })
})

rateBtn.click(()=>{
    $.get('/rate',(data)=>{
        rateList.text(JSON.stringify(data))
    })
})
})