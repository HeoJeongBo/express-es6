import User from "db/schemas/user";
import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

function signup(req, res, next) {
  /*
  const schema = Joi.object().keys({
    id: Joi.string()
      .min(4)
      .max(12)
      .required(),
    password: Joi.string()
      .min(6)
      .max(16)
      .required()
  });

  const validate = Joi.validate(req.body, schema);
  if (validate.error) {
    res.status(400).json({
      message: "validate error"
    });
    return;
  }

  */
  passport.authenticate("signup", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.status(401).json({ message: info.message });
    } else {
      // 정상적으로 들어 왔을 때
      req.login(user, async err => {
        try {
          await user.save();
          console.log("user created in db");
          res.status(200).json({
            message: "user created"
          });
        } catch (error) {
          console.log("joi validate: ", error);
          res.status(500).json({
            message: "error in signup auth.ctrl"
          });
        }
      });
    }
  })(req, res, next);
}

export { signup };
