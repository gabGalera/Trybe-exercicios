(SELECT 
	m.title,
    b.rating
FROM 
	pixar.movies AS m
INNER JOIN
	pixar.box_office AS b
ON
	m.id = b.movie_id)
ORDER BY
	rating DESC
	