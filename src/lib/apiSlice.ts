import { sortAndFormatUsers } from "@/utils/user-mapper";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ApiState {
  data: any[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  data: [],
  page: 1,
  per_page: 0,
  total: 0,
  total_pages: 0,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  "api/fetchData",
  async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const { page, per_page, total, total_pages, data } = await response.json();

    const formattedData = sortAndFormatUsers(data);

    return {
      page,
      per_page,
      total,
      total_pages,
      data: formattedData,
    };
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.page;
        state.per_page = action.payload.per_page;
        state.total = action.payload.total;
        state.total_pages = action.payload.total_pages;
        state.data = action.payload.data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const apiReducer = apiSlice.reducer;
