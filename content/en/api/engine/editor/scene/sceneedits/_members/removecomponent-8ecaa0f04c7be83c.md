---
uid: api.8ecaa0f04c7be83cf2a9da6e5f0327d10649452914f2ab0bb4efc1cda490b56c
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.RemoveComponent(Inno.Scene.GameComponent,System.String)"
source: xml
reviewed: 44cde616138252f542eb7c38eab1f9ff12ccdfb79265f1e6b478c75ef2605cfb
title: "RemoveComponent"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Removes the component from its scene owner and records a reversible serialized history change.

**Parameter `component`:** The attached non-Transform component to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the component was removed and recorded.
