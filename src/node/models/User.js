import Connection from './Connection.js';
const Schema = Connection.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    }
});

export default Connection.model("User", UserSchema);
