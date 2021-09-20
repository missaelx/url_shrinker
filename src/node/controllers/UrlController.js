import Url from '../models/Url.js';

const UrlController = {
    get: async (req, res) => {
        let urls = await Url.find({created_by: req.user._id}).populate('visits').exec();
        res.sendData(urls);
    },
    getOne: async (req, res) => {
        let id = req.params.id;
        let url = await Url.findById(id).populate('visits').populate('created_by').exec();
        if(! url) return res.notFound();
        res.sendData(url);
    },
    create: async (req, res) => {
        let userIp = req.ip.split(":").pop();
        let newUrl = new Url({
            created_by: req.user._id,
            url: req.body.url,
            data: {
                deviceCreatorInfo: req.deviceInfo,
                userIp
            }
        })

        newUrl.save();

        res.sendOk({url: newUrl.url});
    }
}

export default UrlController;