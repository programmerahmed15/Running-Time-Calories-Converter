document.getElementById('caloriesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let runningTime = document.getElementById('runningTime').value;
    let caloriesBurned = calculateCaloriesBurned(runningTime);
    displayResult(caloriesBurned);
});

function calculateCaloriesBurned(minutes) {
    // Assuming an average calorie burn of 10 calories per minute of running
    let caloriesPerMinute = 10;
    return minutes * caloriesPerMinute;
}

function displayResult(caloriesBurned) {
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `Estimated calories burned: <strong>${caloriesBurned}</strong> calories`;
}
