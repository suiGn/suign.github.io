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
        .then(repos => {
            // Filter repos by repoType
            return repos.filter(repo => repo.repoType === 'NPM Package');
        })
        .then(filteredRepos => {
            // Check for the existence of package.json in each repo
            return Promise.all(filteredRepos.map(repo => checkPackageJson(repo)));
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            return []; // Return an empty array in case of error
        });
}

function checkPackageJson(repo) {
    return fetch(`https://api.github.com/repos/${username}/${repo.name}/contents/package.json`)
        .then(response => {
            if (response.status === 200) {
                return repo; // package.json exists, return repo data
            } else {
                return null; // package.json does not exist, filter out this repo
            }
        })
        .catch(() => null); // In case of any error, filter out this repo
}


function createRepoHtml(repoData) {
    const repoDiv = document.createElement('div');
    repoDiv.className = 'pck w-clearfix';

    // Construct the package.json URL and docs URL
    const packageJsonUrl = `https://api.github.com/repos/${username}/${repoData.name}/contents/package.json`;
    const docsUrl = `https://${username}.github.io/${repoData.name}`;

    // Determine the display for the homepage link
    const homepageDisplay = repoData.homepage 
        ? `<a href="${repoData.homepage}" class="link">Open</a>`
        : 'noHomePage';

    repoDiv.innerHTML = `
        <div class="text-block-3">Package.json: <a href="${packageJsonUrl}" class="link">Open</a></div>
        <div class="text-block-3">Docs: <a href="${docsUrl}" class="link">Open</a></div>
        <div class="text-span-2 _111 lowest">O</div>
        <div class="text-block-3 dataset">${repoData.id || 'id 00000000000000'}</div>
        <div class="text-block-3 datatext">${repoData.name || 'name'} - ${homepageDisplay}</div>
        <div class="text-block-3">${repoData.repoType || 'npm package'}</div>
        <div class="pck-viewall">[ view]</div>
        
        <div class="vwmtd">
            <div class="scrollable-cleaker-text openconnection">
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

// Define any constants
const username = 'suiGn'; // Your GitHub username
const reposApiUrl = `https://api.github.com/users/${username}/repos`;

// ... (rest of your functions: fetchAllRepos, createRepoHtml, displayRepos) ...

// Event listener to start the script when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fetching repositories...');

    fetchAllRepos(reposApiUrl)
        .then(repos => repos.filter(repo => repo != null)) // Filter out nulls
        .then(displayRepos)
        .catch(error => {
            console.error('Error in fetching and displaying repos:', error);
        });
});
