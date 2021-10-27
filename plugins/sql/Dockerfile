FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ttmodz/Queen-Cutie /skl/Queen-Cutie
WORKDIR /skl/Queen-Cutie
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
