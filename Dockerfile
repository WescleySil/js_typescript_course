FROM node:bookworm

#Define pasta dentro do container
WORKDIR /js_typescript_course

#Copia todos os arquivos da pasta atual para a pasta do container
COPY . /js_typescript_course 

#Porta para rodar servidores
EXPOSE 5000

RUN npm install -g http-server

#tem que passar os parametros em aspas duplas
ENTRYPOINT ["http-server", "-p 5000"]