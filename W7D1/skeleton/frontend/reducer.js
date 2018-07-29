const initialState = {
  city: "Please Select",
  jobs: []
};

let action = {
  type: "SWITCH_LOCATION",
  city: "remote",
  jobs: [
    {
      id: 1,
      title: "Test Job",
      company: "Github",
      type: "Full Time",
      location: "remote",
      description: "test description",
      url: "www.github.com/appacademy"
    }
  ]
};

const reducer = (state = initialState, action) => {
   // remove this and fill out the body of the reducer function
  Object.freeze(state);
  switch(action.type) {
    case "SWITCH_LOCATION":
      const jobs = [...action.jobs.filter(job => job.location === action.city)];
      return {
        city: action.city,
        jobs: jobs
      };
    default:
      return state;
  }
};

window.reducer = reducer;

export default reducer;
