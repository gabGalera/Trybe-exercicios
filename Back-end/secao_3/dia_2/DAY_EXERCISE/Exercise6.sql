SELECT 
	m.*
FROM 
	pixar.movies AS m
INNER JOIN
	pixar.box_office AS b
ON
	m.id=b.movie_id
WHERE rating > 8
	AND m.theater_id IS NOT NULL

    