# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18 AS build

WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build --prod


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/portal_geg /usr/share/nginx/html

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]