FROM oven/bun:1
WORKDIR /app
COPY package*.json /app
RUN bun install
COPY . /app
CMD ["bun", "run", "start"]
