-pip install django
-pip install restframework
-pip install  django-cors-header
-pip install djoser
-pip install pillow 
-pip install stripe


- adding these in settings.py ,apps
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'djoser'

-adding this in middleware in settings.py
  'corsheaders.middleware.CorsMiddleware',

-go to external cmd for settingup vue

          -select the main project folder then - 'npm install -g vue/cli'
                -'vue create projectname'
                -manually select features
                -babel,router,vuex,css pre-processor
                -version 3.x
                -use history mode for router - yes
                -sass/SCSS (with dart-sass)
                -in dedicated config files
          -cd projectname
          -npm install axios
          -npm install 
          -npm i bootstrap
          -npm i @popperjs/core
          -
    -running vue server 'npm run serve'
