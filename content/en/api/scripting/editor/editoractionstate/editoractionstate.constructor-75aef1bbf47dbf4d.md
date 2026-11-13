---
uid: api.75aef1bbf47dbf4dcae3bcc585e1b4980f0e7d02e3885a1764889bdfc3cd7e23
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorActionState.#ctor(System.Boolean,System.Boolean,System.Boolean,System.String,System.String)"
source: xml
reviewed: 0e974629dd0e8dbc594cdb941c3e05b00dfa9f4919f8bbb153fa290d47d8d45b
title: "EditorActionState.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates the contextual presentation state of an editor action.

**Parameter `isVisible`:** Whether the action should be included in the current presentation.

**Parameter `isEnabled`:** Whether the action can execute in the current context.

**Parameter `isChecked`:** Whether the action is currently presented as checked.

**Parameter `displayName`:** An optional contextual label that replaces the static placement label.

**Parameter `unavailableReason`:** A concise explanation shown when an otherwise visible action cannot execute.
