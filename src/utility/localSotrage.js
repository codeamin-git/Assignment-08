const getReadBook = () => {
    const storedReadBook = localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook)
    }
    return [];
}

const saveReadBook = id => {
    const storedReadBook = getReadBook();
    const exists = storedReadBook.find(book => book === id)
    if(!exists){
        storedReadBook.push(id)
        localStorage.setItem('read-book', JSON.stringify(storedReadBook))
        return false;
    } return true;
}

const getWishList = () => {
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList)
    }
    return [];
}

const saveWishList = id => {
    const storedWishList = getWishList();
    const exists = storedWishList.find(book => book === id)
    if(!exists){
        storedWishList.push(id)
        localStorage.setItem('wish-list', JSON.stringify(storedWishList))
        return false;
    }
    return true;
}

export { saveReadBook, getReadBook, getWishList, saveWishList }