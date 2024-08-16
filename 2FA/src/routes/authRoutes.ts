import { Router } from "express";
import {
  signup,
  verifyEmail,
  login,
  verify2FA,
} from "../controllers/authControllers";

const router = Router();

router.post("/signup", signup);
router.get("/verify-email", verifyEmail);
router.post("/login", login);
router.post("/verify-2fa", verify2FA);

export default router;
