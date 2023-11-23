document.addEventListener('DOMContentLoaded', function() {
    const username = 'suiGn';
    const userApiUrl = `https://api.github.com/users/${username}`;
    const reposApiUrl = `https://api.github.com/users/${username}/repos`;
    const userProfileContainer = document.getElementById('user-profile');
    const userBioContainer = document.getElementById('user-bio');
    const repoListContainer = document.getElementById('repo-list-container');
    let allRepos = [];
    fetch(userApiUrl)
        .then(response => response.json())
        .then(user => {
            if (user.avatar_url) {
                const img = document.createElement('img');
                img.src = user.avatar_url;
                img.alt = `${username}'s Profile Picture`;
                userProfileContainer.appendChild(img);
            }
            if (user.bio) {
                const bio = document.createElement('p');
                bio.textContent = user.bio;
                userBioContainer.appendChild(bio);
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
        function fetchAllRepos(url, repos = []) {
return fetch(url)
.then(response => {
    const linkHeader = response.headers.get('link');
    return response.json().then(data => {
        repos = repos.concat(data);
        const nextPageMatch = linkHeader && linkHeader.match(/<([^>]+)>; rel="next"/);
        const nextPageUrl = nextPageMatch && nextPageMatch[1];
        return nextPageUrl ? fetchAllRepos(nextPageUrl, repos) : repos;
    });
});
}
function createIconLink(url, text, className) {
const link = document.createElement('a');
link.href = url;
link.className = `icon-link ${className}`;
link.target = "_blank";
// Create a container for the icon and set the background
const iconContainer = document.createElement('div');
iconContainer.className = `icon ${className}`; // Use the same class for the icon
// Create a container for the text
const textContainer = document.createElement('div');
textContainer.textContent = text;
textContainer.className = 'icon-text';
link.appendChild(iconContainer); // Append the icon container to the link
link.appendChild(textContainer); // Append the text container to the link
return link;
}
function createRepoListItem(repoData, keywords) {
    const listItem = document.createElement('li');
    listItem.className = 'repo-list-item';
    // Create container for the title and description
    const contentContainer = document.createElement('div');
    contentContainer.className = 'repo-content';
    const titleLink = document.createElement('a');
    titleLink.href = repoData.html_url;
    titleLink.textContent = repoData.name;
    titleLink.className = 'repo-title';
    titleLink.target = "_blank";
    contentContainer.appendChild(titleLink);
    const description = document.createElement('p');
    description.textContent = repoData.description;
    description.className = 'repo-description';
    contentContainer.appendChild(description);
    // Create and append keywords below the description if they exist
    if (keywords && keywords.length) {
        const keywordsContainer = document.createElement('div');
        keywordsContainer.className = 'keywords-container';
        keywordsContainer.textContent = `Keywords: ${keywords.join(', ')}`;
        contentContainer.appendChild(keywordsContainer);
    }
    // Append content container to the list item
    listItem.appendChild(contentContainer);
    // Create container for the icons
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'icons-container';
    // Logic to create and append the icons (make sure you define createIconLink function)
    if (repoData.homepage) {
        const homeIcon = createIconLink(repoData.homepage, 'Home', 'icon-homepage');
        iconsContainer.appendChild(homeIcon);
    }
    if (repoData.docs) {
        const docsIcon = createIconLink(repoData.docs, 'Docs', 'icon-docs');
        iconsContainer.appendChild(docsIcon);
    }
    const githubIcon = createIconLink(repoData.html_url, 'GitHub', 'icon-github');
    iconsContainer.appendChild(githubIcon);
    // Append icons container to the list item
    listItem.appendChild(iconsContainer);
    return listItem;
}
    function displayRepos(repos) {
        repoListContainer.innerHTML = '';
        repos.forEach(repo => {
        fetch(`https://raw.githubusercontent.com/${username}/${repo.name}/main/package.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(packageJson => {
            // Use packageJson.keywords || [] to handle the case where keywords may not exist
            const listItem = createRepoListItem({ ...repo, ...packageJson }, packageJson.keywords || []);
            repoListContainer.appendChild(listItem);
        })
        .catch(error => {
            // Handle repositories without a package.json or with a JSON error
            console.error(`Error fetching package.json for ${repo.name}:`, error);
            const listItem = createRepoListItem(repo, []); // Pass empty array for keywords
            repoListContainer.appendChild(listItem);
        });
});
    }
    function filterAndCountRepos(type) {
        let filteredRepos = allRepos;
        if (type !== 'all') {
            filteredRepos = allRepos.filter(repo => repo.type === type);
        }
        displayRepos(filteredRepos);
        // Update counts
        document.getElementById('all-repos-count').textContent = `(${allRepos.length})`;
        document.getElementById('packages-count').textContent = `(${allRepos.filter(repo => repo.type === 'NPM Package').length})`;
        document.getElementById('apps-count').textContent = `(${allRepos.filter(repo => repo.type === 'App').length})`;
        document.getElementById('endpoints-count').textContent = `(${allRepos.filter(repo => repo.type === 'EndPoint').length})`;
    }
window.filterAndCountRepos = filterAndCountRepos; // Make it available globally
// Fetch all repositories with pagination handling
fetchAllRepos(reposApiUrl).then(repos => {
        // Process each repository
        const repoPromises = repos.map(repo => {
            const packageJsonUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/package.json`;
            return fetch(packageJsonUrl)
                .then(response => response.json())
                .then(packageJson => {
                    repo.type = packageJson.repoType || 'unknown';
                    return repo;
                })
                .catch(error => {
                    console.error(`Error fetching package.json for ${repo.name}:`, error);
                    repo.type = 'unknown';
                    return repo;
                });
        });
        // Wait for all package.json files to be processed
        Promise.all(repoPromises).then(processedRepos => {
            allRepos = processedRepos;
            displayRepos(allRepos); // Display all repositories initially
            filterAndCountRepos('all'); // Also update the counts
        });
    });

});

/* Add this JavaScript to your script file to handle the clicked state */
// Get all buttons in the filter-buttons container
var buttons = document.querySelectorAll('#filter-buttons button');

// Loop through each button and add click event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Remove clicked class from all buttons
        buttons.forEach(function(btn) { btn.classList.remove('clicked'); });
        // Add clicked class to the clicked button
        button.classList.add('clicked');
    });
});