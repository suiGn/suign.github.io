/**
 * Fetches all repositories from a given URL.
 * @packages.js
 * @param {string} url - The URL to fetch repositories from.
 * @returns {Promise<Array>} A promise that resolves to an array of repositories.
 */
function fetchAllRepos(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data); // Log the data
            return data;
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            return []; // Return an empty array in case of error
        });
}


function createRepoHtml(repoData) {
    // Create the main container div
    const repoDiv = document.createElement('div');
    repoDiv.className = 'pck w-clearfix';

    // Construct the inner HTML using repoData
    repoDiv.innerHTML = `
        <div class="text-span-2 _111 lowest">O</div>
        <div class="text-block-3 dataset">${repoData.uuid || 'uuid 00000000000000'}</div>
        <div class="text-block-3">${repoData.connectionDate || 'connection.date'}</div>
        <div class="text-block-3 datatext">${repoData.username || 'usrname'} - ${repoData.device || 'device'}</div>
        <div class="text-block-3">${repoData.activeDuration || 'active for 00:00'}</div>
        <div class="pck-viewall">[ view]</div>
        <div class="vwmtd">
            <div class="scrollable-cleaker-text openconnection">
                Package: ${repoData.packageJson || 'package.json'},<br>
                main: ${repoData.main || '2:12:45pm 06-16-2019'},<br>
                npm: <a href="${repoData.npmUrl || '#'}" class="link">${repoData.npmRegistryUrl || 'npmregistryurl'}</a>,<br>
                author: ${repoData.author || ''},<br>
            </div>
        </div>
    `;

    return repoDiv;
}

console.log('Fetching repositories...');

function displayRepos(repos) {
    const repoListContainer = document.getElementById('repo-list-container');
    repoListContainer.innerHTML = ''; // Clear existing content

    repos.forEach(repo => {
        const repoHtml = createRepoHtml(repo);
        repoListContainer.appendChild(repoHtml);
    });
}