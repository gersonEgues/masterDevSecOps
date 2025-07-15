FROM jenkins/jenkins:lts

USER root

# Instalar Docker CLI dentro del contenedor Jenkins
RUN apt-get update && \
    apt-get install -y docker.io && \
    apt-get clean

# Volver al usuario jenkins
USER jenkins
