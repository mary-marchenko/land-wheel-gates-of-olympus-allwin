"use strict";

var playBtn = document.querySelector('.bonus__main-wheel-btn'),
  main = document.querySelector('.bonus__main'),
  wheel = document.querySelector('.bonus__main-wheel-reel'),
  mainWheel = document.querySelector('.bonus__main-wheel'),
  overlay = document.querySelector('.bonus__overlay'),
  popupFirst = document.querySelector('.bonus__firstWin'),
  popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
  popupSecond = document.querySelector('.bonus__secondWin'),
  overflow = document.querySelector('body'),
  wrapper = document.querySelector('.bonus'),
  rotateText = document.querySelector('.bonus__main-txt-center');
var triesCounter = 0;
var textAfterRotate = 'У тебе <span>1</span> спроба';
playBtn.addEventListener('click', function () {
  if (triesCounter === 0) {
    runFirstRotation();
    rotateText.innerHTML = textAfterRotate;
  } else {
    runSecondRotation();
  }
});
function runFirstRotation() {
  wheel.classList.add('reel-rotation-first');
  playBtn.classList.remove('pulse-btn');
  playBtn.style.cursor = 'default';
  wrapper.style.pointerEvents = 'none';
  document.body.style.overflow = 'hidden';
  setTimeout(function () {
    doAfterFirstRotation();
  }, 6000);
  triesCounter++;
}
function doAfterFirstRotation() {
  wheel.style.transform = 'rotate(946deg)';
  wheel.classList.remove('reel-rotation-first');
  displayPopup(popupFirst);
  wrapper.style.pointerEvents = 'auto';
  overflow.style.overflow = 'hidden';
  setTimeout(function () {
    playBtn.classList.add('pulse-btn');
    playBtn.style.cursor = 'pointer';
  }, 1200);
}
function runSecondRotation() {
  wheel.classList.add('reel-rotation-second');
  playBtn.classList.remove('pulse-btn');
  playBtn.style.cursor = 'default';
  overflow.style.overflow = 'hidden';
  wrapper.style.pointerEvents = 'none';
  setTimeout(function () {
    doAfterSecondRotation();
  }, 6000);
  triesCounter++;
}
function doAfterSecondRotation() {
  displayPopup(popupSecond);
  wrapper.style.pointerEvents = 'auto';
}
popupFirstBtn.addEventListener('click', function () {
  overlay.classList.add('opacity-overlay');
  popupFirst.classList.add('hide');
  overflow.style.overflow = 'unset';
});
function displayPopup(popup) {
  overlay.classList.remove('opacity-overlay');
  popup.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  console.log(popup);
}

// (function () {
//     var url = new URL(window.location.href);
//     var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2', 'param3', 'param4', 'creative_type', 'creative_id'];
//     var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:
//
//     if (url.searchParams.has('redirectUrl')) {
//         var redirectUrl = new URL(url.searchParams.get('redirectUrl'));
//
//         if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
//             //если ссылка в ссылка redirectUrl корректная
//             localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
//         }
//     }
//
//     params.forEach(function (param) {
//         if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
//     });
//
//     linkParams.forEach(function (linkParam) {
//         if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
//     });
//
//     window.addEventListener('click', function (e) {
//         var link,
//             parent = e.target.closest('a');
//
//         if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
//             return;
//         }
//
//         if (parent) {
//             e.preventDefault();
//             var affid = localStorage.getItem('affid');
//             var cpaid = localStorage.getItem('cpaid');
//
//             if (localStorage.getItem("redirectUrl")) {
//                 link = new URL(localStorage.getItem("redirectUrl"));
//             } else {
//                 link = new URL(parent.href);
//                 if (affid && cpaid) {
//                     link.pathname = '/' + affid + '/' + cpaid;
//                 }
//             }
//
//             params.forEach(function (param) {
//                 if (url.searchParams.has(param)) {
//                     link.searchParams.set(param, localStorage.getItem(param));
//                 }
//             });
//
//             document.location.href = link;
//         }
//     });
// })();

// TEST

