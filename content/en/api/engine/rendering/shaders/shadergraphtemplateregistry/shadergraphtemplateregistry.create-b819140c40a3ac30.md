---
uid: api.b819140c40a3ac30e606a1656befa6cb00813a9026cf255cfa3b77052616532a
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.Create(System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: bf398f4650dc2033e99513a94d5e4807e99caa000e4964ca21834421bfb245cb
title: "ShaderGraphTemplateRegistry.Create"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Invokes the selected template under one generation lease.

**Parameter `id`:** Stable template identity from the creation menu.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A detached graph; no provider instance crosses the invocation boundary.

**Exception `T:System.InvalidOperationException`:** The selected template is unavailable.
