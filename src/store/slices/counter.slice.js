import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
   name: 'counter',
   initialState: 0,
   reducers: {
    //Aqui van las acciones
      increment: (state) => state + 1,
      decrement: (state) => state - 1
   }
});


export default counterSlice.reducer;//Reprensentante que va al store