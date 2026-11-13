---
uid: api.b14e817e2eb29e8ce608bb554caa264eb15437a53204ac183b9c6ac31458ca15
symbol: "scripting:Inno.Scene:P:InnoEngine.Scene.GameBehavior.enabled"
source: xml
reviewed: d7f22f11f92dacc9fb6cc62efd0182ea44e23e2f4360e472fb19b54857ff34f3
title: "enabled"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Gets or sets whether this component participates in scene lifecycle and frame updates.

## Remarks

Changing this value while the component belongs to a loaded scene immediately reconciles `M:InnoEngine.Scene.GameBehavior.OnEnable` and `M:InnoEngine.Scene.GameBehavior.OnDisable` against hierarchy activation.
