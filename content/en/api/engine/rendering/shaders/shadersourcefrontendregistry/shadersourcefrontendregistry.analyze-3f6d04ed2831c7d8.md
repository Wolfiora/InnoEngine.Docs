---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3f6d04ed2831c7d840695f108cebf3ea671798cab7fc4424cd62137967414707
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.Analyze(System.String,Inno.Rendering.Shaders.ShaderSourceRequest)
title: ShaderSourceFrontendRegistry.Analyze
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 40c4db834e63015964b76b45809f9aef09fcb3353091d594126cff17d1878bd5

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Analyzes source while preventing provider retirement for the complete synchronous operation.

## Parameters

**Parameter `languageId`:** The exact registered language identity.

**Parameter `request`:** Candidate source inputs and include resolver.

## Returns

A neutral interface/diagnostic result without a provider reference.

## Exceptions

**Exception `T:System.NotSupportedException`:** The language is not available in the current generation.
