import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import User from "db/schemas/user";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "id",
      passwordField: "password",
      session: false
    },
    async (id, password, done) => {
      try {
        const existUser = await User.findOne({ id: id });
        if (existUser) {
          return done(null, false, { message: "ID가 이미 존재합니다" });
        } else {
          const newUser = new User({
            id: id,
            password: password
          });
          return done(null, newUser);
        }
      } catch (err) {
        console.log(err);
        done(err);
      }
    }
  )
);
