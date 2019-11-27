# apollo-todo
A to-do app built using Apollo server, Prisma and Apollo client


## Notes  📜
---
#### docker

[Getting into a container](https://phase2.github.io/devtools/common-tasks/ssh-into-a-container/)

First, you may have to navigate to the correct directory. I had trouble, initially, from executing a shell from ~/, but then after I had done it once, there were no problems accessing a shell in docker from anywhere. Weird. Will look into this more in the future. 


Get the name of your container: 
`docker ps`

Execute a shell or run an arbitrary command.
```
docker exec -it <container name> /bin/bash

docker exec -it <container name> <some command in the container>
```

To run a series of commands, you must wrap them in a single command using a shell. For example: 
```
docker-compose run 
<name in yml> sh -c '<command 1> && <command 2> && <command 3>'
```

---


#### prisma

First move
`prisma init`

Generate the prisma client into a folder called 'generated'. 
`prisma generate`



