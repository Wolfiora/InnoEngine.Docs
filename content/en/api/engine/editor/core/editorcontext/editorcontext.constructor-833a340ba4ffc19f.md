---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.833a340ba4ffc19fdef8fe2efaccc1570228780e598c8ef6801bd69e695d5f6a
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.#ctor(System.String,Inno.Editor.Core.EditorKeyboardPolicy,System.String)
title: EditorContext.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 3c36637a9aa9333cc8ce0bac991ac3aa354ad1739d5b647277df9db8d124848a
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
