---
uid: api.d91eda62625f52f8ffe2637395214f119b5958a6fdeb65751338dfcaf879f461
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.ChangeProperties(System.Collections.Generic.IReadOnlyList{Inno.Scene.EngineObject},System.String,System.Action,System.String,System.String,System.String)"
source: xml
reviewed: 12d26aeb005554f93dc547e3b262a5b0ea9c91568832adfbbef546f5a88d01ca
title: "SceneEdits.ChangeProperties"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Applies one primary property edit to a selection using owner-resolved serialized values and one atomic History transaction.

**Parameter `targets`:** Ordered compatible scene objects; the first object supplies the edited value.

**Parameter `propertyName`:** The common root serialized property.

**Parameter `mutation`:** Changes the primary value synchronously; no callback is retained.

**Parameter `historyName`:** The user-facing batch edit name.

**Parameter `mergeKey`:** An optional active gesture identity; null keeps discrete edits separate.

**Parameter `componentName`:** An optional public scalar value component; Euler axes use euler.x, euler.y or euler.z.

**Returns:** True when at least one object changed; false when all values already matched.

**Exception `T:System.ArgumentException`:** The selection is empty or a required common property is absent.

**Exception `T:System.InvalidOperationException`:** An owner is unavailable, read-only, or rollback fails.
