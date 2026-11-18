---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b681bfd95fbeb3471b3f4c3a9dbb178fd31acd5dbd26736e01e5fb759a56a5fc
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.Analyze(System.String,Inno.Rendering.Shaders.ShaderSourceRequest)
title: ShaderSourceFrontendCatalog.Analyze
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 24854a6814c55b11e765e987cffc9462421fc5317bd2062d004b208274fd5702
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `languageId`:** Registered language identity, never inferred from the active graphics API.

**Parameter `request`:** Immutable source analysis request.

## Returns

The selected frontend's analysis result.

## Exceptions

**Exception `T:System.NotSupportedException`:** The requested language provider is unavailable.
