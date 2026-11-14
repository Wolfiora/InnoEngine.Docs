---
uid: api.inno.rendering.shaders.editor-script.035063f419fee495
symbol: "scripting:Inno.Rendering.Shaders:T:InnoEditor.Rendering.Shaders.ShaderSourceInclude"
source: xml
reviewed: 691410fefc30f73971eadbb204c0ffa164dbb2692dcd0056a20f6d65bce2c6c1
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

## Parameters

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.
