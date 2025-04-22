var randomTexts = [
    "my website is not slow, it's ur wifi",
    "SubhanAllah  سُـبْحانَ الله",
    "he got caught hash-ing passwords without salt!",
    "nah, I code in 1s and 0s, the way God intended",
    "I don't need antivirus, I leave debuggers open",
    "am not useless, mosquitoes wait for me to have supper",
    "am not broke, I declare variables using $ -php developer",
    "xss out of scope, but it's still a bug",
];
// Check if the Oswald font is loaded
var terminalFont = new FontFace('OswaldRegular', 'url(fonts/Oswald/Oswald-Regular.ttf) format("truetype")');
terminalFont.load().then(function (loadedFont) {
    document.fonts.add(loadedFont);
    var randomIndex = Math.floor(Math.random() * randomTexts.length);
    var randomText = randomTexts[randomIndex];
    var randomDiv = document.getElementById('random');
    randomDiv.textContent = randomText;
    randomDiv.style.display = 'block'; // Show the text once font is loaded
}).catch(function (error) {
    console.log('Font loading failed:', error);
    // Fallback to system font or handle font loading error here
});