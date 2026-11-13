---
uid: api.90fd860fed3c5655f92a650cb077f2e6eb8674fa13f0a3a8aaeec0de38aea15a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Query(System.String,System.Object)"
source: xml
reviewed: ae656d26311e74b6b9a0c83a6cb59fd6af083eab6f56d1c8bf0863e13883263f
title: "Query"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Queries an action for this area and target.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Returns:** The current action state.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
