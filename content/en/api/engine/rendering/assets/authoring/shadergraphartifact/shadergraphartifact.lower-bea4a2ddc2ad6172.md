---
uid: api.bea4a2ddc2ad617285ac0b92bfcabb53c94126c0449237095e9ee94b2482c64c
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Lower(System.ReadOnlySpan{System.Byte},System.String,Inno.Rendering.Shaders.ShaderNodeCompilerRegistry,Inno.Rendering.Shaders.ShaderSourceFrontendRegistry,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: b66d061b8e32cad7fb5025bf48d2637ee2e8a47cac85990494de1769f75e6451
title: "ShaderGraphArtifact.Lower"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Analyzes frozen functions and lowers the graph in the owner's active generation.

## Parameters

**Parameter `bytes`:** Committed authoring artifact bytes.

**Parameter `implementationId`:** Selected adapter implementation identity.

**Parameter `nodes`:** Shared node compiler registry.

**Parameter `frontends`:** Shared language frontend registry.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner asset/reference context.

**Parameter `defines`:** Exact target/variant preprocessing inputs.

## Returns

Complete typed stages or graph diagnostics, never a partial candidate.
