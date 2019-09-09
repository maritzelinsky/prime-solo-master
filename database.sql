
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
	"name" VARCHAR (255) UNIQUE NOT NULL
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

INSERT INTO "teams" ("name")
VALUES ('15UA Black'), ('15UA Blue'), ('15UB'), ('12UA Black'), ('12UA Blue'), ('12UB Black'), ('12UB Blue');
	