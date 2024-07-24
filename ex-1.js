const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]

function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for ( let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j] > customers[j+1]) {
        let curr = customers[j]
        customers[j] = customers[j+1]
        customers[j+1] = curr
      }
    }
  }
  return customers
}

// ตอบคำถามตรงนี้จ้า
console.log(sortCustomerName(customers))