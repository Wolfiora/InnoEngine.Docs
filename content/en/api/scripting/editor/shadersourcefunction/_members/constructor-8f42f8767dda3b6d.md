---
uid: api.8f42f8767dda3b6d6765d30a59dbba1d6c3354dcd06554634a98f698a833a840
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceFunction.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderSourceParameter},InnoEditor.Rendering.Shaders.ShaderSourcePosition)"
source: xml
reviewed: 3e95eadfc5189cf78b57ab6e0bf495aa8d4f9965e66399c26178d11401e985d8
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Captures a source function declaration without retaining parser or provider objects.

**Parameter `name`:** Implementation function name selected by import settings.

**Parameter `returnType`:** Canonical result type; void has no result port.

**Parameter `parameters`:** Unique named parameters in call order.

**Parameter `location`:** Original declaration location.

**Exception `T:System.ArgumentException`:** The name is reserved or parameters have duplicate names.
