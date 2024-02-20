function getTestingTypeDefinition(type) {
    const definitions = {
        "functional": "Functional testing evaluates the functions that a component or system should perform. The functions are “what” the test object should do. The main objective of functional testing is checking the functional completeness, functional correctness and functional appropriateness.",
        "non-functional": "Non-functional testing evaluates attributes other than functional characteristics of a component or system. Non-functional testing is the testing of “how well the system behaves”. The main objective of non-functional testing is checking the non-functional software quality characteristics.",
        "black-box": "Black-box testing is specification-based and derives tests from documentation external to the test object. The main objective of black-box testing is checking the system's behavior against its specifications.",
        "white-box": "White-box testing is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows). The main objective of white-box testing is to cover the underlying structure by the tests to the acceptable level."
        // Добавьте другие типы тестирования по мере необходимости
    };

    return definitions[type.toLowerCase()] || "Definition not found for the provided testing type.";
}

// Пример использования
console.log(getTestingTypeDefinition("functional"));
console.log(getTestingTypeDefinition("non-functional"));
console.log(getTestingTypeDefinition("black-box"));
console.log(getTestingTypeDefinition("white-box"));
