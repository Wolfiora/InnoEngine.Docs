---
uid: api.37a71e7a40e4056590be86194bc24aeaba2aeb0280eac74e7b8dbe3b19d92b99
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.#ctor(System.String,InnoEditor.Core.EditorKeyboardPolicy,System.String)"
source: xml
reviewed: 9fb315f2713c4cd13946b64000a9cfd6e62eca2185487e11a803497094a26ee9
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Creates a passive editor context for one project.

**Parameter `projectDirectory`:** The project root containing Assets and Library.

**Parameter `keyboard`:** The explicit immutable conventions selected by product composition.

**Parameter `initialLayoutDocument`:** An optional host-owned initial settings document, installed atomically only when `editor.ini` does not exist. Existing documents, including empty files, are preserved.

**Exception `T:System.ArgumentNullException`:** The keyboard policy is null.

**Exception `T:System.ArgumentException`:** Thrown when `projectDirectory` is empty.

**Exception `T:System.IO.IOException`:** The current document cannot be read or its initial document cannot be installed.

**Exception `T:System.UnauthorizedAccessException`:** The caller cannot access or initialize the project settings document.
