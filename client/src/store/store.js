import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"
import adminProductsSlice from './admin/product-slice'
import adminOrderSlice from './admin/order-slice'
import shopProductsSlice from './shop/product-slice'
import shopCartSlice from './shop/cart-slice'
import shopAddressSlice from './shop/address-slice'
import shopOrderSlice from './shop/order-slice'
import shopReviewSlice from './shop/review-slice'


const store = configureStore({
  reducer:{
    auth:authReducer,
    adminProducts:adminProductsSlice,
    adminOrder:adminOrderSlice,
    shopProducts:shopProductsSlice,
    shopCart:shopCartSlice,
    shopAddress:shopAddressSlice,
    shopOrder:shopOrderSlice,
    shopReview:shopReviewSlice,
  },
});

export default store;