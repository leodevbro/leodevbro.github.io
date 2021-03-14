import * as React from "react";
import { useRef, useEffect, useCallback, useMemo } from "react";
import { init, exec } from "pell";
import "./sento_style.css";
import urlsOfimages from "./_organizerOfImgs";
import {
    getRangePosition,
    restoreRangePosition,
    placeCaretAtEnd
} from "./utils";

const useInitializePell = ({
    pellRef,
    editorRef,
    html,
    onChange
}: {
    pellRef: React.MutableRefObject<any>;
    editorRef: React.MutableRefObject<any>;
    html: string;
    onChange?: (newValue: string) => void;
}) => {
    useEffect(() => {
        const htmlProp = html;

        const element = pellRef.current;
        editorRef.current = init({
            element,
            onChange: (newValue: any) => {
                if (onChange) {
                    onChange(newValue);
                }
            },
            actions: [],
            defaultParagraphSeparator: "div"
        });
        editorRef.current!.content.innerHTML = htmlProp;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editorRef, onChange, pellRef]);
};

const useObserve = ({
    pellRef,
    editorContainerRef
}: {
    pellRef: React.MutableRefObject<any>;
    editorContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
    const reactOnWindowSizeChange = useCallback(() => {
        if (pellRef.current && pellRef.current.offsetWidth) {
            const w = pellRef.current.offsetWidth;
            editorContainerRef.current!.style.setProperty(
                "--pell-offset-width",
                `${w}px`
            );
        }
    }, [editorContainerRef, pellRef]);

    const ResizeObserver = (window as any).ResizeObserver;
    const ro = useMemo(
        () =>
            new ResizeObserver((entries: any) => {
                for (const entry of entries) {
                    reactOnWindowSizeChange();
                }
            }),
        [ResizeObserver, reactOnWindowSizeChange]
    );

    useEffect(() => {
        const element = pellRef.current;
        reactOnWindowSizeChange();
        ro.observe(element);
        return () => {
            ro.unobserve(element);
        };
    }, [pellRef, reactOnWindowSizeChange, ro]);
};

const useEmojiClick = ({
    pellRef,
    editorRef
}: {
    pellRef: React.MutableRefObject<any>;
    editorRef: React.MutableRefObject<any>;
}) => {
    const posRef: React.MutableRefObject<any> = useRef();
    const setCursorPosition = useCallback(
        (e?: any) => {
            if (e) {
                const tar = e.target;
                if (tar === pellRef.current) {
                    return;
                }
            }
            const pos = getRangePosition(editorRef.current);
            posRef.current = pos;
        },
        [editorRef, pellRef]
    );

    const handleEmojiClick = useCallback(
        (myEmo: string) => {
            if (posRef.current) {
                restoreRangePosition(editorRef.current, posRef.current);
                exec("insertHTML", `<img src='${myEmo}' />`);
                setCursorPosition();
            } else {
                placeCaretAtEnd(editorRef.current.content);
                exec("insertHTML", `<img src='${myEmo}' />`);
            }
        },
        [editorRef, setCursorPosition]
    );
    return { handleEmojiClick, setCursorPosition };
};

const Editor = ({
    html,
    onChange,
    mode
}: {
    mode: "edit" | "view" | "hide";
    html: string;
    onChange?: (newValue: string) => void;
}) => {
    if (mode !== "edit" && mode !== "view") {
        html = "თქვენ არ გაქვთ ამ კონტენტის ნახვის ნებართვა";
    }

    const editorContainerRef = useRef<HTMLDivElement | null>(null);
    const pellRef = useRef<any>();
    const editorRef = useRef<any>(null);

    useInitializePell({
        editorRef,
        html,
        onChange,
        pellRef
    });

    useObserve({
        pellRef,
        editorContainerRef
    });

    useEffect(() => {
        if (mode !== "edit") {
            const contentDiv = pellRef.current.querySelector(".pell-content");
            contentDiv.setAttribute("contentEditable", false);
        }
    });

    const { handleEmojiClick, setCursorPosition } = useEmojiClick({
        pellRef,
        editorRef
    });

    return (
        <div className={"editorContainer"} ref={editorContainerRef}>
            {mode === "edit" ? (
                <>
                    <div className={"bigPell"}>
                        <div
                            ref={pellRef}
                            className={"pell"}
                            onKeyUp={setCursorPosition}
                            onClick={setCursorPosition}
                        />
                    </div>
                    <div className={"boxOfAllEmojis"}>
                        {urlsOfimages.map((url, i) => (
                            <div key={i} className={"emoSpan"}>
                                <img
                                    src={url}
                                    alt={"emo"}
                                    onClick={() => handleEmojiClick(url)}
                                />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className={"bigPell"}>
                    <div ref={pellRef} className={"pell"} />
                </div>
            )}
        </div>
    );
};

export default Editor;
