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
    let requests = [];

    for (let party of trustedParties) {
        const url = `${party.url}/DocumentReference`;
        
        requests.push(axios.request({
            url,
            method: req.method,
            data: req.body,
            params: req.query,
            timeout: 25000
        }));

    }

    let responses = await Promise.allSettled(requests);

    for (let result of responses) {

        if(result.status == "rejected"){
            console.log(result.reason);
            continue;
        }

        let response = result.value;

        // Only add to response if response was OK
        // TODO Throw warnings for errors
        if (response.status === 200) {
            total += response.data['total'];
            if(response.data['entry']){
            	entries = entries.concat(response.data['entry']);
            }
            response.data['link'].forEach(e => {
                if(e["relation"]){
                    e["relation"] = "related";
                }
            });
            links = links.concat(response.data['link']);

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
    };
    res.status(200).send(response);
});

module.exports = router;
