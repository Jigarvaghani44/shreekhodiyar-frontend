/* eslint-disable no-shadow */
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

const TiptapEditor = ({ content, setContent }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link,
            Image,
        ],
        content,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
    });

    if (!editor) return null;

    return (
        <div className="border p-4 rounded-md">
            <div className="flex gap-2 mb-2">
                <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
                <button onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</button>
                <button onClick={() => editor.chain().focus().toggleStrike().run()}>Strike</button>
                <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
                <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
                <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>Clear</button>
                {/* Add more buttons if needed */}
            </div>

            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;
