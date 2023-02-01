SELECT 
	t.*,
    m.*
FROM 
	pixar.theater AS t
LEFT JOIN
	pixar.movies AS m
ON
	m.theater_id=t.id
ORDER BY
	title