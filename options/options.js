const KeyName = 'base_url';
const DefaultBaseUrl = 'https://scap.kali-team.cn/cve/'
let Config = {
    base_url: DefaultBaseUrl,
};

/**
 * Update the UI: set the value of the shortcut textbox.
 */
async function updateUI() {
    await browser.storage.local.get(KeyName)
        .then((item) => {
            document.querySelector('#base_url').value = item.base_url || DefaultBaseUrl;
        })

}

/**
 * Update the shortcut based on the value in the textbox.
 */
async function updateBaseUrl() {
    Config.base_url = document.querySelector('#base_url').value;
    await browser.storage.local.set(Config);
    updateUI();
}

/**
 * Reset the shortcut and update the textbox.
 */
async function resetBaseUrl() {
    await browser.storage.local.set(Config);
    updateUI();
}

/**
 * Update the UI when the page loads.
 */
document.addEventListener('DOMContentLoaded', updateUI);

/**
 * Handle update and reset button clicks
 */
document.querySelector('#update').addEventListener('click', updateBaseUrl)
document.querySelector('#reset').addEventListener('click', resetBaseUrl)