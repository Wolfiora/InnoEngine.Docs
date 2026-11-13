---
uid: api.833a340ba4ffc19fdef8fe2efaccc1570228780e598c8ef6801bd69e695d5f6a
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.#ctor(System.String,Inno.Editor.Core.EditorKeyboardPolicy,System.String)"
source: xml
reviewed: 4b9baffbc46ce85500ed70e6a68a8a6f5b337b080f5db3f8dc4e7907a7fecf28
title: "EditorContext.Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Creates a passive editor context for one project.

**Parameter `projectDirectory`:** The project root containing Assets and Library.

**Parameter `keyboard`:** The explicit immutable conventions selected by product composition.

**Parameter `initialLayoutDocument`:** An optional host-owned initial settings document, installed atomically only when `editor.ini` does not exist. Existing documents, including empty files, are preserved.

**Exception `T:System.ArgumentNullException`:** The keyboard policy is null.

**Exception `T:System.ArgumentException`:** Thrown when `projectDirectory` is empty.

**Exception `T:System.IO.IOException`:** The current document cannot be read or its initial document cannot be installed.

**Exception `T:System.UnauthorizedAccessException`:** The caller cannot access or initialize the project settings document.
