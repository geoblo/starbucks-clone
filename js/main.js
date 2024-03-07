// 검색 영역(.search) 클릭 시 input에 강제 포커스 및 제어
// 검색 영역 div와 input 찾기
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input'); // 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () { // 이벤트 핸들러
  searchInputEl.focus(); // 요소에 포커스 강제 적용
});

// input 요소에 포커스(focus)되면 placeholder 추가
// 힌트: setAttribute()
searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute('placeholder', '통합검색');
  searchEl.classList.add('focused');
});

// input 요소에 포커스 해제(blur)되면 placeholder 초기화
// 힌트: setAttribute()
searchInputEl.addEventListener('blur', function () {
  // searchInputEl.setAttribute('placeholder', '');
  searchInputEl.removeAttribute('placeholder');
  searchEl.classList.remove('focused');
});

// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // (y축으로 얼마나 스크롤 했는지) 페이지 스크롤 위치

  // Quiz:
  // 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고,
  // 페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소 보이기!
  // 힌트: style.display = 'none';
  if (window.scrollY > 500) {
    // badgeEl.style.display = 'none';
    // badgeEl.style.opacity = 0;
    // badgeEl.style.visibility = 'hidden';

    // gsap.to(요소, 지속시간, 옵션: {}) 메소드: CSS 속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // badgeEl.style.display = 'block';
    // badgeEl.style.opacity = 1;
    // badgeEl.style.visibility = 'visible';

    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
});
