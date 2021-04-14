
const algo = () => {
  console.log("Hi");
}

function algo2(){
  console.log("Hi2");
}

algo();
algo2();





function removeDuplicates(arr){
  let answer = [];
  arr.map((param)=>{
    if(!answer.includes(param)){
      answer.push(param)
    }
  });
  return answer;
}



console.log(removeDuplicates([8, 0, 1, 1, 3, 0, 2 ]));  // [ 0,8,  1, 3, 2 ]









function listMissingLetters(str) {
  let answer = [];
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let strW = str.toLowerCase();
  //let temp = strW.split("");
  alphabet.map((param)=>{
    if(!strW.includes(param)){
      answer.push(param)
    }
  });
  let answerString = answer.join('');
  
  // if(answer.length == 0){
  //   answerString = '';
  // }
  console.log(answerString);
  return answerString;
}

listMissingLetters('abcdefghijklmnopqrstuvwxyz') // ''
listMissingLetters('Four score and seven years ago') // 'bhijklmpqtwxz'











//using an array with index:
//0 for {}
//1 for []
//2 for ()
//the first part adds the second one substract
//if the second part appears first, is false instactly

function braces(str) {
  let answer = true;
  let temp = [0,0,0];
  const size = str.length;
  let i = 0;
  while(i < size && answer){
    switch(str[i]){
      case '}':
        if(temp[0] > 0){
          temp[0]-=1;
        }else{
          answer = false;
        }
        break;
      case ']':
        if(temp[1] > 0){
          temp[1]-=1;
        }else{
          answer = false;
        }
        break;
      case ')':
        if(temp[2] > 0){
          temp[2]-=1;
        }else{
          answer = false;
        }
        break;
      case '{':
        temp[0]+=1;
        break;
      case '[':
        temp[1]+=1;
        break;
      case '(':
        temp[2]+=1;
        break;
      default:
        break
    }
    
    i++;
  }

  if(answer){
    temp.map((param) => {
      if(param != 0){
        answer = false;
      }
    })
  }

  console.log(answer)
  return answer;
}


braces('{()()}[()()][())]') // false

braces('}{') // false
braces('{}') // true
braces('{]') // false