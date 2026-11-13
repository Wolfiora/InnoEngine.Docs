---
uid: api.8f42f8767dda3b6d6765d30a59dbba1d6c3354dcd06554634a98f698a833a840
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceFunction.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderSourceParameter},InnoEditor.Rendering.Shaders.ShaderSourcePosition)"
source: xml
reviewed: fb223e98d35eea6ffd71656ac6535adb7f3cd9858676d5023f1a0fe7e8e1ffae
title: "ShaderSourceFunction.Constructor"
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
