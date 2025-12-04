# Use the official Node.js image as a base image
FROM node:18

# Set environment variable for sharp
# ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package*.json ./

# Install dependencies including sharp
RUN yarn

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
