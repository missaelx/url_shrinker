import Connection from './Connection.js';
const Schema = Connection.Schema;

const VisitSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    deviceInfo: {
        type: Object
    },
    url: {
        type: Schema.Types.ObjectId,
        ref: 'Url'
    },
    userIp: {
        type: String,
        required: false
    }

});

export default Connection.model('Visit', VisitSchema);
