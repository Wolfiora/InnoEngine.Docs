---
uid: api.b42dc4e11df62a66c47dbe87dbe6ebb1d90ace1e9c2e7f99714b1c121bb6c11a
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.IShaderSourceResolver.ReadInclude(System.String,System.String)"
source: xml
reviewed: 5848bb763506b90dd391d2898b8daa8dcbd04aa08c63ad9bc83647eac92e3f25
title: "ReadInclude"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Resolves and reads an include without bypassing asset mount permissions.

**Parameter `includingFile`:** Resolved path of the including source.

**Parameter `include`:** Source-local include spelling.

**Returns:** A resolved immutable source snapshot.
