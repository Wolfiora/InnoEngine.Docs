---
uid: api.e564cf345ec269463f0588ab7c45a8ca116d617617b8edd9e4540848288e5e58
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.RemoveComponent(InnoEngine.Scene.GameComponent,System.String)"
source: xml
reviewed: 474a4f863499da8dd52004cc552b5ed82d41aa5c4ce647c8b28a04a1530c9d36
title: "RemoveComponent"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Removes the component from its scene owner and records a reversible serialized history change.

**Parameter `component`:** The attached non-Transform component to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the component was removed and recorded.
