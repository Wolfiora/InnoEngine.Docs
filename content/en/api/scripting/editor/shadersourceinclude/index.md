---
uid: api.inno.rendering.shaders.editor-script.035063f419fee495
symbol: "scripting:Inno.Rendering.Shaders:T:InnoEditor.Rendering.Shaders.ShaderSourceInclude"
source: xml
reviewed: d4204277f6375c783829e3b448825082ed3c42b36b942cbfa2ee4665fd29a3ec
title: "ShaderSourceInclude"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-rendering-shaders
aliases: []
---

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.
