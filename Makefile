include .env
export $(shell sed 's/=.*//' .env)

nodejsContainerName = frontend-nodejs
nginxContainerName = frontend-nginx

prod-yarn-install:
	docker-compose run ${nodejsContainerName} yarn install
prod-encore:
	docker-compose run ${nodejsContainerName} yarn run prod
server:
	docker-compose up -d ${nginxContainerName}
