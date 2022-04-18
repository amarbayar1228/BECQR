$(document).ready(function () {
  let lang = localStorage.getItem("zipcode_lang");
  if (!lang) {
    lang = "mn";
  }

  function initLangMn() {
    $("#lang").html("ENG");
    $("#myBtn").html("Дэлгэрэнгүй");
    $("#crc2").html("зохицуулах");
    $("#crc3").html("хороо");
    $("#title").html("ШУУДАНГИЙН НЭГДСЭН КОДЫН СИСТЕМ");
    $("#newtreh").html("Нэвтрэх");
    $("#adminName").html("Админ нэр");
    $("#nuutsUg").html("Нууц нэр");
    $("#NuutsUgMarttsan").html("Нууц үгээ мартсан?");
    $("#value2").html("Нэвтрэх");
  }

  function initLangEn() {
    $("#lang").html("МОН");
    $("#myBtn").html("ddddd");
    $("#crc2").html("Regulatory Commission");
    $("#crc3").html("of Mongolia");
    $("#title").html("MONGOLIAN ZIPCODE AND POSTALCODE SYSTEM");
    $("#newtreh").html("Login Form");
    $("#adminName").html("Admin name");
    $("#nuutsUg").html("Password");
    $("#NuutsUgMarttsan").html("Forget password?");
    $("#value2").html("Login");
  }

  $("#changeLang").click(function () {
    if (lang == "mn") {
      lang = "en";
      localStorage.setItem("zipcode_lang", lang);
      initLangEn();
    } else {
      lang = "mn";
      localStorage.setItem("zipcode_lang", lang);
      initLangMn();
    }
  });
  if (lang == "mn") {
    initLangMn();
  } else {
    initLangEn();
  }
});
