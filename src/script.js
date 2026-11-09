function validatePhone(phone) {
    const phoneRegex = /^\d{3}[-.]?\d{3}[-.]?\d{4}$/;
    return phoneRegex.test(phone);
}

function validatePromoCode(promo) {
    const promoRegex = /^SUMMER$/i;
    return promoRegex.test(promo || "");
}

console.log("\n=== Phase 2 Tests ===");

console.log(validatePhone("555-234-5678"));
console.log(validatePhone("555.345.6789"));
console.log(validatePhone("5554567890"));
console.log(validatePhone("555-678-901"));

console.log(validatePromoCode("SUMMER"));
console.log(validatePromoCode("summer"));
console.log(validatePromoCode("SUMMER2026"));
console.log(validatePromoCode(""));
