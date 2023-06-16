const { Router } = require('express')

const { post_accounts, post_transactions, get_balance, get_tranfers } = require('../controllers/bankControllers.js')

const router = Router()

router.post('/accounts', post_accounts)
router.post('/transactions/transfer', post_transactions)
router.get('/accounts/{accountId}/balance', get_balance)
router.get('/accounts/{accountId}/transfers', get_tranfers)

exports.bankRoutes = router
