function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckBox = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitButton = $('#submit');
    let validationDiv = $('#valid');
    let allIsValid = true;
    let allMinusOneIsValid = true;

    companyCheckBox.on('change', function(){
        if(companyCheckBox.is(':checked')){
            companyInfo.css('display', 'block');
        }
        else{
            companyInfo.css('display','none');
        }
    });

    submitButton.on('click', function(event){
        event.preventDefault();
        validateForm();
        if(companyCheckBox.is(':checked')){
            validationDiv.css('display', allIsValid ? 'block':'none');
            alert('all')
        }else{
            validationDiv.css('display', allMinusOneIsValid ? 'block':'none');
            alert('notAtAll')
        }

    });

    function validateForm(){
        validateInputWithRegex(username, /^[A-Za-z\d]{3,20}$/g);
        validateInputWithRegex(email, /^.*?@.*?\..*$/g);
        if(confirmPassword.val() === password.val()){
            validateInputWithRegex(password, /^\w{5,15}$/g);
            validateInputWithRegex(confirmPassword, /^\w{5,15}$/g);
        }else{
            confirmPassword.css('border', 'solid red');
            password.css('border', 'solid red');
            allIsValid = false;
            allMinusOneIsValid = false;
        }
        validateCompanyInfo();
    }

    function validateInputWithRegex(input, pattern){
        if(pattern.test(input.val())){
            input.css('border', 'none');
        }else{
            input.css("border", "solid red");
            allIsValid = false;
            allMinusOneIsValid = false;
        }
    }

    function validateCompanyInfo(){
        if(companyNumber.val() >= 1000 && companyNumber.val() <= 9999){
            companyNumber.css('border', 'none');
        }
        else{
            companyNumber.css('border', 'solid red');
            allIsValid = false;
        }
    }
}
