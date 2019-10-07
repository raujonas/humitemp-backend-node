import passport from "passport";
import passportLocal from "passport-local";
import {IUser} from "../interfaces/IUser";
import {User} from "../models/user.model";

passport.use(new passportLocal.Strategy({
        usernameField: "email"
    },
    (username, password, done) => {
        User.findOne({email: username}, (err, user: IUser) => {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, {
                    message: "User not found"
                });
            }

            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: "Password is wrong"
                });
            }

            return done(null, user);
        });
    }
));
