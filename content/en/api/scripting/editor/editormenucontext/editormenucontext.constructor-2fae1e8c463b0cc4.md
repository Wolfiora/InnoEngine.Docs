---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2fae1e8c463b0cc404e1a8d8e42f50330e02eed195bed28af45375b7f508b6ef
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorMenuContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,System.Object)
title: EditorMenuContext.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: a20a7be02a9696858d097aed90d25c6327eb3ff244eeebf27c4f87e80f881787
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The exact menu area being requested.

**Parameter `target`:** The optional object the menu operates on.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `editor` or `interactions` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
