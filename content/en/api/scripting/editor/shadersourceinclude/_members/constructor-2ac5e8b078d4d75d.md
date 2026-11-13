---
uid: api.2ac5e8b078d4d75d93517fb177fb64a5dd6c41621e3194f9e07f306d95b5f48d
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.#ctor(System.String,System.String,System.String)"
source: xml
reviewed: 582be84ee6823dc38ca603e9d4cb3b64432b73abae3bdb67073b30b0a3c0e52c
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.
