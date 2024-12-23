import random
import requests

random_number = random.randint(1, 88)
api_request = f"https://swapi.py4e.com/api/people/{random_number}/"
response = requests.get(api_request)
result = response.json()
display = f"""
     name: {result['name']}
     eye_color: {result['eye_color']}
     skin_color: {result['skin_color']}
     birth_year: {result['birth_year']}
"""
print(display)










