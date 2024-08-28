const middleware = {}

middleware['CheckUser'] = require('../middleware/CheckUser.js')
middleware['CheckUser'] = middleware['CheckUser'].default || middleware['CheckUser']

middleware['Checkuser1'] = require('../middleware/Checkuser1.js')
middleware['Checkuser1'] = middleware['Checkuser1'].default || middleware['Checkuser1']

middleware['isAuth'] = require('../middleware/isAuth.js')
middleware['isAuth'] = middleware['isAuth'].default || middleware['isAuth']

export default middleware
