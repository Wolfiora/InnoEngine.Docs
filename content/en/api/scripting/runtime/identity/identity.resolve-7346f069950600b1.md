---
uid: api.7346f069950600b116e0ae3f67ed058d132515ba9a515104784af1d88fb36f65
symbol: "scripting:Inno.Core.Identity:M:InnoEngine.Core.Identity.Resolve\u0060\u00601"
source: xml
reviewed: f593f71393436d8642d23ff243e02b2c89d39bd1ef452e29090f775adcff0d35
title: "Identity.Resolve"
kind: api
owners: [Inno.Core.Identity]
apiSurface: editor-script
apiScope: Runtime
---

Resolves this transient snapshot through its original weak identity registry.

**Type parameter `TObject`:** The expected identity object type.

**Returns:** The current object, or null if the registry retired, the slot changed generation, or the type differs.
