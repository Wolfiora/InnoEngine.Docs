---
uid: api.011cba0a8d298221b0e3f14a3236df0db892193deaf32a3e6b5214a6821a38d3
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameObject.ResetComponent(InnoEngine.Scene.GameComponent)"
source: xml
reviewed: 998f1f865717460a49016a3e9fe1ef26f780a542b52672bc98db560543aff258
title: "ResetComponent"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Restores an attached component to the defaults defined by its optional Reset message.

**Parameter `component`:** GameComponent instance to reset.

**Exception `T:System.ArgumentNullException`:** Thrown when `component` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the object is invalid or the component is not attached to it.
