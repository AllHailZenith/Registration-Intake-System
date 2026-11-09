
function formatPhoneNumber(phone) {
    const phoneRegex = /^(\d{3})[-.]?(\d{3})[-.]?(\d{4})$/;

    if (!phoneRegex.test(phone)) {
        return null;
    }

    return phone.replace(phoneRegex, "($1) $2-$3");
}

console.log("\n=== Phase 3 Tests ===");

console.log(formatPhoneNumber("555-123-4567"));
console.log(formatPhoneNumber("555.234.5678"));
console.log(formatPhoneNumber("5553456789"));
console.log(formatPhoneNumber("555-678-901"));
