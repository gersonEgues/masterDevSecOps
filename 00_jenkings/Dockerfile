FROM jenkins/jenkins:lts

USER root

# Instalar Docker CLI y Node.js
RUN apt-get update && \
    apt-get install -y docker.io curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

USER jenkins
