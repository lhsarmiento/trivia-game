import { Router } from "express";
import { test } from "../controllers/main.controller.js";
import auth_router from "./auth.route.js";
import { valid_token } from "../services/middleware/valid-token.js";

const router = Router()

router.get('/test', test)

router.use('/auth', auth_router)

const contro = (req, res) => {
    res.status(200).json({
        msg: 'Tu score es 1000'
    })
}

router.get('/score', valid_token, contro)

export default router