---
uid: api.f969e6b1fa528c3afcaf928fd1ec312ae17a390ae6c80b4517c45de0050f90af
symbol: "engine:Inno.Scene:M:Inno.Scene.GameObject.ResetComponent(Inno.Scene.GameComponent)"
source: xml
reviewed: d1204d7d5f7e788590265419c932c1b548f723b17a46b86890a948a1401af1cf
title: "ResetComponent"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Restores an attached component to the defaults defined by its optional Reset message.

**Parameter `component`:** GameComponent instance to reset.

**Exception `T:System.ArgumentNullException`:** Thrown when `component` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the object is invalid or the component is not attached to it.
