let str = "Deepak kumar Mahaseth";
count = 1;

for (i = 0; i <= str.length - 1; i++) {
  if (str[i] == " ") {
    count++;
  }
}
console.log(count);