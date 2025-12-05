// --- 기존 배경색 변경 기능 ---

const colors = ['#f0f0f0', '#ffb6c1', '#add8e6', '#90ee90', '#ffd700', '#dda0dd'];
let colorIndex = 0;

const colorButton = document.getElementById('colorButton');
const body = document.body;

function changeBackgroundColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[colorIndex];
}

colorButton.addEventListener('click', changeBackgroundColor);


// --- [추가된 기능] 입력값 처리 기능 ---

// 1. 필요한 HTML 요소를 가져옵니다.
const textInput = document.getElementById('textInput'); // 입력 필드 요소
const displayArea = document.getElementById('displayArea'); // 텍스트를 표시할 <span> 요소
const updateButton = document.getElementById('updateButton'); // 업데이트 버튼 요소

// 2. 버튼 클릭 시 실행될 함수를 정의합니다.
function updateDisplayArea() {
    // textInput.value: <input> 요소에 현재 입력된 '값(value)'을 가져오는 속성입니다.
    const inputText = textInput.value; 
    
    // displayArea.textContent: <span> 요소의 '텍스트 내용(textContent)'을 설정합니다.
    // 이는 HTML 태그를 해석하지 않고 순수한 텍스트만 삽입하여 보안에도 좋습니다.
    displayArea.textContent = inputText;
    
    // 입력 필드를 초기화합니다.
    textInput.value = '';
    
    console.log('입력 내용이 업데이트되었습니다: ' + inputText);
}

// 3. 업데이트 버튼에 '클릭' 이벤트를 연결합니다.
updateButton.addEventListener('click', updateDisplayArea);

// (보너스) 입력 필드에서 'Enter' 키를 눌렀을 때도 함수가 실행되도록 추가합니다.
// 'keydown' 이벤트: 키보드가 눌렸을 때 발생.
textInput.addEventListener('keydown', function(event) {
    // event.key: 눌린 키의 이름을 가져옵니다.
    if (event.key === 'Enter') {
        updateDisplayArea(); // 위에서 정의한 함수를 호출합니다.
    }
});
