
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
]
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
}

function calculateSalesTax(salesData, taxRates) {
  //new object results
  let finances = {}
  //in results create key from original object key "name" made of empy object
  for (i = 0; i < salesData.length; i++) {
    var company = [salesData[i]["name"]]
    finances[company] = {}
  }


  for (each of salesData) {
    howManySales = each.sales.length
    arrayOfSales = each.sales
    let totalSales = 0
    for (i = 0; i < howManySales; i++) {
      totalSales += arrayOfSales[i]
    }
    taxRate = taxRates[each.province]
    totalTaxes = taxRate * totalSales
    if (!finances[each.name].totalSales) {
     finances[each.name].totalSales = totalSales
    } else {
      finances[each.name].totalSales += totalSales
    }
    if (!finances[each.name].totalTaxes) {
      finances[each.name].totalTaxes = totalTaxes
    } else {
      finances[each.name].totalTaxes += totalTaxes
    }
  }
  console.log(finances)
}

var results = calculateSalesTax(companySalesData, salesTaxRates)

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/