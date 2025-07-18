FROM jenkins/jenkins:lts

USER root

# Instalar Docker CLI y Node.js
RUN apt-get update && \
    apt-get install -y docker.io curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    usermod -aG docker jenkins && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

USER jenkins
