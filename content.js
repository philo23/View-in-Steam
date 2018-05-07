const getAppId = s => s.match(/\/app\/(\d+)\//)[1];

const container = document.querySelector('.apphub_OtherSiteInfo');
const canonicalUrl = document.querySelector('link[rel="canonical"]').href;
const appId = getAppId(canonicalUrl);

if (appId) {
    const button = document.createElement('a');
    const label = document.createElement('span');

    button.setAttribute('class', 'btnv6_blue_hoverfade btn_medium');
    button.setAttribute('href', 'steam://store/' + appId);

    label.innerText = 'View in Steam';

    button.appendChild(label);
    container.appendChild(button);
}