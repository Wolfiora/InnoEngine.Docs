---
uid: api.2991686b60381cb7250ddf3fca3ae775c4a2a85d8d8dc44cc7ae8aaf0115c438
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameObject.GetComponent(System.Type)"
source: xml
reviewed: c1745a740c482c0e9c6fe09b22ce95ead6079ecf7681e6b807d1bc8804b408f3
title: "GetComponent"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Gets the first attached component assignable to a runtime type.

**Parameter `componentType`:** Requested component type.

**Returns:** The first matching component.

**Exception `T:System.InvalidOperationException`:** Thrown when no matching component exists.
