document.getElementById('calculate').addEventListener('click', function() {
    const members = parseInt(document.getElementById('members').value);
    if (isNaN(members) || members < 1) {
        document.getElementById('result').textContent = 'Please enter a valid number of members.';
        return;
    }
    const timeframe = calculateTimeframe(members);
    document.getElementById('result').textContent = `Approximate adoption timeframe: ${timeframe}`;
});

function calculateTimeframe(members) {
    if (members <= 5) return "1-3 months";
    if (members <= 10) return "3-6 months";
    if (members <= 20) return "6-12 months";
    if (members <= 50) return "12-24 months";
    return "24+ months";
}