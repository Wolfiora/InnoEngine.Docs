---
uid: api.2991686b60381cb7250ddf3fca3ae775c4a2a85d8d8dc44cc7ae8aaf0115c438
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameObject.GetComponent(System.Type)"
source: xml
reviewed: 6b75a37835d22322a3369c3312c2f592fc5ee29c4955c1acc533574e4ed0bd2c
title: "GameObject.GetComponent"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Gets the first attached component assignable to a runtime type.

## Parameters

**Parameter `componentType`:** Requested component type.

## Returns

The first matching component.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no matching component exists.
