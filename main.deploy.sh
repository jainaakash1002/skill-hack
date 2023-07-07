#!/bin/sh

set -eu

cd ~/landingPage

npm i --legacy-peer-deps

if pm2 ls | grep landingPage
then
    pm2 del landingPage
    cd ~/landingPage
    pm2 start main.ecosystem.config.js

fi

