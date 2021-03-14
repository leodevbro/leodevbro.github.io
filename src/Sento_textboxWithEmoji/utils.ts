export function placeCaretAtEnd(el: HTMLElement) {
    el.focus();
    if (
        typeof window.getSelection !== undefined &&
        typeof document.createRange !== undefined
    ) {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel: any = window.getSelection();
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
    } else if (typeof (document.body as any).createTextRange !== undefined) {
        const textRange = (document.body as any).cqreateTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

export function getNodeIndex(n: Node) {
    let i = 0;
    while (n && n.previousSibling) {
        n = n.previousSibling;
        i++;
    }
    return i;
}

export function getRangePosition(el: HTMLElement) {
    try {
        const range = window.getSelection()!.getRangeAt(0);

        let sC = range.startContainer;
        let eC = range.endContainer;

        const A: number[] = [];
        while (sC !== el) {
            A.push(getNodeIndex(sC));
            if (sC && sC.parentNode) {
                sC = sC.parentNode;
            }
        }

        const B: any[] = [];
        while (eC !== el) {
            B.push(getNodeIndex(eC));
            eC = eC.parentNode!;
        }

        return { sC: A, sO: range.startOffset, eC: B, eO: range.endOffset };
    } catch (err) {
        console.log(err);
        return;
    }
}

export function restoreRangePosition(el: HTMLElement, rp: any) {
    try {
        el.focus();
        const sel = window.getSelection(),
            range = sel!.getRangeAt(0);
        let x,
            C,
            sC = el,
            eC = el;

        C = rp.sC;
        x = C.length;
        while (x--) sC = sC.childNodes[C[x]] as HTMLElement;
        C = rp.eC;
        x = C.length;
        while (x--) eC = eC.childNodes[C[x]] as HTMLElement;

        range.setStart(sC, rp.sO);
        range.setEnd(eC, rp.eO);
        sel!.removeAllRanges();
        sel!.addRange(range);
    } catch (err) {
        console.log(err);
    }
}
