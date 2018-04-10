# test regenerator-runtime

### 1. `npm install`

### 2. `node webpack.dev.js`

### 3. open 'http://localhost:3000'

### 4. `Uncaught TypeError: Cannot read property 'default' of undefined`

### 5. but move [main.js#L103](./target/main.js#L103) and [main.js#L105](./target/main.js#L105) to the front of [main.js#L76](./target/main.js#L76), then everything seems to be ok.