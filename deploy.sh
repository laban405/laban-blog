#!/bin/sh
set -e # Stop script from running if there are any errors

IMAGE_NAME="laban405/vessel-global" # Docker image
# GIT_VERSION=$(git describe --always --abbrev --tags --long) # Git hash and tags
IMAGE_TAG=$(git rev-parse --short HEAD) # Git hash and tags

echo ":: - Building Docker image ${IMAGE_NAME}:${IMAGE_TAG}, and tagging as latest"

# Build and tag image
docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${IMAGE_NAME}:latest


echo ":: - Authenticating and pushing image to Docker Hub"
# Log in to Docker Hub and push
echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USER}" --password-stdin
docker push ${IMAGE_NAME}:${IMAGE_TAG}
docker push "${IMAGE_NAME}:latest"

# Decode SSH key
echo "${SSH_KEY}" | base64 -d > ssh_key
chmod 600 ssh_key # private keys need to have strict permission to be accepted by SSH agent

# Add production server to known hosts
echo "${SERVER_PUBLIC_KEY}" | base64 -d >> ~/.ssh/known_hosts

echo ":: - Deploying via remote SSH"
ssh -i ssh_key "laban@${SERVER_IP}" \
  "docker pull ${IMAGE_NAME}:${IMAGE_TAG} \
  && docker stop live-container \
  && docker rm live-container \
  && docker run --init -d --name live-container -p 80:3000 ${IMAGE_NAME}:${IMAGE_TAG} \
  && docker system prune -af" # remove unused images to free up space

echo ":: - Successfully deployed"