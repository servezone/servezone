FROM hosttoday/ht-docker-node:stable
RUN yarn global add servezone
CMD ["coreflow", "start"]
