function openPage(pageId){
  document.querySelectorAll('.page-container').forEach(p=>p.style.display='none');
  document.getElementById(pageId).style.display='block';
}
openPage('homePage');

function toggleTheme(){
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme==='light' ? 'dark' : 'light';
}

let currentLang='en';
function toggleLanguage(){
  const texts = {
    home:{en:"Home",ar:"الرئيسية"},
    download:{en:"Download",ar:"تنزيل"},
    help:{en:"Help",ar:"مساعدة"},
    downloadNow:{en:"Download Now",ar:"تحميل الآن"},
    homePageText:{en:"Welcome to Flarial Client! Download the latest version quickly and enjoy smooth performance.",ar:"مرحبًا بك في Flarial Client! قم بتنزيل أحدث إصدار بسرعة واستمتع بالأداء السلس."},
    downloadPageText:{en:"Click below to download the latest Flarial Client:",ar:"انقر أدناه لتنزيل أحدث إصدار من Flarial Client:"},
    helpPageText:{en:"Need support? Click the email box to copy our support email:",ar:"هل تحتاج إلى الدعم؟ انقر على صندوق البريد لنسخ البريد الإلكتروني:"}
  };
  currentLang=currentLang==='en'?'ar':'en';
  document.body.dir=currentLang==='ar'?'rtl':'ltr';
  document.querySelector(".navbar-button:nth-child(1)").innerText=texts.home[currentLang];
  document.querySelector(".navbar-button:nth-child(2)").innerText=texts.download[currentLang];
  document.querySelector(".navbar-button:nth-child(3)").innerText=texts.help[currentLang];
  document.querySelector("#homePage .page-text").innerText=texts.homePageText[currentLang];
  document.querySelector("#downloadPage .page-text").innerText=texts.downloadPageText[currentLang];
  document.querySelector("#downloadPage .download-button").innerText=texts.downloadNow[currentLang];
  document.querySelector("#helpPage .page-text").innerText=texts.helpPageText[currentLang];
}
