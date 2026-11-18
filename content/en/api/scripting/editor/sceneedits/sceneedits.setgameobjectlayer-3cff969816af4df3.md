---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3cff969816af4df371a4533f289238b07351068750f9f5a1a4d0766c995c6a34
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.SetGameObjectLayer(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameLayer,System.String)
title: SceneEdits.SetGameObjectLayer
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: b4bc768b11957f2afb99c642d3886eb3176bb3973205b4b6ac9eb0e4050f85bb
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
