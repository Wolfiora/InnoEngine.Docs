---
uid: api.1f9c8dba481eb73ed823af2ce7f3879f8f80cf172f479d4b437464de111a2283
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderShaderBindingKind)"
source: xml
reviewed: ea4e8439e9c2b98841c837e2f4ca097be7f14fc550c556f119059c09fad3edfb
title: "UsesBinding"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Gets whether the compiled program actively consumes one declared binding.

**Parameter `binding`:** Stable binding declared by the shader contract.

**Parameter `kind`:** Expected command-binding domain.

**Returns:** `true` when the final compiled pass reflects the binding; otherwise, `false` when the compiler proved the declared binding unused and removed it.

**Exception `T:System.ArgumentException`:** The binding is not declared by the shader, or its declared kind differs from `kind`.
