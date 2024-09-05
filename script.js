document.addEventListener('DOMContentLoaded', function() {
    const check_button = document.getElementById("check-btn");
    const text_input = document.getElementById("text-input");
    const result_Area = document.getElementById("result");
    function is_Char(word){
      return /[a-zA-Z0-9]/.test(word)
    }
    
    
    const isPalindrome = (line) => {
      let lower_line = line.toLowerCase();
      let start = 0;
      let end = lower_line.length-1;
      let is_palindrome = true;
      while(start<end){
        if(!is_Char(lower_line[start])){
          start += 1
        }else if(!is_Char(lower_line[end])){
          end -= 1
        }else if(lower_line[start]  != lower_line[end]){
          console.log("lower_line[start]", lower_line[start]);
          console.log("lower_line[end]", lower_line[end]);
          is_palindrome = false;
          break; 
        } else {
          start += 1; 
          end -= 1;
        }
      }
      return is_palindrome;
    }
    
    function sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
      }
    
    check_button.addEventListener("click", () => {
      let text = text_input.value;
      if(text != ""){
        result_Area.innerHTML = "";
        if(isPalindrome(text) ){
          console.log(text)
          result_Area.innerHTML = `
          <span><strong>${sanitizeHTML(text)}</strong> is a palindrome</span>`;
        }else{
          result_Area.innerHTML = `
          <span><strong>${sanitizeHTML(text)}</strong> is not a palindrome</span>`;
        }
      }else{
        alert("Please input a value")
      }
    })
    
    })