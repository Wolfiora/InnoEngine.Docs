---
uid: api.b14e817e2eb29e8ce608bb554caa264eb15437a53204ac183b9c6ac31458ca15
symbol: "scripting:Inno.Scene:P:InnoEngine.Scene.GameBehavior.enabled"
source: xml
reviewed: 92c5e549dc87aa6ed1b04c255e0dc6aae951c915e59690ff6206a86092abb0e9
title: "enabled"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Gets or sets whether this component participates in scene lifecycle and frame updates.

## Remarks

Changing this value while the component belongs to a loaded scene immediately reconciles `M:InnoEngine.Scene.GameBehavior.OnEnable` and `M:InnoEngine.Scene.GameBehavior.OnDisable` against hierarchy activation.
