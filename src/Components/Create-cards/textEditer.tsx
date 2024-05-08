import React, { useEffect, useRef } from 'react';
import {Editor, EditorOptions, EditorPlugin } from 'roosterjs';

interface RoosterEditorProps {
    plugins?: EditorPlugin[];
    options?: Partial<EditorOptions>;
    defaultValue?: string;
    onChange?: (content: string) => void;
}

export const RoosterEditor: React.FC<RoosterEditorProps> = ({
    plugins = [],
    options = {},
    defaultValue = '',
    onChange,
}) => {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = new Editor(editorRef.current, options);
            plugins.forEach(plugin => editor.addPlugin(plugin));

            if (defaultValue) {
                editor.setContent(defaultValue);
            }

            editor.addUndoSnapshot();

            editorRef.current.addEventListener('input', () => {
                if (onChange) {
                    onChange(editor.getContent());
                }
            });

            return () => {
                editor.dispose();
            };
        }
    }, [editorRef.current, options, plugins, defaultValue, onChange]);

    return <div ref={editorRef} />;
};

// export default RoosterEditor;
