import Url from "../models/Url.js";
import Visit from "../models/Visit.js";

const UrlRedirectController = {
    redirectByCode: async (req, res) => {
        let url = await Url.findOne({ short: req.params.urlCode })
        if (url == null) return res.notFound();
        let userIp = req.ip.split(":").pop();

        let newVisit = new Visit({
            deviceInfo: req.deviceInfo,
            url: url._id,
            userIp: userIp
        });

        await newVisit.save();

        url.clicks++;
        url.visits.push(newVisit._id);
        url.save();

        res.redirect(url.url)
    }
}

export default UrlRedirectController;