#!/usr/bin/bash

apt-get update -y
apt-get upgrade -y
apt-get install nodejs -y
apt-get install libwebp -y
apt-get install mc -y
apt-get install python -y
apt-get install ffmpeg -y
apt-get install npm -y
apt install nmap -y
npm i
apt-get install wget -y
apt-get install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm i imgbb-uploader
npm i got

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
