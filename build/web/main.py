from flask import Flask, g, request, session, redirect, abort

jettestapp = Flask('web', static_folder = '../app', static_url_path = '/app')
jettestapp.config.from_pyfile('config.py')

@jettestapp.route('/')
@jettestapp.route('/<path:path>')
def return_index(path = ''):
	#this needs to actually return index without redirecting!
	index_file = open('../app/index.html', 'r')
	index_file_contents = index_file.read()
	index_file.close()
	return index_file_contents

if __name__ == '__main__':
	jettestapp.run()
