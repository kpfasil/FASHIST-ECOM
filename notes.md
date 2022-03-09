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




<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
  <div class="container-fluid">
    <div>
    <a class="navbar-brand" href="#">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Fashist
    </a>
  </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1">Disabled</a>
        </li>
        <li class="nav-item me-2">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-success " type="submit">Search</button>
        </li>

      </ul>

  </div>
        <div class="d-flex">
        <router-link to="/cart" class="btn btn-success me-2">
        <i class="fa fa-shopping-cart"></i>
        </router-link>
        <router-link to="/login" class="btn btn-primary">SignIn
        </router-link>
      </div>
    </div>
</nav>
