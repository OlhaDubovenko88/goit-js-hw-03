function slugify(title) {
  const webAddress = title.toLowerCase();
  const slugText = webAddress.split(" ");
  return slugText.join("-");
}
console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developers"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
