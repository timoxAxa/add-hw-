let arr = [
    {
        id: 1,
        name: "AZIZ",
        budget: 500000,
        tax: 12,
        expensesPerYear: [
            {
                for: "design",
                total: 60000,
            },
            {
                for: "material",
                total: 70000,
            },
            {
                for: "place",
                total: 120000,
            },
        ],
    },
    {
        id: 2,
        name: "KAMERON_CINEMA",
        budget: 600000,
        tax: 12,
        expensesPerYear: [
            {
                for: "camera",
                total: 90000,
            },
            {
                for: "actors",
                total: 140000,
            },
            {
                for: "electricity",
                total: 50000,
            },
        ],
    },
    {
        id: 3,
        name: "ISKANDARs_ZOO",
        budget: 450000,
        tax: 12,
        expensesPerYear: [
            {
                for: "animals",
                total: 100000,
            },
            {
                for: "cloune",
                total: 15000,
            },
            {
                for: "food",
                total: 70000,
            },
        ],
    },
    {
        id: 4,
        name: "AMINs_SOOOO",
        budget: 800000,
        tax: 12,
        expensesPerYear: [
            {
                for: "house",
                total: 200000,
            },
            {
                for: "cars",
                total: 150000,
            },
            {
                for: "family",
                total: 300000,
            },
        ],
    },
];


for (let item of arr) {
    item.expensesPerMonth = 0
    item.expensesTotal = 0

    //   for(let itemTwo of item.expensesPerYear) {
    //   }
}
let plusArr = [] //имена компаний
let minusArr = []
for (let item of arr) {
    item.expensesPerMonth = 0
    item.expensesProcent = 0

    for (let itemTwo of item.expensesPerYear) {
        item.expensesPerMonth += Math.round(itemTwo.total / 12)
        item.expensesTotal = item.budget - itemTwo.total
        
    }
    let budgetPerMonth = item.budget / 12
    item.expensesProcent = Math.round(item.expensesPerMonth * 100 / budgetPerMonth)

}
console.log(arr);