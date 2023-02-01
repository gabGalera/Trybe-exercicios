FROM httpd:2.4
ADD missao-trybe.html /usr/local/apache2/htdocs
VOLUME ["./:/usr/local/apache2/htdocs"]
EXPOSE 80
CMD ["httpd-foreground"]