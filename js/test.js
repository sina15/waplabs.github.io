$(function () {

    $("#myForm").submit(function (event) {

        event.preventDefault()
        let submitFlag = true;

        const street = $("input[name='street']").val()
        const seats = $("input[name='seats']").val()
        if(seats<0||seats>200){
            submitFlag=false
        }

        if(submitFlag){
            this.submit()
        }
    })
})