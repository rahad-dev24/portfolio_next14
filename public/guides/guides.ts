type guide = {
  name: string;
  manual: string;
};

export const guides: guide[] = [
  {
    name: "Docker & Docker-Desktop",
    manual: `
docker file reference

	https://docs.docker.com/reference/dockerfile/


docker cli reference

	https://docs.docker.com/reference/cli/docker/


advanced docker 

	https://docs.docker.com/build/guide/


///install Docker///


	sudo pacman -S gnome-terminal

download release from

	https://download.docker.com/linux/static/stable/x86_64/

extract file

	tar xzvf /path/to/<FILE>.tar.gz

move file to user/bin

	sudo cp docker/* /usr/bin/

start docker daemon

	sudo dockerd &             ****


If you need to start the daemon with additional options, 
modify the above command accordingly or create and edit the file 
/etc/docker/daemon.json to add the custom configuration options.


Verify that Docker is installed correctly by running the hello-world image.

	sudo docker run hello-world


///Post install///

To run Docker without root privileges

Create the docker group.

	sudo groupadd docker

Add your user to the docker group.

	sudo usermod -aG docker $USER

	newgrp docker

	docker run hello-world

if error loading file 

	sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
	sudo chmod g+rwx "$HOME/.docker" -R

Configure Docker to start on boot with systemd

	sudo systemctl enable docker.service
	sudo systemctl enable containerd.service

To stop this behavior, use disable instead.

	sudo systemctl disable docker.service
	sudo systemctl disable containerd.service

///install Docker-Dektop///

Download the Arch package from the release page

https://docs.docker.com/desktop/release-notes/


	sudo pacman -U ./docker-desktop-<version>-<arch>.pkg.tar.zst


To start Docker Desktop for Linux, search Docker Desktop on the Applications

Alternatively, open a terminal and run:
 
	systemctl --user start docker-desktop

	systemctl --user enable docker-desktop


After you’ve successfully installed Docker Desktop,
you can check the versions of these binaries by running the following commands:


	 docker compose version
		Docker Compose version v2.17.3

	 docker --version
		Docker version 23.0.5, build bc4487a

	 docker version
		Client: Docker Engine - Community
		 Cloud integration: v1.0.31
		 Version:           23.0.5
		 API version:       1.42
		<...>



///remove docker-desktop///

	sudo pacman -R docker-desktop

	
	rm -r $HOME/.docker/desktop
	sudo rm /usr/local/bin/com.docker.cli
	sudo pacman -Rns docker-desktop

`,
  },
  {
    name: "PostgreSQL",
    manual: `

///install PostgreSQL///

sudo pacman -S postgresql
 
sudo -iu postgres


initdb --locale=en_US.UTF-8 -E UTF8 -D /var/lib/postgres/data

exit


systemctl start postgresql.service

systemctl enable postgresql.service

///
Export Database

pg_dump -U postgres > db.sql
pg_dumpall -U postgres > all.sql


Import Database

psql -U postgres -d testdb < db.sql


# open psql terminal
    psql -U postgres


#Create a user with no password:

    CREATE USER jonathan;


#Create a user with a password:

    CREATE USER rahad WITH PASSWORD 'dev24' SUPERUSER;


#Create a user with a password that is valid until the end of 2004
 After one second has ticked in 2005, the password is no longer valid.

    CREATE USER miriam WITH PASSWORD 'jw8s0F4' VALID UNTIL '2005-01-01';


#Create an account where the user can create databases:

    CREATE USER manuel WITH PASSWORD 'jw8s0F4' CREATEDB;


ALTER ROLE role_specification [ WITH ] option [ ... ]

where option can be:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT connlimit
    | [ ENCRYPTED ] PASSWORD 'password' | PASSWORD NULL
    | VALID UNTIL 'timestamp'

    ALTER ROLE name RENAME TO new_name;


Examples

Change a role's password:

    ALTER ROLE davide WITH PASSWORD 'hu8jmn3';

Remove a role's password:

    ALTER ROLE davide WITH PASSWORD NULL;

Change a password expiration date, specifying that the password should
 expire at midday on 4th May 2015 using the time zone which is one hour ahead of UTC:

    ALTER ROLE chris VALID UNTIL 'May 4 12:00:00 2015 +1';

Make a password valid forever:

    ALTER ROLE fred VALID UNTIL 'infinity';

Give a role the ability to create other roles and new databases:

    ALTER ROLE miriam CREATEROLE CREATEDB;

# help
    \\help
# connect to a database
    \\c database
# list users
    \\du
# list of tables in connected database
    \\dt
# list databases
    \\l
# describe relations
    \\d+ "table_name"
# for more meta commands
    \\?
# connect to databases as user

    psql -d pernapp -U rahad

    CREATE DATABASE prisma WITH OWNER rahad;

# If Postgresql server not running reset

step 1: create the data directory (acordingly with the PGROOT variable set before in the config file)

sudo mkdir /var/lib/postgres/data

Step 2: set /var/lib/postgres/data ownership to user 'postgres'

chown postgres /var/lib/postgres/data

Step 3: As user 'postgres' start the database.

sudo -iu postgres

initdb  -D '/var/lib/postgres/data'

Step 4: Start the service as root

systemctl start postgresql.service

systemctl enable postgresql.service



///Run PostgreSQL in Docker///

Download the postgres image from DockerHub
Create a Dockerfile in a folder where you want to save your postgers server data

	docker run -d \\
	-p 6000:5432 \\
	-v \\\${pwd/db}:/var/lib/postgres/data \\
	-e POSTGRES_PASSWORD=password \\
	-e POSTGRES_USER=postgres \\
	-e POSTGRES_DB=postgres \\
	--name pg \\
	postgres

A shared volume will be created under the current directory db folder(as given in the code).
You can easily use this volume for later as is saver all the databases.
	
`,
  },
  {
    name: "Change default Bash Shell to Zsh",
    manual: `		
	chsh -s $(which zsh)

	source ~/.zshrc

	echo $SHELL`,
  },
  {
    name: "Prisma ORM",
    manual: `

///Install Prisma///

	npm install prisma --save-dev

///Init Prisma///

	npx prisma init --datasource-provider <eg. postgresql, mysql, sqlite, mongodb>


///.env///

Hosted locally

	DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database name>?schema=public"

URL provided by your database/hosting provider

	DATABASE_URL="<URL>"


///model your data///
The Prisma schema provides an intuitive way to model data. Add the following models to your schema.prisma file:

prisma/schema.prisma file

	model Post {
	  id        Int      @id @default(autoincrement())
	  createdAt DateTime @default(now())
	  updatedAt DateTime @updatedAt
	  title     String   @db.VarChar(255)
	  content   String?
	  published Boolean  @default(false)
	  author    User     @relation(fields: [authorId], references: [id])
	  authorId  Int
	}

	model Profile {
	  id     Int     @id @default(autoincrement())
	  bio    String?
	  user   User    @relation(fields: [userId], references: [id])
	  userId Int     @unique
	}

	model User {
	  id      Int      @id @default(autoincrement())
	  email   String   @unique
	  name    String?
	  posts   Post[]
	  profile Profile?
	}


///create database tables///

Run a migration to create your database tables with Prisma Migrate

	npx prisma migrate dev --name init

This command did three things:

- It created a new SQL migration file for this migration in the prisma/migrations directory.
- It executed the SQL migration file against the database.
- It ran prisma generate under the hood (which installed the @prisma/client package and generated 
	a tailored Prisma Client API based on your models).

For Sqlite3

- Because the SQLite database file didn't exist before, the command also created it inside the prisma 
	directory with the name dev.db as defined via the environment variable in the .env file.

***Whenever you update your Prisma schema, you will have to update your database schema using
	either prisma migrate dev or prisma db push. This will keep your database schema in sync
	with your Prisma schema. The commands will also regenerate Prisma Client.

///Prisma client///

The install command invokes prisma generate for you which reads your Prisma schema and generates
a version of Prisma Client that is tailored to your models.

	npm install @prisma/client

	npx prisma generate

///Connecting to DB///

db.ts


	import { PrismaClient } from '@prisma/client'

	const prismaClientSingleton = () => {
	  return new PrismaClient()
	}

	declare const globalThis: {
	  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
	} & typeof global;

	const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

	export default prisma

	if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma



After creating this file, you can now import the PrismaClient instance 
anywhere in your Next.js pages as follows:

// e.g. in \`pages/index.tsx\`
	import prisma from './db'

	export const getServerSideProps = async () => {
	  const posts = await prisma.post.findMany()

	  return { props: { posts } }
	}


///For more///

	https://www.prisma.io/docs

  https://www.prisma.io/docs/guides


`,
  },
];
