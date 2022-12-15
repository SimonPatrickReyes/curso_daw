FROM php:7.4-apache
RUN apt install -y nano && apt install -y git && nano index.html 
MKDIR /var/www/html index.html
