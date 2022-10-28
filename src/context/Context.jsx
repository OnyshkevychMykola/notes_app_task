import React, {useCallback, useEffect, useState} from "react";
import createDb from "../db/CreateDB";
import uuid from "react-uuid";
import {filterPosts} from "../utils/FilterPosts";

export const NotesContext = React.createContext(null);

export function NotesProvider({children}) {
    const noteStore = createDb().notesstore;
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);
    const filteredPosts = filterPosts(notes, text);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const onAddNote = useCallback(() => {
            const newNote = {
                id: uuid(),
                title: "Untitled Note",
                body: "",
                lastModified: Date.now(),
            };

            noteStore.add(newNote).then(async () => {
                setNotes([newNote, ...notes]);
                setActiveNote(newNote.id);
            });
        }
        , [notes]);
    const onUpdateNote =
        useCallback(
            (updatedNote) => {
                const updatedNotesArr = notes.map((note) => {
                    if (note.id === updatedNote.id) {
                        noteStore.update(note.id, updatedNote);
                        return updatedNote;
                    }

                    return note;
                });
                setNotes(updatedNotesArr);
            }
            , [notes]);

    const getActiveNote = () => {
        return notes.find(({id}) => id === activeNote);
    }
    const onFooterChange = useCallback(() => {
        setIsFooterVisible((isFooterVisible) => {
            return !isFooterVisible;
        });
    }, [isFooterVisible]);

    const showModal = useCallback(() => {
        setIsModalVisible((isModalVisible) => {
            return !isModalVisible;
        });
    }, [isModalVisible]);

    const handleOk = () => {
        showModal();
        noteStore.delete(getActiveNote().id);
        setNotes(notes.filter(({id}) => id !== getActiveNote().id));
    };

    useEffect(async () => {
        setNotes(await noteStore.toArray());
    }, []);

    return (
        <NotesContext.Provider
            value={{
                activeNote: getActiveNote(),
                setActiveNote,
                text,
                setText,
                onAddNote,
                showModal,
                handleOk,
                onUpdateNote,
                filteredPosts,
                isFooterVisible,
                setIsFooterVisible,
                isModalVisible,
                onFooterChange
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}