import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

export enum UserRole {
  admin = "ADMIN",
  user = "USER",
}

const userSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    contact_number: {
      type: String,
      unique: true,
      immutable: true,
    },
    password: {
      type: String,
    },
    gender: {
      type: String,
      enum: {
        values: ["Male", "Female", "Other"],
        message: "Invalid Value",
      },
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      default: UserRole.user,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = async function () {
  try {
    const SECRET_KEY: any = process.env.JWT_SECRET_KEY;
    const user: object = {
      _id: this._id,
      email: this.email,
      contact_number: this.contact_number,
      role: this.role,
    };
    let token = jwt.sign({ user: user }, SECRET_KEY, {
      expiresIn: "6000000ms",
    });

    return token;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const User = model("user", userSchema);
