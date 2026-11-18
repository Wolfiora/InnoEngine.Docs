---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2c62f2b7c8123ce63acd0615fc98c42f6879f8dcd5f21d192fab6ab74d57e064
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorDragContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,Inno.Editor.Interactions.EditorDragData)
title: EditorDragContext.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 84699bb4216fbf2549f31eebea017e8c407439bf8b5c09b70068f0778937d2cb
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
