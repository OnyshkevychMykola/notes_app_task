export const filterPosts = (notes, text) => {
    if (!text) {
        return notes;
    }
    return notes.filter((note) => {
        const noteTitle = note.title.toLowerCase();
        const noteBody = note.body.toLowerCase();
        const loweredText = text.toLowerCase();
        return noteTitle.includes(loweredText) || noteBody.includes(loweredText);
    });
};