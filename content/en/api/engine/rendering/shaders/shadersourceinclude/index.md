---
uid: api.inno.rendering.shaders.645b08a55926df12
symbol: "engine:Inno.Rendering.Shaders:T:Inno.Rendering.Shaders.ShaderSourceInclude"
source: xml
reviewed: 40885e8e6af3b5c32aed49aa8133409dbf286dab31be308886502a635d7bcb55
title: "ShaderSourceInclude"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
contracts:
- project.inno-rendering-shaders
aliases: []
---

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

## Parameters

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.
