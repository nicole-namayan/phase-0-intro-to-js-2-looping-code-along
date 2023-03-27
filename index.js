function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Example usage:
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "birthday";
const messages = writeCards(names, event);
console.assert(messages.length === names.length, "Expected same number of messages as names");
console.log(messages);



function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

// Example usage:
countDown(10);

