DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'property_db',
        'USER': 'property_user',
        'PASSWORD': 'property_pass',
        'HOST': 'postgres',  # Service name in docker-compose.yml
        'PORT': '5432',
    }
}
