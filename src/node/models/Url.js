import Connection from './Connection.js';
import shortId from "shortid";

const Schema = Connection.Schema;

const UrlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    data: {
        type: Object,
        required: false
    },
    created_by: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    visits: [{ type: Schema.Types.ObjectId, ref: 'Visit' }]
});

export default Connection.model('Url', UrlSchema);
