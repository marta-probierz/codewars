function validateUsr(username) {
 return /^[a-z0-9_]{4,16}$/.test(username); 
}

// one line
const validateUsr = username => /^[a-z0-9_]{4,16}$/.test(username);
