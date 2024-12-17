import Dexie from "dexie";

const createDb = ()=> {
    const db = new Dexie("NotesStorage");
    db.version(1).stores({
        notesstore: "++id, title, body, lastModified",
    });
    return db;
}

export default createDb;