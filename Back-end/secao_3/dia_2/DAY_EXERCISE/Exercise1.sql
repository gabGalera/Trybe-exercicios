SELECT 
	m.title,
    s.domestic_sales,
    s.international_sales
FROM pixar.movies AS m
INNER JOIN
	pixar.box_office AS s
ON m.id = s.movie_id;