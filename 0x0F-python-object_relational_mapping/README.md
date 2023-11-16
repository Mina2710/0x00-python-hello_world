Tests :heavy_check_mark:
tests Folder: Contains SQL and Python scripts necessary for setting up test tables. These resources are provided by ALX for validating various file functionalities.
Tasks :page_with_curl:
Get all states

File: 0-select_states.py
Description: Utilizes MySQLdb to retrieve all states from the database hbtn_0e_0_usa. The results are sorted in ascending order by states.id.
Usage: ./0-select_states.py <mysql username> <mysql password> <database name>
Filter states

File: 1-filter_states.py
Description: Uses MySQLdb to list states whose names start with N from the database hbtn_0e_0_usa. The results are sorted by ascending states.id.
Usage: ./1-filter_states.py <mysql username> <mysql password> <database name>
Filter states by user input

File: 2-my_filter_states.py
Description: Displays all states in the states table matching a given name from the database hbtn_0e_0_usa. The results are ordered by ascending states.id, utilizing string formatting to construct the SQL query.
Usage: ./2-my_filter_states.py <mysql username> <mysql password> <database name> <state name searched>
SQL Injection Prevention

File: 3-my_safe_filter_states.py
Description: Showcases states matching a provided name from the states table in the database hbtn_0e_0_usa. Results are ordered by ascending states.id and designed to prevent SQL injections.
Cities by states

File: 4-cities_by_state.py
Description: Lists all cities from the hbtn_0e_4_usa database using MySQLdb. The results are ordered by ascending cities.id.
Usage: ./4-cities_by_state.py <mysql username> <mysql password> <database name>
All cities by state

File: 5-filter_cities.py
Description: Lists all cities of a specific state from the hbtn_0e_4_usa database using MySQLdb. Results are sorted by ascending cities.id.
Usage: ./5-filter_cities.py <mysql username> <mysql password> <database name>
First state model

File: model_state.py
Description: Defines a State class that inherits from SQLAlchemy Base and corresponds to the MySQL table states.
All states via SQLAlchemy

File: 7-model_state_fetch_all.py
Description: Lists all State objects from the hbtn_0e_6_usa database using SQLAlchemy. Results are sorted by ascending states.id.
Usage: ./7-model_state_fetch_all.py <mysql username> <mysql password> <database name>
First state

File: 8-model_state_fetch_first.py
Description: Prints the first State object from the hbtn_0e_6_usa database using SQLAlchemy, ordered by states.id. If the states table is empty, it prints Nothing.
Usage: ./8-model_state_fetch_first.py <mysql username> <mysql password> <database name>
Contains a

File: 9-model_state_filter_a.py
Description: Lists all State objects containing the letter a in the hbtn_0e_6_usa database using SQLAlchemy. Results are ordered by ascending states.id.
Usage: ./9-model_state_filter_a.py <mysql username> <mysql password> <database name>
