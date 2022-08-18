SELECT W.Essn AS Manager_SSN, count(*) as No_of_Projects FROM WORKS_ON W WHERE W.Essn IN (SELECT D.mgr_ssn FROM PROJECT P JOIN DEPARTMENT D ON P.Pname="ProductY" AND P.Dnum=D.Dnumber);
