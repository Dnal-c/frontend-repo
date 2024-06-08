export const request = async ({path, method = 'GET', body}) => {
    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`;
    const options = {
        method,
        headers: {
            'X-RapidAPI-Key': '2059676e80mshf18cf684f3b507cp186d6cjsnb8b16d384314',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };

    if (body) options.body = body;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const formatCompactNum = (num) => {
    const formatter = Intl.NumberFormat('en', {
        notation: 'compact'
    })

    return formatter.format(num);
}

export const replaceWithBr = (str = '') => str.replace(/\n/g, "<br />")