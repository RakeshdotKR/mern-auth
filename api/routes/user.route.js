import express from 'express';
import { test } from '../controllers/user.controller.js'; //.js at the end is necessary

const router = express.Router();

// router.get("/", (req, res) => {
//     res.json({
//       message: "GET method is working fine",
//     });
//   });

router.get('/',test);

export default router;