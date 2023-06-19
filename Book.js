class Book {

    constructor(Code, Title, Pages, Year) {
        this.Code = Code;
        this.Title = Title;
        this.SelctedDate;
        this.Pages = Pages;
        this.Year = Year;
    }
    searchInBook(stringToFind) {
        if (this.Title.includes(stringToFind) == true)
            return true;
        return false;
    }
}