FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ttmodz/Queen-Cutie /root/Queen-Cutie
WORKDIR /root/Queen-Cutie/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
