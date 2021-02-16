const input = document.querySelector('input');
const search = document.querySelector('.modeBtn');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const main = document.querySelector('h1');
const typeW = document.querySelector('p')



const datas = [
    {
    
    _id: "5fc1c6bd48a7036575881ce0",
    name: "ASP",
    first_word: "액티브 서버 페이지",
    sec_word: "",
  },
  {
    _id: "5fd46380093ed12aa2221ff2",
    name: "ASP",
    first_word: "액티브 서버 페이지",
    sec_word: "먹다",
    third_word: "가다",
    fourth_word: "ㅋㅋㅋㅋ",
    type: "ot",
    __v: 0
  },
  {
    _id: "5fd4638efa664e2aa80436b1",
    name: "ASP",
    first_word: "액티브 서버 페이지",
    sec_word: "먹다",
    third_word: "가다",
  },
  {
    _id: "5fc1c6bd48a7036575881a18",
    name: "Adra",
    first_word: "아드라",
   
  },
  {
    _id: "5fd465cbcdbeff2b30f5be4c",
    name: "Adra",
    first_word: "아드라",
    sec_word: "erfvond",
    third_word: "sdcdscds",
    fourth_word: "scscscd",
    type: "ot",
    __v: 0
  },
  {
    _id: "5fc1c6bd48a7036575881db8",
    name: "ayanchli",
    first_word: "슬픈",
    sec_word: "비탄에 잠긴",
    third_word: "슬픔에 잠긴",
    fourth_word: "",
    type: "ot"
  },
  {
    _id: "5fc1c6bd48a7036575881db9",
    name: "ayb",
    first_word: "과실",
    sec_word: "잘못",
    third_word: "비난",
    fourth_word: "단점",
    type: "ot"
  },
  {
    _id: "5fc1c6bd48a7036575881dc5",
    name: "ayb-uyat",
    first_word: "과실",
    sec_word: "부끄럼",
    third_word: "",
    fourth_word: "",
    type: "ot"
  },
  {
    _id: "5fc1c6bd48a7036575881dba",
    name: "aybdor",
    first_word: "죄인",
    sec_word: "범죄자",
    third_word: "피고",
    fourth_word: "피의자",
    type: "ot"
  },
  {
    _id: "5fc1c6bd48a7036575881dbb",
    name: "aybdorlik",
    first_word: "죄를 범하고 있음",
    sec_word: "죄가 있음",
    third_word: "죄",
    fourth_word: "",
    type: "ot"
  },
  {
    _id: "5fc1c6bd48a7036575881dbc",
    name: "ayblamoq",
    first_word: "책망하다",
    sec_word: "나무라다",
    third_word: "비난하다",
    fourth_word: "",
    type: "fe'l"
  },
  {
    _id: "5fc1c6bd48a7036575881dbd",
    name: "ayblanmoq",
    first_word: "고발하다",
    sec_word: "",
    third_word: "",
    fourth_word: "",
    type: "fe'l"
  },
  {
    _id: "5fc1c6bd48a7036575881dbe",
    name: "ayblanuvchi",
    first_word: "피고인",
    sec_word: "피고",
    third_word: "",
    fourth_word: "",
    type: "ot"
  }
]

function searchWords() {
    let filtered = datas.filter((value) => value.name.toLowerCase() === input.value.toLowerCase());
    console.log(filtered);
    main.textContent = filtered[0].name;
    typeW.textContent = filtered[0].type;
    first.textContent = filtered[0].first_word;
    second.textContent = filtered[0].sec_word;
    third.textContent = filtered[0].third_word;
    fourth.textContent = filtered[0].fourth_word;
    clear();
  
  }

  function clear(){
      input.value = ''
  }

  search.addEventListener('click', searchWords);
  input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
      console.log(e.key);
      this.searchWords()
    }
  })

// function createWordLi() {
  
//     for (data of datas) {
//       let filtered = data.name == filterValue ? filterValue : data.name;
  
//       console.log(filtered);
//       newWordsList.textContent = filtered;
//       wordUl.append(newWordsList);
//     }
//   }
