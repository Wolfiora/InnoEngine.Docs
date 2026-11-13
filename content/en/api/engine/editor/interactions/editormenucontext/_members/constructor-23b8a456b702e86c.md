---
uid: api.23b8a456b702e86c27645a9a0b8e4d00d771142990d82b98eb47c311f20fa191
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorMenuContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,System.Object)"
source: xml
reviewed: 92800d7e7059776f0eb6c7fbb5e41627a15d12ec925fd5d384aa830fafa1fb7c
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a contextual menu request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The exact menu area being requested.

**Parameter `target`:** The optional object the menu operates on.

**Exception `T:System.ArgumentNullException`:** Thrown when `editor` or `interactions` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
