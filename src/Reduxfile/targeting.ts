import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TargetingService from "./TargetingService";

interface Targeting {
  id: number;
  title: string;
  description: string;
}

const initialState: Targeting[] = [];


export const retrieveTargetingList : any= createAsyncThunk(
  "retrieveAll",
  async () => {
    const res = await TargetingService.getAll();
    return res.data as Targeting[];
  }
);

// export const updateTutorial = createAsyncThunk(
//   "tutorials/update",
//   async ({ id, data }: { id: number; data: Tutorial }) => {
//     const res = await TutorialService.update(id, data);
//     return res.data as Tutorial;
//   }
// );

// export const deleteTutorial = createAsyncThunk(
//   "tutorials/delete",
//   async ({ id }: { id: number }) => {
//     await TutorialService.remove(id);
//     return { id };
//   }
// );

// export const deleteAllTutorials = createAsyncThunk(
//   "tutorials/deleteAll",
//   async () => {
//     await TutorialService.removeAll();
//     return;
//   }
// );

// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }: { title: string }) => {
//     const res = await TutorialService.findByTitle(title);
//     return res.data as Tutorial[];
//   }
// );

const targetingSlice = createSlice({
  name: "targeting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(retrieveTargetingList.fulfilled, (_, action) => {
        return action.payload;
      })
    //   .addCase(updateTutorial.fulfilled, (state, action) => {
    //     const index = state.findIndex((tutorial) => tutorial.id === action.payload.id);
    //     if (index !== -1) {
    //       state[index] = {
    //         ...state[index],
    //         ...action.payload,
    //       };
    //     }
    //   })
    //   .addCase(deleteTutorial.fulfilled, (state, action) => {
    //     const index = state.findIndex(({ id }) => id === action.payload.id);
    //     if (index !== -1) {
    //       state.splice(index, 1);
    //     }
    //   })
    //   .addCase(deleteAllTutorials.fulfilled, () => {
    //     return [];
    //   })
    //   .addCase(findTutorialsByTitle.fulfilled, (_, action) => {
    //     return action.payload;
    //   });
  },
});

export const targetingReducer = targetingSlice.reducer;
export default targetingSlice;
