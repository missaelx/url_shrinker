import mongoose from 'mongoose';
import Config from '../utils/Config.js';
mongoose.connect(Config.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default mongoose;