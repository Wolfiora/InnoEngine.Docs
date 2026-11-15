---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f969e6b1fa528c3afcaf928fd1ec312ae17a390ae6c80b4517c45de0050f90af
symbol: engine:Inno.Scene:M:Inno.Scene.GameObject.ResetComponent(Inno.Scene.GameComponent)
title: GameObject.ResetComponent
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 4fcd80c1812569e851d8dd32462b4d2d849b8c6fa5f50b9d6bc0774506e7b390

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Restores an attached component to the defaults defined by its optional Reset message.

## Parameters

**Parameter `component`:** GameComponent instance to reset.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `component` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the object is invalid or the component is not attached to it.
