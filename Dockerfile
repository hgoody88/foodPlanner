FROM node:current-alpine

LABEL org.opencontainers.image.title="Food Planner App" \
      org.opencontainers.image.description="App to plan meals of the day" \
      org.opencontainers.image.authors="@hgoody88"

RUN mkdir -p /src/app

COPY . /src/app

WORKDIR /src/app

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]
