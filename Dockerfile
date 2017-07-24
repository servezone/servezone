FROM hosttoday/ht-docker-node:stable
RUN yarn global add servezone
CMD ["servezone", "start"]
