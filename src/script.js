const sampleUsers = [
    {
        name: "Alex Johnson",
        username: "alex_j",
        phone: "555-234-5678",
        promoCode: "SUMMER"
    },
    {
        name: "B",
        username: "cool_user_123",
        phone: "555.345.6789",
        promoCode: "summer"
    },
    {
        name: "Charlie Brown",
        username: "charlie!brown",
        phone: "5554567890",
        promoCode: "SUMMER2026"
    },
    {
        name: "Dana Scully",
        username: "da",
        phone: "555-567-8901",
        promoCode: "SuMmEr"
    },
    {
        name: "Edward Nygma",
        username: "the_riddler_super_fan",
        phone: "555-678-901",
        promoCode: null
    },
    {
        name: "Fiona Gallagher",
        username: "fiona_g",
        phone: "555-789-0123",
        promoCode: ""
    }
];

function processRegistration(user) {
    const errors = [];

    if (!validateName(user.name)) {
        errors.push("Invalid name");
    }

    if (!validateUsername(user.username)) {
        errors.push("Invalid username");
    }

    if (!validatePhone(user.phone)) {
        errors.push("Invalid phone");
    }

    if (errors.length > 0) {
        return {
            success: false,
            errors: errors
        };
    }

    return {
        success: true,
        data: {
            name: user.name,
            username: user.username,
            phone: formatPhoneNumber(user.phone),
            discountApplied: validatePromoCode(user.promoCode)
        }
    };
}

// Phase 4 Tests
console.log("\n=== Phase 4 Registration Results ===");

for (const user of sampleUsers) {
    console.log(processRegistration(user));
}
