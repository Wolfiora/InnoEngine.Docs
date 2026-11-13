---
uid: api.b681bfd95fbeb3471b3f4c3a9dbb178fd31acd5dbd26736e01e5fb759a56a5fc
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.Analyze(System.String,Inno.Rendering.Shaders.ShaderSourceRequest)"
source: xml
reviewed: 176c663807a3b00c7e7c1b2e7463abe459a7341f981b992ccf73b8c9da00e278
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
