
function validateName(name) {
    const nameRegex = /^[a-zA-Z ]{2,}$/;
    return nameRegex.test(name);
}

function validateUsername(username) {
    const usernameRegex = /^\w{3,12}$/;
    return usernameRegex.test(username);
}


console.log("=== Phase 1 Tests ===");

console.log(validateName("Alex Johnson"));
console.log(validateName("B"));
console.log(validateName("Dana Scully"));

console.log(validateUsername("alex_j"));
console.log(validateUsername("da"));
console.log(validateUsername("cool_user_123"));
