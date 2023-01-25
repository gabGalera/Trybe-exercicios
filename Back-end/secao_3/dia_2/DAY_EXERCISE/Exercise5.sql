SELECT 
	m.*,
    t.*
FROM 
	pixar.theater AS t
RIGHT JOIN
	pixar.movies AS m
ON 
	t.id=m.theater_id
ORDER BY
	name