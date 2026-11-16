---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3cff969816af4df371a4533f289238b07351068750f9f5a1a4d0766c995c6a34
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.SetGameObjectLayer(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameLayer,System.String)
title: SceneEdits.SetGameObjectLayer
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 1c01aa519edb9912b091f664f6e565c8a4ea62d5cf6418c173bdd2d64d8267a1
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `gameObject`:** The live GameObject whose layer should change.

**Parameter `layer`:** The requested project layer slot.

**Parameter `historyName`:** The user-facing history entry name.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `historyName` is empty.
