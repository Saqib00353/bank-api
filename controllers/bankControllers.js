let accounts = []
let banks = []
let customers = []
let transactions = []

let customerIdCounter = 0
let bankIdCounter = 0
let accountIdCounter = 0

exports.post_accounts = function (req, res) {
  const { customer, bank, accountType, initialDeposite } = req.body

  customers.push({ id: ++customerIdCounter, name: customer })
  banks.push({ id: ++bankIdCounter, name: bank })
  const account = {
    id: ++accountIdCounter,
    customerId: customerIdCounter,
    type: accountType,
    bankId: bankIdCounter,
    balance: initialDeposite,
  }
  accounts.push(account)

  res.status(201).json(account)
}

exports.post_transactions = function (req, res) {}

exports.get_balance = function (req, res) {}

exports.get_tranfers = function (req, res) {}
