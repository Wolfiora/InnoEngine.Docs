---
uid: api.789f1a11eb656ac0716b9479e692ac9faddf390b60fc7c136827615400251558
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.Execute(System.String,System.Object)"
source: xml
reviewed: aa7ca918611877fe573bc0cb0e3778ddc3f11c4c0a47379b8c4dd77232005665
title: "Execute"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Executes an action for this area and target.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Returns:** `true` when a visible and enabled action executed; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
