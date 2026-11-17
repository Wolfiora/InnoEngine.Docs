---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.37a71e7a40e4056590be86194bc24aeaba2aeb0280eac74e7b8dbe3b19d92b99
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.#ctor(System.String,InnoEditor.Core.EditorKeyboardPolicy,System.String)
title: EditorContext.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 1a7e2dbc3a005402372409fd683d5797f8cb687bcd2f80de4fae89b3394399f9
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `projectDirectory`:** The project root containing Assets and Library.

**Parameter `keyboard`:** The explicit immutable conventions selected by product composition.

**Parameter `initialLayoutDocument`:** An optional host-owned initial settings document, installed atomically only when `editor.ini` does not exist. Existing documents, including empty files, are preserved.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The keyboard policy is null.

**Exception `T:System.ArgumentException`:** Thrown when `projectDirectory` is empty.

**Exception `T:System.IO.IOException`:** The current document cannot be read or its initial document cannot be installed.

**Exception `T:System.UnauthorizedAccessException`:** The caller cannot access or initialize the project settings document.
