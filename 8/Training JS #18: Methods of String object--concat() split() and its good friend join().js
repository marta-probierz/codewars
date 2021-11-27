function splitAndMerge(string, separator) {
 return string.split(" ").map(index => index.split("").join(separator)).join(" ");
}

// one line 
const splitAndMerge = (string, separator) => string.split(" ").map(index => index.split("").join(separator)).join(" ");
