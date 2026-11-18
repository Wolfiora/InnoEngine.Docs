---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.abe852fb707133fe329de12be8cfe639c5ff08be836082e8eb3e47a0439ec3a4
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorDragContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,InnoEditor.Interactions.EditorDragData)
title: EditorDragContext.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: da071dabc7766c26b040a60ac57aecf34c0a759f60c929bcaf2e6099627c3756
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

**Parameter `area`:** The interaction area that produced the source.

**Parameter `data`:** The transient source identity and preview label.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `editor`, `interactions`, or `data` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
