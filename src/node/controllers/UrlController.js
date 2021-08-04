import Url from '../models/Url.js';

const UrlController = {
    get: async (req, res) => {
        let urls = await Url.find().populate('visits').exec();
        res.sendData(urls);
    },
    getOne: async (req, res) => {
        let id = req.params.id;
        let url = await Url.findById(id).populate('visits').exec();
        if(! url) return res.notFound();
        res.sendData(url);
    },
    create: async (req, res) => {
        let newUrl = new Url({
            url: req.body.url,
            data: {
                deviceCreatorInfo: req.deviceInfo
            }
        })
        newUrl.save();
        res.sendOk({url: newUrl.url});
    }
}

export default UrlController;