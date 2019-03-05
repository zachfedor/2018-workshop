# Flaskr

From the Flask Tutorial: [http://flask.pocoo.org/docs/1.0/tutorial/]()


## Installation

Create a virtual environment then install the project:

```bash
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -e .
```


## Running the App

Make sure the proper environment variables are set and the database has been initialized, then serve the app via Flask:

```bash
$ export FLASK_APP=flaskr
$ export FLASK_ENV=development
$ flask init-db
$ flask run
```

