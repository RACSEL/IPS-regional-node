const express = require('express');
const trustedParties = require('../trusted-parties.json')
const router = express.Router();
const axios = require('axios');
const { v4: uuidv4 } = require("uuid");


/* GET */
router.get('/', async (req, res) => {
    let total = 0;
    let entries = [];
    let links = [];
    for (let party of trustedParties) {
        const url = `${party.url}/List`;
        console.log(url);
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

        // TODO check that we received all references shown in total, total entries is less or equal than limit continue fetching


        // Only add to response if response was OK
        // TODO Throw warnings for errors
        if (response.status === 200) {
            total += +response.data['total'] ? +response.data['total'] : 0;
            if(response.data['entry']){
            	entries = entries.concat(response.data['entry']);
            }
            links = links.concat(response.data['link'])
        }
    }
    const response = {
        resourceType: 'Bundle',
        id: uuidv4(),
        meta: {
            lastUpdated: new Date().toISOString().replace('Z', '+00:00')
        },
        type: "searchset",
        total: total,
        link: links,
        entry: entries,
        search: {
            mode: "match"
        }
    };
    res.status(200).send(response);
});

module.exports = router;
