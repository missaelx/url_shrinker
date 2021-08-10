import User from "../../models/User.js";
import {hashPassword} from "../../utils/Hasher.js";

let user = new User({
    email: process.env.ADMIN_USER || "missaelxp@gmail.com",
    password: process.env.ADMIN_PASSWORD || "password",
    fullname: process.env.ADMIN_FULLNAME || "Missael Hernández"
});

user.password = hashPassword(user.password);

user.save()
    .then((user) => {
        console.log(`Default admin user created: ${user.fullname} ${user._id}`);
        process.exit();
    })
    .catch(error => {
        console.error("Cannot create default admin user");
        console.error(error);
        process.exit(1);
    });
