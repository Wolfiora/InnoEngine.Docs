---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3f6d04ed2831c7d840695f108cebf3ea671798cab7fc4424cd62137967414707
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.Analyze(System.String,Inno.Rendering.Shaders.ShaderSourceRequest)
title: ShaderSourceFrontendRegistry.Analyze
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 1bf80282428e0bf34b252249bf16cff8e67791183ccaed89419c5208869655db
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `languageId`:** The exact registered language identity.

**Parameter `request`:** Candidate source inputs and include resolver.

## Returns

A neutral interface/diagnostic result without a provider reference.

## Exceptions

**Exception `T:System.NotSupportedException`:** The language is not available in the current generation.
