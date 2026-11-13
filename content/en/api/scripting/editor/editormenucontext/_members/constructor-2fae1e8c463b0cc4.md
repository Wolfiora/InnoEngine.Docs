---
uid: api.2fae1e8c463b0cc404e1a8d8e42f50330e02eed195bed28af45375b7f508b6ef
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorMenuContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,System.Object)"
source: xml
reviewed: 619f34bd973e629ca7688a2d7fe3d41135db910833044d95cacbeccb47e87992
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a contextual menu request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The exact menu area being requested.

**Parameter `target`:** The optional object the menu operates on.

**Exception `T:System.ArgumentNullException`:** Thrown when `editor` or `interactions` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
