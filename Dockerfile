# Use the official Bun image from Docker Hub
FROM oven/bun

# Set the working directory inside the container
WORKDIR /app

# Copy the project files into the container
COPY . .

# Install dependencies
RUN bun install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["bun", "start"]
