TO update schema: Clear all schema except
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

2. npx prisma db pull

3. Clear Migrations.sql

4. npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql

npx prisma migrate resolve --applied 0_init 


5. npx prisma generate


all collegs: https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-colleges-and-universities&rows=10000&fields=name,address,city,state,zip,telephone