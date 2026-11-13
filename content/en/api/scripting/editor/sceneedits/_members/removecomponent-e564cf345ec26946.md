---
uid: api.e564cf345ec269463f0588ab7c45a8ca116d617617b8edd9e4540848288e5e58
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.RemoveComponent(InnoEngine.Scene.GameComponent,System.String)"
source: xml
reviewed: 1991b6d734fd10fb7c8be32cb7ba5cdd013a8bcbaf566394f20ad8fa2e8c32af
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
