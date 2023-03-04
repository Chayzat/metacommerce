import { Input } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useNotes } from "../contexts/NoteContext";

export const EditNote = ({ setOpenMD, openMD }: any) => {
  const { getActiveNote, onEditNote } = useNotes();

  const onEditField = (value: string) => {
    onEditNote({
      ...getActiveNote,
      title: String(value).substring(0,20),
      body: value,
      date: Date.now(),
    });
  };

  if (!getActiveNote) return <div>Нет заметки</div>;

  return (
    <>
      <p>
        {new Date(getActiveNote.date).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <div
        onClick={setOpenMD}
        style={{ display: openMD === false ? "block" : "none", height: "85vh" }}
      >
        <ReactMarkdown>{getActiveNote.body}</ReactMarkdown>
      </div>
      <div onClick={setOpenMD} style={{ display: openMD === false ? "none" : "block" }}>
        <textarea
          id="body"
          placeholder="..."
          value={getActiveNote.body}
          onChange={(e) => {
            onEditField(e.target.value);
          }}
          rows={15}
          style={{
            backgroundColor: "inherit",
            border: "none",
            resize: "none",
            color: "#fff",
            width: "45vw",
            height: "85vh",
          }}
        />
      </div>
    </>
  );
};
