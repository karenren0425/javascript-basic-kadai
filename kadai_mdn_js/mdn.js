const today = new Date();
const [year,month,day] = [
  today.getFullYear(),today.getMonth(),today.getDate()];

console.log(today.getFullYear() + '年' + (today.getMonth() +1 )+ '月' +today.getDate() + '日');