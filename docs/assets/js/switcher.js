function fnBrowserDetect() {
  let userAgent;
  let browserName;

  if (navigator.userAgentData) {
    let userAgentnew = navigator.userAgentData.brands;
    let theBrand = userAgentnew[0];
    userAgent = theBrand.brand;
  } else {
    userAgent = navigator.userAgent;
  }
  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "no_browser_detected";
  }
  document.querySelector("body").className = browserName;

  if (browserName == "chrome" ) {}
  else if (browserName == "edge" ) {}
  else{
    const matches = document.querySelectorAll(".COLRv1_setting");
    matches.forEach((match) => {
      match.setAttribute('disabled', true);
    });
  }
}

const fontVariationSettings = {
  /* slider handlers store their axis values here */
}

/* color variations */
function depthAxisHandler(value) {
  fontVariationSettings["EDPT"] = value;
  updateFontVariationSettings();
}

function highlightAxisHandler(value) {
  fontVariationSettings["EHLT"] = value;
  updateFontVariationSettings();
}

function fontSizeHandler(value) {
  const element = document.querySelector(".color-text");
  element.style.fontSize = `${value}px`;
}

function fontLineHeightHandler(value) {
  const element = document.querySelector(".color-text");
  element.style.lineHeight = value;
}

function updateFontVariationSettings() {
  const element = document.querySelector(".color-text");
  const settings = Object.entries(fontVariationSettings).map(item => `'${item[0]}' ${item[1]}`)
  element.style.fontVariationSettings = settings.join(", ");
}

/* BW variations */
function depthAxisHandler2(value) {
  fontVariationSettings["EDPT"] = value;
  updateFontVariationSettings2();
}

function highlightAxisHandler2(value) {
  fontVariationSettings["EHLT"] = value;
  updateFontVariationSettings2();
}

function updateFontVariationSettings2() {
  const element = document.querySelector(".bw-text");
  const settings = Object.entries(fontVariationSettings).map(item => `'${item[0]}' ${item[1]}`)
  element.style.fontVariationSettings = settings.join(", ");
}

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);

// Changing color for the gradient
function changeGradient() {
  const nabla_color = document.querySelector(".nabla_color");
  nabla_color.style.background =
    "linear-gradient(180deg, " +
    color1.value + ", " +
    color2.value + ")";
}

function onLoad() {
  for (const element of document.querySelectorAll(".slider")) {
    element.oninput(element.value);
  }
  fnBrowserDetect();
}

// this should be simplified... 
const overRide0 = document.querySelector(".COLRv1_opt0");
const overRide1 = document.querySelector(".COLRv1_opt1");
const overRide2 = document.querySelector(".COLRv1_opt2");
const overRide3 = document.querySelector(".COLRv1_opt3");
const overRide4 = document.querySelector(".COLRv1_opt4");
const overRide5 = document.querySelector(".COLRv1_opt5");
const overRide6 = document.querySelector(".COLRv1_opt6");
const overRide7 = document.querySelector(".COLRv1_opt7");
const overRide8 = document.querySelector(".COLRv1_opt8");
const overRide9 = document.querySelector(".COLRv1_opt9");


for (let i = 0; i < 10; i++) {
  document.querySelector(".COLRv1_opt"+i).addEventListener("input", changePalette);
}

let palettte = "--custom";
let colors = [];
// base set to palette --0
colors = ["#FFD214", "#FF552D", "#FF9B00", "#FF9123", "#FFD214", "#FFEB6E", "#FFD214", "#FFEB6E", "#FFFABE", "#FFFFFF"];

function changePalette() {
  
  colors = [overRide0.value, overRide1.value, overRide2.value, overRide3.value, overRide4.value, overRide5.value, overRide6.value, overRide7.value, overRide8.value, overRide9.value];

  const element = document.querySelector(".color-text");
  element.style.fontPalette = palettte;

  let styleSheetContent = " @font-palette-values " + palettte + " { font-family: Nabla; override-colors: ";
  for (let i = 0; i < 10; i++) {
    styleSheetContent += i + " " + colors[i] + "";
    if (i < 9) {
      styleSheetContent += ", ";
    }
  }
  styleSheetContent += "; }";
  
  const customColors = new CSSStyleSheet();
  customColors.replaceSync(styleSheetContent);
  document.adoptedStyleSheets = [customColors];

  console.log("palette set to " + palettte);
  console.log(" Use this CSS style to set your custom color palette" + styleSheetContent);
}

function fontPaletteHandler(value) {

  let paletteselect = document.querySelector("#font-palette");
  paletteselect.className = "palette"+value;
  
  let palettti = value;
    if (palettti == "--0"){
      colors = ["#FFD214", "#FF552D", "#FF9B00", "#FF9123", "#FFD214", "#FFEB6E", "#FFD214", "#FFEB6E", "#FFFABE", "#FFFFFF"];
    }
    if (palettti == "--1"){
      colors = ["#ff1471", "#780082", "#be14b4", "#9b1eaf", "#ff1471", "#ff6b8b", "#ff1471", "#ff6b8b", "#ff9cc2", "#ffffff"];
    }
    if (palettti == "--2"){
      colors = ["#00a0e1", "#2200f5", "#3c6eff", "#325aff", "#00a0e1", "#1ee1ff", "#00a0e1", "#1ee1ff", "#87ffff", "#ffffff"];
    }
    if (palettti == "--3"){
      colors = ["#5a5a78", "#141432", "#464664", "#323250", "#5a5a78", "#787896", "#5a5a78", "#787896", "#9696b4", "#c8c8d2"];
    }
    if (palettti == "--4"){
      colors = ["#c3c3e1", "#555573", "#8c8caa", "#8282a0", "#c3c3e1", "#d7d7f5", "#c3c3e1", "#d7d7f5", "#f5f5ff", "#ffffff"];
    }
    if (palettti == "--5"){
      colors = ["#ffd700", "#00a050", "#00a050", "#00a050", "#02abd0", "#02abd0", "#ffd700", "#ffd700", "#02abd0", "#00dcdc"];
    }
    if (palettti == "--6"){
      colors = ["#3c148c", "#d20050", "#d20050", "#d20050", "#f52882", "#f52882", "#3c148c", "#3c148c", "#f52882", "#ff5ac8"];
    }
    
    for (let i = 0; i < 10; i++) {
      document.querySelector(".COLRv1_opt"+i).value = colors[i];
    }
    
   const element = document.querySelector(".color-text");
   
   element.style.fontPalette = palettti;
   console.log("palette set to " + palettti);
}