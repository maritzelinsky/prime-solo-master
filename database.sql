
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "teams" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (255) UNIQUE NOT NULL,
	"contact" VARCHAR (255),
	"email" VARCHAR (255),
	"phone_number" BIGINT
);

CREATE TABLE "time_slots" (
	"id" SERIAL PRIMARY KEY,
	"date" DATE,
	"start_time" TIME,
	"end_time" TIME
);

CREATE TABLE "time_slots_teams" (
	"id" SERIAL PRIMARY KEY,
	"time_slot_id" INT REFERENCES "time_slots",
	"team_id" INT REFERENCES "teams"
);

-- Test Values

INSERT INTO "teams" ("name", "contact", "phone_number")
VALUES ('15UA Black', 'Marit Zelinsky', '9522709564'), ('U15A Blue', 'J.B. Olson', '9525555555');

INSERT INTO "time_slots" ("date", "start_time", "end_time")
VALUES ('2019-09-12', '05:15:00', '06:15:00'), ('2019-09-12', '06:30:00', '07:30:00'), ('2019-09-12', '07:45:00', '08:45:00');
	