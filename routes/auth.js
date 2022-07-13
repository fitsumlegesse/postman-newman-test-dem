import express from 'express'

import {register} from '../controllers/auth';

const router = express.Router()



/* when the endpoint /api/register is accessed by a client and content is posted/sent
   it will be routed to the below router. The below router will then refer to the register
   function imported from contollers/auth
   further explanation will continue in the controller/auth file 
*/

router.post("/register", register)



module.exports = router;