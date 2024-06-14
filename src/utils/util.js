export function hasMp4Extension(filename) {
    // Используем регулярное выражение для поиска строки ".mp4" в конце имени файла
    const regex = /\.mp4$/;
    return regex.test(filename);
}