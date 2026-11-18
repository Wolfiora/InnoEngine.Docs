---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d91eda62625f52f8ffe2637395214f119b5958a6fdeb65751338dfcaf879f461
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.ChangeProperties(System.Collections.Generic.IReadOnlyList{Inno.Scene.EngineObject},System.String,System.Action,System.String,System.String,System.String)
title: SceneEdits.ChangeProperties
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 57ce977cdadbd5e19fb9fbe8f906b55f662dd374f21c81395200bda0bd927e76
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
