<template>
  <div class="home">
    <div class="wrapper">
        <div class="container">
          <div v-for="product in latestProducts"
             v-bind:key="product.id">
              <div class="row g-1">
                  <div class="col-md-3">
                      <div class="card p-3">
                          <div class="text-center"> <img v-bind:src="product.get_thumbnail" width="200"> </div>
                          <div class="product-details"> <span class="font-weight-bold d-block">{{product.price}}</span> <span>{{product.name}}</span>
                              <div class="buttons d-flex flex-row">
                                  <div class="cart"><i class="fa fa-shopping-cart me-4"></i></div> <button class="btn btn-success cart-button btn-block "><span class="dot">1</span>Add to cart </button>
                              </div>
                              <div class="weight"> <small>Big Offer</small> </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
    background: #eee
}

.wrapper {
    margin-top: 30px
}

.card {
    border: 1px solid #eee;
    cursor: pointer
}

.weight {
    margin-top: -65px;
    transition: all 0.5s
}

.weight small {
    color: #e2dede
}

.buttons {
    padding: 10px;
    background-color: #d6d4d44f;
    border-radius: 4px;
    position: relative;
    margin-top: 7px;
    opacity: 0;
    transition: all 0.8s
}

.dot {
    height: 14px;
    width: 14px;
    background-color: green;
    border-radius: 50%;
    position: absolute;
    left: 27%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
    color: #fff;
    opacity: 0
}

.cart-button {
    height: 48px
}

.cart-button:focus {
    box-shadow: none
}

.cart {
    position: relative;
    height: 48px !important;
    width: 50px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 11px;
    border-radius: 5px;
    font-size: 14px;
    transition: 1s ease-in-out;
    overflow: hidden
}

.cart-button.clicked span.dot {
    animation: item 0.3s ease-in forwards
}

@keyframes item {
    0% {
        opacity: 1;
        top: 30%;
        left: 30%
    }

    25% {
        opacity: 1;
        left: 26%;
        top: 0%
    }

    50% {
        opacity: 1;
        left: 23%;
        top: -22%
    }

    75% {
        opacity: 1;
        left: 19%;
        top: -18%
    }

    100% {
        opacity: 1;
        left: 14%;
        top: 28%
    }
}

.card:hover .buttons {
    opacity: 1
}

.card:hover .weight {
    margin-top: 10px
}

.card:hover {
    transform: scale(1.04);
    z-index: 2;
    overflow: hidden
}
</style>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'HomeView',
  data(){
    return{
      latestProducts:[]
    }
  },
  components:{

  },
  mounted(){
   this.getLatestProducts() 
  },
  methods:{
    getLatestProducts(){
     axios
      .get('/api/v1/latest-product/')
      .then(response => {
        this.latestProducts=response.data
      }) 
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
