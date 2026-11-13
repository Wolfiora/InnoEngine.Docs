---
uid: api.75aef1bbf47dbf4dcae3bcc585e1b4980f0e7d02e3885a1764889bdfc3cd7e23
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorActionState.#ctor(System.Boolean,System.Boolean,System.Boolean,System.String,System.String)"
source: xml
reviewed: 632b8fa7c54b22d7b1f9d7070b849cda7a66422299d62bd81db63ca7f80c5bf5
title: "Constructor"
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
