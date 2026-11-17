---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2a61b81afa3599691c847056208156a3dce5322aad39264cdf3d7d3460421ffd
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList{Inno.Scene.EngineObject},System.String)
title: SceneEdits.HaveSamePropertyValues
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: 134b14193f775f1df1c3024a2e90b268cba16eb6b883dea69599652f113471d7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targets`:** Live compatible scene objects to compare.

**Parameter `propertyName`:** The required common serialized member.

## Returns

True when every encoded value matches, including an empty selection.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A selected object does not expose the requested property.
