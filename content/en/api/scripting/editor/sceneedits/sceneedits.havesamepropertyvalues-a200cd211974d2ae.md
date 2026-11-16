---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a200cd211974d2ae814a326176da4c26e71675b72c98b22fefa9192a9870b936
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.EngineObject},System.String)
title: SceneEdits.HaveSamePropertyValues
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: dc4afe27e6baebe1d3603ba0aeae961f3648f6eff8bcc1466317c36a31b3c40b
apiScope: Editor
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
