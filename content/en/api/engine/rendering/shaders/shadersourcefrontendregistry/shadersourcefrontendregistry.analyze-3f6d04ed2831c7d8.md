---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3f6d04ed2831c7d840695f108cebf3ea671798cab7fc4424cd62137967414707
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.Analyze(System.String,Inno.Rendering.Shaders.ShaderSourceRequest)
title: ShaderSourceFrontendRegistry.Analyze
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: a3fcfda2fc1a82f287dbee37390f627d290e5ef25d3a62378b66b60c494fcd5f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `languageID`:** The exact registered language identity.

**Parameter `request`:** Candidate source inputs and include resolver.

## Returns

A neutral interface/diagnostic result without a provider reference.

## Exceptions

**Exception `T:System.NotSupportedException`:** The language is not available in the current generation.
