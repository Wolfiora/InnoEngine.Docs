---
uid: api.b681bfd95fbeb3471b3f4c3a9dbb178fd31acd5dbd26736e01e5fb759a56a5fc
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.Analyze(System.String,Inno.Rendering.Shaders.ShaderSourceRequest)"
source: xml
reviewed: 6a0565bccdbe9426b20a6feb1474812c3449323a4ad0706da728c8427f35d41f
title: "Analyze"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Analyzes source using an explicitly selected language.

**Parameter `languageId`:** Registered language identity, never inferred from the active graphics API.

**Parameter `request`:** Immutable source analysis request.

**Returns:** The selected frontend's analysis result.

**Exception `T:System.NotSupportedException`:** The requested language provider is unavailable.
