DELETE FROM pixar.box_office
WHERE movie_id IN (2, 9);

DELETE FROM pixar.movies
WHERE director = 'Andrew Stanton';