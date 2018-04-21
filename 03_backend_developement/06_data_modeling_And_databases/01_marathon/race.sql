CREATE TABLE race (
  name varchar(50),
  start_date timestamp,
  runner_name varchar(100),
  runner_bib integer,
  final_position integer,
  runner_race_time time
);

INSERT INTO race
  (name, start_date, runner_name, runner_bib, final_position, runner_race_time)
VALUES
  ('New York City Marathon - Women', '2017-11-05', 'Shalane Flanagan', 1001, 10, '2:26:53'),
  ('New York City Marathon - Women', '2017-11-05', 'Sébastienne Touseul', 101, 10002, '3:16:53'),
  ('New York City Marathon - Women', '2017-11-05', 'Maude Zarella', 10, 21043, '4:28:19'),
  ('New York City Marathon - Women', '2017-11-05', 'Cecile Ourkeussa', 18, 35001, '5:01:10'),
  ('New York City Marathon - Women', '2017-11-05', 'Anne Titgoute', 99, 102, '2:45:32'),
  ('New York City Marathon - Women', '2017-11-05', 'Justine Titgoute', 100, 62, '2:34:56'),
  ('New York City Marathon - Women', '2017-11-05', 'Corrine Titgoute', 101, 19054, '4:12:12'),
  ('New York City Marathon - Men', '2017-11-05', 'Geoffrey Kamworor', 1, 1, '2:10:53'),
  ('New York City Marathon - Men', '2017-11-05', 'Adhemar Patonauto', 1123, 5120, '3:13:13'),
  ('New York City Marathon - Men', '2017-11-05', 'Alain Dissoir', 17898, 23002, '4:30:32'),
  ('New York City Marathon - Men', '2017-11-05', 'Jean-Philipe Hervitmonslip', 410, 1, '4:10:12'),
  ('New York City Marathon - Men', '2017-11-05', 'Harry Kovair', 13456, 1809, '2:46:19'),
  ('New York City Marathon - Men', '2017-11-05', 'Koen Naert', 10000, 2515, '2:58:49');


SELECT runner_name FROM race WHERE name = 'New York City Marathon - Women';

SELECT runner_name FROM race WHERE name = 'New York City Marathon - Men' ORDER BY final_position LIMIT 3;

/* Find runners who ran the race in less than 2:30:00 and didn't start in the 100 first runners */
SELECT runner_name FROM race WHERE runner_race_time < '2:30:00' AND runner_bib > 100;

/*
Find runners who ran the course in:
less than 2:15:00 and didn't start in the 100 first runners
or less than 2:30:00 if they started after the 100 firsts.
We would like to have the data sorted first by runners who started in the first 100, followed by the others. We would also like to have them sorted by overlap time.
*/
SELECT runner_name FROM race
WHERE (runner_race_time < '2:15:00' AND runner_bib > 100) OR (runner_race_time < '2:30:00' AND runner_bib < 100);

/* Find runners (bib, name, and position) who made a better time than "Koen Naert". We would like to have the fastest first */
SELECT runner_name, runner_bib, runner_race_time FROM race
WHERE name = 'New York City Marathon - Men'
 AND runner_race_time < (SELECT runner_race_time FROM race WHERE runner_name = 'Koen Naert')
 ORDER BY runner_bib, runner_race_time
