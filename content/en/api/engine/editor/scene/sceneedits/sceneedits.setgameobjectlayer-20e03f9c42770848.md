---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.20e03f9c427708488b6a3ead6f4a8f28ab67c53c6a810ed83b982fdcd512b9ac
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.SetGameObjectLayer(Inno.Scene.GameObject,Inno.Scene.Layers.GameLayer,System.String)
title: SceneEdits.SetGameObjectLayer
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 1c281977f8180d393529ecd5508afe66820977c23bc0487b1f03a19550230c61
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
