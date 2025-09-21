# clash - discover better people using votes and comments.
revising everything from scratch - weeknds

Frontend Backend ORM Database Sockets
Nextjs, Nodejs, Redis Queues, SocketIO, Postgresql, Prisma, Typescript

Features:
- Basic CRUD for clash and photo uploads
- Dashboard Links and Sharable Links for each clash with public votes and comments
- Realtime votes and comments shown on dashboard with socket io
- Redis Queues (Later KAFKA) used for processing likes and comments to save in DB
- Auth using zod with email
- email verification with link (also sent using queues not using main thread)
- forgot password using email sent links (url tokens) (also send using queues)
- everything typescript - fe,be
