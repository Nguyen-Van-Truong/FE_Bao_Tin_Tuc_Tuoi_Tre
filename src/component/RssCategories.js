import Parser from 'rss-parser';

const parser = new Parser();
const feedUrl = 'https://tuoitre.vn/rss.htm';

// Function to fetch all rssUrls
const getRssUrls = async () => {
    const categories = await getNewsCategories();
    return categories.map(category => category.rssUrl);
};

const getNewsCategories = async () => {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const response = await fetch(proxyUrl + encodeURIComponent(feedUrl));
    const text = await response.text();
    const htmlParser = new DOMParser();
    const html = htmlParser.parseFromString(text, 'text/html');
    const categoryList = html.querySelectorAll('.list-rss li a');
    const categories = Array.from(categoryList).map((category) => {
        const title = category.childNodes[0].textContent.trim();
        const rssUrl = category.getAttribute('href');
        return {
            title,
            rssUrl,
        };
    });
    return categories;
};

export {getNewsCategories, getRssUrls};
