---
uid: api.2c62f2b7c8123ce63acd0615fc98c42f6879f8dcd5f21d192fab6ab74d57e064
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorDragContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,Inno.Editor.Interactions.EditorDragData)"
source: xml
reviewed: 7970b52a46630cfa7f5b6c6d4cc0bc7500848b22294c37cd60b4e9923c4b297c
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a managed editor drag request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The interaction area that produced the source.

**Parameter `data`:** The transient source identity and preview label.

**Exception `T:System.ArgumentNullException`:** Thrown when `editor`, `interactions`, or `data` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