document.querySelector(".menu-btn").addEventListener('click', function () {
  document.querySelector(".menu-test").classList.toggle('hide');
});
document.querySelector(".popup1").addEventListener('click', function () {
  popupSecond.classList.add('hide');
  displayPopup(popupFirst);
});
document.querySelector(".popup2").addEventListener('click', function () {
  popupFirst.classList.add('hide');
  displayPopup(popupSecond);
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsicGxheUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJ3aGVlbCIsIm1haW5XaGVlbCIsIm92ZXJsYXkiLCJwb3B1cEZpcnN0IiwicG9wdXBGaXJzdEJ0biIsInBvcHVwU2Vjb25kIiwib3ZlcmZsb3ciLCJ3cmFwcGVyIiwicm90YXRlVGV4dCIsInRyaWVzQ291bnRlciIsInRleHRBZnRlclJvdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJydW5GaXJzdFJvdGF0aW9uIiwiaW5uZXJIVE1MIiwicnVuU2Vjb25kUm90YXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsImN1cnNvciIsInBvaW50ZXJFdmVudHMiLCJib2R5Iiwic2V0VGltZW91dCIsImRvQWZ0ZXJGaXJzdFJvdGF0aW9uIiwidHJhbnNmb3JtIiwiZGlzcGxheVBvcHVwIiwiZG9BZnRlclNlY29uZFJvdGF0aW9uIiwicG9wdXAiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsd0JBQXdCLENBQUM7RUFDMURDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQzdDRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQ3pERyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0VBQ3hESSxPQUFPLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQ25ESyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQ3ZETSxhQUFhLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQzlETyxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0Ms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QyxDQUFDO0FBRUZOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDYSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM5RFIsVUFBVSxDQUFDWSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDaENTLFlBQVksQ0FBQ3BCLFdBQVcsQ0FBQztBQUM3QixDQUFDLENBQUM7QUMxSkYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fbWFpbi13aGVlbC1idG4nKSxcbiAgICAgIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX21haW4nKSxcbiAgICAgIHdoZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19tYWluLXdoZWVsLXJlZWwnKSxcbiAgICAgIG1haW5XaGVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fbWFpbi13aGVlbCcpLFxuICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fb3ZlcmxheScpLFxuICAgICAgcG9wdXBGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fZmlyc3RXaW4nKSxcbiAgICAgIHBvcHVwRmlyc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX2ZpcnN0V2luLWJ0bicpLFxuICAgICAgcG9wdXBTZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX3NlY29uZFdpbicpLFxuICAgICAgb3ZlcmZsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG4gICAgICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzJyksXG4gICAgICByb3RhdGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19tYWluLXR4dC1jZW50ZXInKTtcblxuXG5sZXQgdHJpZXNDb3VudGVyID0gMFxubGV0IHRleHRBZnRlclJvdGF0ZSA9ICfQoyDRgtC10LHQtSA8c3Bhbj4xPC9zcGFuPiDRgdC/0YDQvtCx0LAnO1xuXG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0cmllc0NvdW50ZXIgPT09IDApIHtcbiAgICAgICAgcnVuRmlyc3RSb3RhdGlvbigpXG4gICAgICAgIHJvdGF0ZVRleHQuaW5uZXJIVE1MID0gdGV4dEFmdGVyUm90YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1blNlY29uZFJvdGF0aW9uKClcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBydW5GaXJzdFJvdGF0aW9uKCkge1xuICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ3JlZWwtcm90YXRpb24tZmlyc3QnKVxuICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UtYnRuJylcbiAgICBwbGF5QnRuLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgIHdyYXBwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb0FmdGVyRmlyc3RSb3RhdGlvbigpXG4gICAgfSwgNjAwMClcbiAgICB0cmllc0NvdW50ZXIrK1xufVxuXG5mdW5jdGlvbiBkb0FmdGVyRmlyc3RSb3RhdGlvbigpIHtcbiAgICB3aGVlbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDk0NmRlZyknXG4gICAgd2hlZWwuY2xhc3NMaXN0LnJlbW92ZSgncmVlbC1yb3RhdGlvbi1maXJzdCcpXG4gICAgZGlzcGxheVBvcHVwKHBvcHVwRmlyc3QpXG4gICAgd3JhcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nXG4gICAgb3ZlcmZsb3cuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwbGF5QnRuLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpXG4gICAgICAgIHBsYXlCdG4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgfSwgMTIwMClcbn1cblxuZnVuY3Rpb24gcnVuU2Vjb25kUm90YXRpb24oKSB7XG4gICAgd2hlZWwuY2xhc3NMaXN0LmFkZCgncmVlbC1yb3RhdGlvbi1zZWNvbmQnKVxuICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UtYnRuJylcbiAgICBwbGF5QnRuLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgIG92ZXJmbG93LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb0FmdGVyU2Vjb25kUm90YXRpb24oKVxuICAgIH0sIDYwMDApXG4gICAgdHJpZXNDb3VudGVyKytcbn1cblxuZnVuY3Rpb24gZG9BZnRlclNlY29uZFJvdGF0aW9uKCkge1xuICAgIGRpc3BsYXlQb3B1cChwb3B1cFNlY29uZClcbiAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbn1cblxuXG5wb3B1cEZpcnN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS1vdmVybGF5JylcbiAgICBwb3B1cEZpcnN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIG92ZXJmbG93LnN0eWxlLm92ZXJmbG93ID0gJ3Vuc2V0J1xufSlcblxuZnVuY3Rpb24gZGlzcGxheVBvcHVwKHBvcHVwKSB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LW92ZXJsYXknKVxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIGNvbnNvbGUubG9nKHBvcHVwKVxuXG59XG5cblxuXG4vLyAoZnVuY3Rpb24gKCkge1xuLy8gICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbi8vICAgICB2YXIgcGFyYW1zID0gWydsJywgJ3V0bV9zb3VyY2UnLCAndXRtX21lZGl1bScsICd1dG1fY2FtcGFpZ24nLCAndXRtX3Rlcm0nLCAndXRtX2NvbnRlbnQnLCAncGFyYW0xJywgJ3BhcmFtMicsICdwYXJhbTMnLCAncGFyYW00JywgJ2NyZWF0aXZlX3R5cGUnLCAnY3JlYXRpdmVfaWQnXTtcbi8vICAgICB2YXIgbGlua1BhcmFtcyA9IFsnYWZmaWQnLCAnY3BhaWQnXTsgLy8g0LjRidC10Lwg0LIgdXJsIHJlZGlyZWN0VXJsINCyIHVybDpcbi8vXG4vLyAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCdyZWRpcmVjdFVybCcpKSB7XG4vLyAgICAgICAgIHZhciByZWRpcmVjdFVybCA9IG5ldyBVUkwodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VXJsJykpO1xuLy9cbi8vICAgICAgICAgaWYgKHJlZGlyZWN0VXJsLmhyZWYubWF0Y2goL1xcLy9nKS5sZW5ndGggPT09IDQgJiYgcmVkaXJlY3RVcmwuc2VhcmNoUGFyYW1zLmdldCgnbCcpKSB7XG4vLyAgICAgICAgICAgICAvL9C10YHQu9C4INGB0YHRi9C70LrQsCDQsiDRgdGB0YvQu9C60LAgcmVkaXJlY3RVcmwg0LrQvtGA0YDQtdC60YLQvdCw0Y9cbi8vICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWRpcmVjdFVybCcsIHJlZGlyZWN0VXJsLmhyZWYpOyAvLyDRg9C60LDQt9GL0LLQsNC10Lwg0YLQvtGH0LrQvtC5INCy0YXQvtC00LAg0LTQvtC80LXQvSDRgSDQv9GA0L7RgtC+0LrQvtC70L7QvCDQuNC3IHJlZGlyZWN0VXJsXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuLy8gICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQocGFyYW0pKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgbGlua1BhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rUGFyYW0pIHtcbi8vICAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKGxpbmtQYXJhbSkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpbmtQYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQobGlua1BhcmFtKSk7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIHZhciBsaW5rLFxuLy8gICAgICAgICAgICAgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xuLy9cbi8vICAgICAgICAgaWYgKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSAhPT0gJ2h0dHBzOi8vdGRzLmZhdmJldC5wYXJ0bmVycycpIHtcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgaWYgKHBhcmVudCkge1xuLy8gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgdmFyIGFmZmlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FmZmlkJyk7XG4vLyAgICAgICAgICAgICB2YXIgY3BhaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3BhaWQnKTtcbi8vXG4vLyAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWRpcmVjdFVybFwiKSkge1xuLy8gICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBsaW5rID0gbmV3IFVSTChwYXJlbnQuaHJlZik7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGFmZmlkICYmIGNwYWlkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGxpbmsucGF0aG5hbWUgPSAnLycgKyBhZmZpZCArICcvJyArIGNwYWlkO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbi8vICAgICAgICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGxpbmsuc2VhcmNoUGFyYW1zLnNldChwYXJhbSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFyYW0pKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vXG4vLyAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbGluaztcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfSkoKTtcblxuLy8gVEVTVFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKVxufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDFcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXBTZWNvbmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgZGlzcGxheVBvcHVwKHBvcHVwRmlyc3QpXG59KVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwMlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1cEZpcnN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIGRpc3BsYXlQb3B1cChwb3B1cFNlY29uZClcbn0pXG4iLCIiXX0=
