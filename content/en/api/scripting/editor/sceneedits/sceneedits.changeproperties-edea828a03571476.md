---
uid: api.edea828a035714768c097ad6abc9253dea42104ee490def649b7d7f91ff211bd
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.ChangeProperties(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.EngineObject},System.String,System.Action,System.String,System.String,System.String)"
source: xml
reviewed: 369175d255ae355196d24d2c1292ea3e755e966ed992ff1f9766ad442e814b52
title: "SceneEdits.ChangeProperties"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
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
