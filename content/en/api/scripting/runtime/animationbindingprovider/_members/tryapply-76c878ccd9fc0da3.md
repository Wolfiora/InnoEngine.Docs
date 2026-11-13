---
uid: api.76c878ccd9fc0da3035e3f0d76d26a34a9de365a03535ed67721c1a7a64f1f26
symbol: "scripting:Inno.Animation:M:InnoEngine.Animation.AnimationBindingProvider.TryApply(InnoEngine.Animation.AnimationTarget,InnoEngine.Animation.AnimationValue)"
source: xml
reviewed: 3455846fe79f40b01e3e60f4ee67aa07fecea9c50b6fe4c074a289b88743db6f
title: "TryApply"
kind: api
owners: [Inno.Animation]
apiSurface: editor-script
apiScope: Runtime
---

Attempts to apply a value to a destination resolved through Identity.

**Parameter `target`:** The weak, generation-qualified destination.

**Parameter `value`:** The final blended value for this provider's declared protocol.

**Returns:** True when applied; false when the destination is currently missing or incompatible.
