# # -*- coding: utf-8 -*-

from flask import Flask 
from flask import request
from functools import reduce

import json
import datetime
import locale

locale.setlocale( locale.LC_ALL, '' )
#locale.currency( row[1], grouping = True ) 
app = Flask(__name__)

@app.after_request
def after_request(response):
	response.headers.add('Access-Control-Allow-Origin', '*')
	response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
	response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	return response

url_base='/Laica/'

@app.route(url_base)
def hello():
	return "REST DB LAICA[OK]"

@app.route(url_base + '/autenticar')
def hello():
	return "REST DB LAICA[OK]"

if __name__ == '__main__':	
	#si Rest.py
	app.run(host="localhost",debug=True, port=9999, threaded=True)