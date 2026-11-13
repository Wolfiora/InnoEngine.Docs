---
uid: api.5fa23e9ea3cc1ea43f5070d08826a64952ed6398af9c0dbbf80613903828045d
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildInput.#ctor(System.String,System.String)"
source: xml
reviewed: cffbbef55142db287b3679014fdc99a5db97b0eb2937481cdf3ddd908ab3c377
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Declares one file or directory consumed by a native recipe.

**Parameter `logicalPath`:** A nonempty, slash-separated identity relative to a declared logical root.

**Parameter `physicalPath`:** The absolute file or directory used only for reading and execution.

**Exception `T:System.ArgumentException`:** An identity is empty, contains a control character or backslash, or the physical path is relative.
