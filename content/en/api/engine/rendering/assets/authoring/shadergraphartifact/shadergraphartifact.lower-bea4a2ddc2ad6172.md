---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bea4a2ddc2ad617285ac0b92bfcabb53c94126c0449237095e9ee94b2482c64c
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Lower(System.ReadOnlySpan{System.Byte},System.String,Inno.Rendering.Shaders.ShaderNodeCompilerRegistry,Inno.Rendering.Shaders.ShaderSourceFrontendRegistry,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})
title: ShaderGraphArtifact.Lower
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
sourceFingerprint: 7ebf73f6c0f9d40ef2fead28b29c75d2b3ca42b996ef8c8a8491d85bd74f75f2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
