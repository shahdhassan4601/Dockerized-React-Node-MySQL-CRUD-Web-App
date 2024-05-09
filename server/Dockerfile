 # pull node 20 image 
FROM node:20

# Set the working directory in the container
WORKDIR /app

# copy all packages in package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install 

# Copy rest of application source code 
COPY . .

# Expose the port that the application listens on
EXPOSE 5000

# Start the Node.js application
CMD [ "npm", "start" ]