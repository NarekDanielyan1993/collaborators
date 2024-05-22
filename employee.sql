<-- Query executed in 0 seconds>

WITH SubdivisionHierarchy AS (
    SELECT 
        s.id,
        s.name,
        s.parent_id,
        0 AS sub_level
    FROM 
        collaborators e
    INNER JOIN 
        Subdivisions s ON e.subdivision_id= s.id
    WHERE 
        e.id = 710253

    UNION ALL

    SELECT 
        s.id,
        s.name,
        s.parent_id,
        sh.sub_level + 1 AS sub_level
    FROM 
        Subdivisions s
    INNER JOIN 
        SubdivisionHierarchy sh ON s.parent_id = sh.id
    WHERE 
        s.id NOT IN (100055, 100059)
),
EmployeeCount AS (
    SELECT 
        subdivision_id,
        COUNT(*) AS colls_count
    FROM 
        collaborators
    WHERE 
        age < 40
    GROUP BY 
        subdivision_id
),
FilteredEmployees AS (
    SELECT 
        e.id AS employee_id,
        e.name AS employee_name,
        e.subdivision_id AS sub_id,
        e.age
    FROM 
        collaborators e
    INNER JOIN 
        SubdivisionHierarchy sh ON e.subdivision_id = sh.id
    WHERE 
        e.age < 40
)
SELECT 
    fe.employee_id AS id,
    fe.employee_name AS name,
    sh.name AS sub_name,
    fe.sub_id AS sub_id,
    sh.sub_level AS sub_level,
    ISNULL(ec.colls_count, 0) AS colls_count
FROM 
    FilteredEmployees fe
INNER JOIN 
    SubdivisionHierarchy sh ON fe.sub_id = sh.id
LEFT JOIN 
    EmployeeCount ec ON fe.sub_id = ec.subdivision_id
ORDER BY 
    sh.sub_level;

