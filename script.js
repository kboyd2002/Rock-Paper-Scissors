function askAndConfirm(isFirst){
    var question="";
    if(!isFirst) question = "Please Type R, P, S";
    var num = prompt(question + 'How Many Characters do you want for your password?');
    var isConfirm = confirm('is this correct ' + num + '?');
  
    if (isConfirm === true) {
        alert(num+" it is!");
        var arr = [];
        arr.length = num;

    } else {
      askAndConfirm(false);
    }
  }
  askAndConfirm(true);

  if (askAndConfirm) {
    var isConfirm = confirm('Do you want symbols in your password?');
    
    if (isConfirm) {
      symArray = true


    } else {
      symArray = false
        askAndConfirm(false)
    }
  }

  if (askAndConfirm) {
    var isConfirm = confirm('Do you want numbers in your password?');
    
    if (isConfirm) {

    } else {
        askAndConfirm(false)
    }
  } 


  if (askAndConfirm) {
    var isConfirm = confirm('Do you want UPPERCASE in your password?');
    
    if (isConfirm) {
 
    } else {
        askAndConfirm(false)
    }
  }


  if (askAndConfirm) {
    var isConfirm = confirm('Do you want lowercase in your password?');
    
    if (isConfirm) {

        generatePassword(arr)
    } else {
        askAndConfirm(false)
    }
  }
