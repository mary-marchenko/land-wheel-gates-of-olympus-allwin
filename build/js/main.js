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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsicGxheUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJ3aGVlbCIsIm1haW5XaGVlbCIsIm92ZXJsYXkiLCJwb3B1cEZpcnN0IiwicG9wdXBGaXJzdEJ0biIsInBvcHVwU2Vjb25kIiwib3ZlcmZsb3ciLCJ3cmFwcGVyIiwicm90YXRlVGV4dCIsInRyaWVzQ291bnRlciIsInRleHRBZnRlclJvdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJydW5GaXJzdFJvdGF0aW9uIiwiaW5uZXJIVE1MIiwicnVuU2Vjb25kUm90YXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsImN1cnNvciIsInBvaW50ZXJFdmVudHMiLCJib2R5Iiwic2V0VGltZW91dCIsImRvQWZ0ZXJGaXJzdFJvdGF0aW9uIiwidHJhbnNmb3JtIiwiZGlzcGxheVBvcHVwIiwiZG9BZnRlclNlY29uZFJvdGF0aW9uIiwicG9wdXAiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsd0JBQXdCLENBQUM7RUFDMURDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQzdDRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQ3pERyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0VBQ3hESSxPQUFPLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQ25ESyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQ3ZETSxhQUFhLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQzlETyxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFD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LFFBQVEsQ0FBQ1ksS0FBSyxDQUFDWixRQUFRLEdBQUcsT0FBTztBQUNyQyxDQUFDLENBQUM7QUFFRixTQUFTbUIsWUFBWUEsQ0FBQ0UsS0FBSyxFQUFFO0VBQ3pCekIsT0FBTyxDQUFDYSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUMzQ1UsS0FBSyxDQUFDWixTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDOUJwQixRQUFRLENBQUN3QixJQUFJLENBQUNILEtBQUssQ0FBQ1osUUFBUSxHQUFHLFFBQVE7RUFDdkNzQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0FBRXRCOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFJQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19tYWluLXdoZWVsLWJ0bicpLFxuICAgICAgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fbWFpbicpLFxuICAgICAgd2hlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX21haW4td2hlZWwtcmVlbCcpLFxuICAgICAgbWFpbldoZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19tYWluLXdoZWVsJyksXG4gICAgICBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19vdmVybGF5JyksXG4gICAgICBwb3B1cEZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19maXJzdFdpbicpLFxuICAgICAgcG9wdXBGaXJzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fZmlyc3RXaW4tYnRuJyksXG4gICAgICBwb3B1cFNlY29uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fc2Vjb25kV2luJyksXG4gICAgICBvdmVyZmxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbiAgICAgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXMnKSxcbiAgICAgIHJvdGF0ZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX21haW4tdHh0LWNlbnRlcicpO1xuXG5cbmxldCB0cmllc0NvdW50ZXIgPSAwXG5sZXQgdGV4dEFmdGVyUm90YXRlID0gJ9CjINGC0LXQsdC1IDxzcGFuPjE8L3NwYW4+INGB0L/RgNC+0LHQsCc7XG5cbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHRyaWVzQ291bnRlciA9PT0gMCkge1xuICAgICAgICBydW5GaXJzdFJvdGF0aW9uKClcbiAgICAgICAgcm90YXRlVGV4dC5pbm5lckhUTUwgPSB0ZXh0QWZ0ZXJSb3RhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcnVuU2Vjb25kUm90YXRpb24oKVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIHJ1bkZpcnN0Um90YXRpb24oKSB7XG4gICAgd2hlZWwuY2xhc3NMaXN0LmFkZCgncmVlbC1yb3RhdGlvbi1maXJzdCcpXG4gICAgcGxheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZS1idG4nKVxuICAgIHBsYXlCdG4uc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgd3JhcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvQWZ0ZXJGaXJzdFJvdGF0aW9uKClcbiAgICB9LCA2MDAwKVxuICAgIHRyaWVzQ291bnRlcisrXG59XG5cbmZ1bmN0aW9uIGRvQWZ0ZXJGaXJzdFJvdGF0aW9uKCkge1xuICAgIHdoZWVsLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTQ2ZGVnKSdcbiAgICB3aGVlbC5jbGFzc0xpc3QucmVtb3ZlKCdyZWVsLXJvdGF0aW9uLWZpcnN0JylcbiAgICBkaXNwbGF5UG9wdXAocG9wdXBGaXJzdClcbiAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbiAgICBvdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LmFkZCgncHVsc2UtYnRuJylcbiAgICAgICAgcGxheUJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICB9LCAxMjAwKVxufVxuXG5mdW5jdGlvbiBydW5TZWNvbmRSb3RhdGlvbigpIHtcbiAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKCdyZWVsLXJvdGF0aW9uLXNlY29uZCcpXG4gICAgcGxheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZS1idG4nKVxuICAgIHBsYXlCdG4uc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgb3ZlcmZsb3cuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIHdyYXBwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvQWZ0ZXJTZWNvbmRSb3RhdGlvbigpXG4gICAgfSwgNjAwMClcbiAgICB0cmllc0NvdW50ZXIrK1xufVxuXG5mdW5jdGlvbiBkb0FmdGVyU2Vjb25kUm90YXRpb24oKSB7XG4gICAgZGlzcGxheVBvcHVwKHBvcHVwU2Vjb25kKVxuICAgIHdyYXBwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJ1xufVxuXG5cbnBvcHVwRmlyc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LW92ZXJsYXknKVxuICAgIHBvcHVwRmlyc3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgb3ZlcmZsb3cuc3R5bGUub3ZlcmZsb3cgPSAndW5zZXQnXG59KVxuXG5mdW5jdGlvbiBkaXNwbGF5UG9wdXAocG9wdXApIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgY29uc29sZS5sb2cocG9wdXApXG5cbn1cblxuXG5cbi8vIChmdW5jdGlvbiAoKSB7XG4vLyAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuLy8gICAgIHZhciBwYXJhbXMgPSBbJ2wnLCAndXRtX3NvdXJjZScsICd1dG1fbWVkaXVtJywgJ3V0bV9jYW1wYWlnbicsICd1dG1fdGVybScsICd1dG1fY29udGVudCcsICdwYXJhbTEnLCAncGFyYW0yJywgJ3BhcmFtMycsICdwYXJhbTQnLCAnY3JlYXRpdmVfdHlwZScsICdjcmVhdGl2ZV9pZCddO1xuLy8gICAgIHZhciBsaW5rUGFyYW1zID0gWydhZmZpZCcsICdjcGFpZCddOyAvLyDQuNGJ0LXQvCDQsiB1cmwgcmVkaXJlY3RVcmwg0LIgdXJsOlxuLy9cbi8vICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3JlZGlyZWN0VXJsJykpIHtcbi8vICAgICAgICAgdmFyIHJlZGlyZWN0VXJsID0gbmV3IFVSTCh1cmwuc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3RVcmwnKSk7XG4vL1xuLy8gICAgICAgICBpZiAocmVkaXJlY3RVcmwuaHJlZi5tYXRjaCgvXFwvL2cpLmxlbmd0aCA9PT0gNCAmJiByZWRpcmVjdFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdsJykpIHtcbi8vICAgICAgICAgICAgIC8v0LXRgdC70Lgg0YHRgdGL0LvQutCwINCyINGB0YHRi9C70LrQsCByZWRpcmVjdFVybCDQutC+0YDRgNC10LrRgtC90LDRj1xuLy8gICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlZGlyZWN0VXJsJywgcmVkaXJlY3RVcmwuaHJlZik7IC8vINGD0LrQsNC30YvQstCw0LXQvCDRgtC+0YfQutC+0Lkg0LLRhdC+0LTQsCDQtNC+0LzQtdC9INGBINC/0YDQvtGC0L7QutC+0LvQvtC8INC40LcgcmVkaXJlY3RVcmxcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4vLyAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBhcmFtLCB1cmwuc2VhcmNoUGFyYW1zLmdldChwYXJhbSkpO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBsaW5rUGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKGxpbmtQYXJhbSkge1xuLy8gICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMobGlua1BhcmFtKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlua1BhcmFtLCB1cmwuc2VhcmNoUGFyYW1zLmdldChsaW5rUGFyYW0pKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgdmFyIGxpbmssXG4vLyAgICAgICAgICAgICBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdhJyk7XG4vL1xuLy8gICAgICAgICBpZiAocGFyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICE9PSAnaHR0cHM6Ly90ZHMuZmF2YmV0LnBhcnRuZXJzJykge1xuLy8gICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICBpZiAocGFyZW50KSB7XG4vLyAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICB2YXIgYWZmaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWZmaWQnKTtcbi8vICAgICAgICAgICAgIHZhciBjcGFpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcGFpZCcpO1xuLy9cbi8vICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZGlyZWN0VXJsXCIpKSB7XG4vLyAgICAgICAgICAgICAgICAgbGluayA9IG5ldyBVUkwobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWRpcmVjdFVybFwiKSk7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKHBhcmVudC5ocmVmKTtcbi8vICAgICAgICAgICAgICAgICBpZiAoYWZmaWQgJiYgY3BhaWQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGluay5wYXRobmFtZSA9ICcvJyArIGFmZmlkICsgJy8nICsgY3BhaWQ7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuLy8gICAgICAgICAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGluay5zZWFyY2hQYXJhbXMuc2V0KHBhcmFtLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXJhbSkpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy9cbi8vICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyB9KSgpOyIsIiJdfQ==
