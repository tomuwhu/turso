Install turso:

```bash
mac:
brew install tursodatabase/tap/turso

linux/win:
curl -sSfL https://get.tur.so/install.sh | bash

signup:
turso auth signup
```

Create project
```bash
npx sv create
┌  Welcome to the Svelte CLI! (v0.6.25)
◇  Where would you like your project to be created? # turso
◇  Which template would you like? # SvelteKit minimal
◇  Add type checking with TypeScript? # No
◇  What would you like to add to your project? (use arrow keys / space bar) # drizzle, lucia
◇  drizzle: Which database would you like to use? # SQLite
◇  drizzle: Which SQLite client would you like to use? # Turso
◇  lucia: Do you want to include a demo? (includes a login/register page) # Yes
◇  Which package manager do you want to install dependencies with? # npm
```

```bash
login:
turso auth login
turso db create _dbname_
turso db shell _dbname_
turso db show --url _dbname_
turso db tokens create _dbname_
```
Set .env url and token variables
```bash
npm run db:push
npm run dev
```

Register a new user [on local](http://localhost:5173/demo/lucia)

```bash
turso db shell _dbname_
  → PRAGMA table_list;
  → SELECT * FROM user;
```

Create first commit

Publish to GitHub as Public

On netlify:
- add new site
- set enviroment variables (DATABASE_URL and DATABASE_AUTH_TOKEN)
- deploy
