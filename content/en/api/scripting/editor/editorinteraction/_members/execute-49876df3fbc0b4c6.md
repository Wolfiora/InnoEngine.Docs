---
uid: api.49876df3fbc0b4c656fa24af7ff971e2b4781a174997218ad1f88edd2e1df3bd
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Execute(System.String,System.Object)"
source: xml
reviewed: d49796abc9340bfcc94b8a1b1b0e6c472ad466f3bbc089e6d13d14afec84ca34
title: "Execute"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Executes an action for this area and target.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Returns:** `true` when a visible and enabled action executed; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
