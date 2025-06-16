const axios = require('axios');

module.exports = function(app) {
    app.get('/tools/leaks', async (req, res) => {
        const { apikey, request } = req.query;
        
        if (!global.apikey.includes(apikey)) return res.json({ status: false, error: 'Apikey invalid' });
        if (!request) return res.json({ status: false, error: 'Parameter request is required' });
        
        const payload = {
            token: "7511358281:BmBc3MHL",
            request,
            limit: 100,
            lang: "en"
        };

        try {
            const response = await axios.post("https://leakosintapi.com/", payload, {
                headers: { "Content-Type": "application/json" }
            });
            
            res.status(200).json({
                status: true,
                result: response.data
            });
        } catch (error) {
            res.status(500).send(`Error: ${error.message}`);
        }
    });
}
