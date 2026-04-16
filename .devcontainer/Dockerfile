FROM mcr.microsoft.com/devcontainers/javascript-node:22

USER root

RUN npm install -g @anthropic-ai/claude-code \
  && npm cache clean --force

USER node
