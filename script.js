function toggleProfileDetails() {
  const profileDetails = document.getElementById("profile-details");
  profileDetails.style.display = profileDetails.style.display === "block" ? "none" : "block";
}

//Pie chart 1 
const employeesCtx = document
  .getElementById("employeesStatusChart")
  .getContext("2d");
const employeesStatusChart = new Chart(employeesCtx, {
  type: "doughnut",
  data: {
    labels: ["Other", "Onboarding", "Offboarding"],
    datasets: [
      {
        data: [40, 50, 60],
        backgroundColor: ["blue", "orange", "red"],
        borderWidth: 3,
        borderColor: "#f5f5f5",
      },
    ],
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

//Pie chart 2
const jobSummaryCtx = document
  .getElementById("jobSummaryChart")
  .getContext("2d");
const jobSummaryChart = new Chart(jobSummaryCtx, {
  type: "doughnut",
  data: {
    labels: ["Closed", "Onboarding", "Offboarding"],
    datasets: [
      {
        data: [5, 30, 25],
        backgroundColor: ["blue", "orange", "red"],
        borderWidth: 3,
        borderColor: "#f5f5f5",
      },
    ],
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


//Bargraph 
const teamPerformanceCtx = document
  .getElementById("teamPerformanceChart")
  .getContext("2d");
const teamPerformanceChart = new Chart(teamPerformanceCtx, {
  type: "bar",
  data: {
    labels: ["Team A", "Team B", "Team C", "Team D"],
    datasets: [
      {
        label: "Performance",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "blue", // Darker background to match header color
          "green", // Blue
          "red", // Yellow
          "orange", // Teal
        ],
        borderColor: [
          "blue", // Darker background to match header color
          "green", // Blue
          "red", // Yellow
          "orange", // Teal
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
