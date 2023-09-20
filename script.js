document.getElementById("countButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const vowelCount = countVowels(inputText);
    document.getElementById("result").textContent = `Vowel Count: ${vowelCount}`;
});

function countVowels(text) {
    const vowels = "AEIOUaeiou";
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    return count;
}
