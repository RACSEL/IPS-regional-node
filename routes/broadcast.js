const express = require('express');
const trustedParties = require('../trusted-parties.json')
const router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', async (req, res) => {
    let total = 0;
    let entries = [];
    let id = null;
    for (let party of trustedParties) {
        const url = `${party.url}/DocumentReference`;
        const response = await axios.request(
            {
                url,
                method: req.method,
                data: req.body,
                params: req.query,
            },
        ).then((response) => {
            return response
        })
            .catch((err) => {
                return err;
            });

        // Only add to response if response was OK
        if (response.status === 200) {
            console.log(response);
            total += response.data['total'];
            entries = entries.concat(response.data['entries']);
        }
    }

    const response = {
        resourceType: 'DocumentReference',
        id: id, // TODO see what id use
        meta: {
            lastUpdated: new Date().toISOString() // TODO see what lastUpdated use and format
        },
        type: "searchset",
        total: total,
        link: [], // TODO empty for now, fix pagination
        entry: entries,
        search: {
            mode: "match" // TODO check other modes
        }
    };
    console.log(response);
    res.status(200).send(response);
});

module.exports = router;
