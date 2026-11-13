---
uid: api.2ac5e8b078d4d75d93517fb177fb64a5dd6c41621e3194f9e07f306d95b5f48d
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.#ctor(System.String,System.String,System.String)"
source: xml
reviewed: 75236eaa441e71fb47fb5d6d911cb25b372c001ed71d806f8e2de497021451c7
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
