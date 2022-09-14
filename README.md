# setup-app

koa-typescript
react-typescript
nginx
postgres
docker-compose

# port
api : 8000
app : 3000
admin_database : 8080
postgres : 5432
nginx : 80

firt run docker-compose up -d --build

if error run (Docker failed to solve with frontend dockerfile.v0: failed to create LLB definition)
- export DOCKER_BUILDKIT=0
- export COMPOSE_DOCKER_CLI_BUILD=0
