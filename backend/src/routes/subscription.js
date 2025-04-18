import express from "express";
import User from "../models/user.model.js";
import { jwtDecode } from "jwt-decode";

const router = express.Router();
console.log("subscription.js");
router.post("/update-subscription", async (req, res) => {
  const { plan } = req.body;

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }
  
  const token = authHeader.split(" ")[1];
  let email;

  try {
    const decoded = jwtDecode(token);
    email = decoded.email;
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }

  if (!plan) {
    return res.status(400).json({ success: false, message: "Missing plan" });
  }

  // Set expiry based on plan
  const expiresAt = new Date();
  switch (plan.toLowerCase()) {
    case "basic":
      expiresAt.setMonth(expiresAt.getMonth() + 1);
      break;
    case "pro":
      expiresAt.setMonth(expiresAt.getMonth() + 6);
      break;
    case "premium":
      expiresAt.setFullYear(expiresAt.getFullYear() + 1);
      break;
    default:
      return res.status(400).json({ success: false, message: "Invalid plan" });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          "subscription.plan": plan,
          "subscription.expiresAt": expiresAt,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
