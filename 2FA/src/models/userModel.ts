import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  phoneNumber?: string;
  is2FAEnabled: boolean;
  twoFactorSecret?: string;
  emailVerified: boolean;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  is2FAEnabled: { type: Boolean, default: false },
  twoFactorSecret: { type: String },
  emailVerified: { type: Boolean, default: false },
});

const User = model<IUser>("User", userSchema);

export default User;
