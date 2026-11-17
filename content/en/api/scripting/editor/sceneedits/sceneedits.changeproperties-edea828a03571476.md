---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.edea828a035714768c097ad6abc9253dea42104ee490def649b7d7f91ff211bd
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.ChangeProperties(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.EngineObject},System.String,System.Action,System.String,System.String,System.String)
title: SceneEdits.ChangeProperties
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: bbd9776854389c67c09009a2cb5e8a34734d0afcc2edfa49a394c1765e0525b4
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targets`:** Ordered compatible scene objects; the first object supplies the edited value.

**Parameter `propertyName`:** The common root serialized property.

**Parameter `mutation`:** Changes the primary value synchronously; no callback is retained.

**Parameter `historyName`:** The user-facing batch edit name.

**Parameter `mergeKey`:** An optional active gesture identity; null keeps discrete edits separate.

**Parameter `componentName`:** An optional public scalar value component; Euler axes use euler.x, euler.y or euler.z.

## Returns

True when at least one object changed; false when all values already matched.

## Exceptions

**Exception `T:System.ArgumentException`:** The selection is empty or a required common property is absent.

**Exception `T:System.InvalidOperationException`:** An owner is unavailable, read-only, or rollback fails.
