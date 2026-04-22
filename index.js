//my code 
function capitalizeWords(input) {
    if (!input || typeof input !== 'string') return '';
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function filterActiveUsers(users) {
    if (!Array.isArray(users)) return [];
    return users.filter(user => user.isActive === true);
}

function logAction(action, username) {
    if (!action || !username) return '';
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };