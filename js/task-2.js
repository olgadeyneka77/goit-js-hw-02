function formatMessage(message, maxLength) {
  // Перевіряємо довжину рядка за допомогою властивості .length
  if (message.length <= maxLength) {
    return message;
  } else {
    // Відрізаємо частину від 0 до maxLength і додаємо "..."
    return message.slice(0, maxLength) + "...";
  }
}

// Код для перевірки:
console.log(formatMessage("Curabitur ligula sapien", 16)); 
console.log(formatMessage("Curabitur ligula sapien", 23)); 
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); 
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); 
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));