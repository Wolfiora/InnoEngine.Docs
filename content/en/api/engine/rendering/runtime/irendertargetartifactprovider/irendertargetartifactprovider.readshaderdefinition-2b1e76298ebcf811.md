---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2b1e76298ebcf811bc3d2984eeb38cd5606968c37613635f591dfe1826f859e9
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact)
title: IRenderTargetArtifactProvider.ReadShaderDefinition
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 1b0e97ae85ac7b8c62d6a28784bfc5a285c60e6326d0183f5386be3bdc877efd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `artifact`:** One immutable program publication, including its native-serialized runtime definition.

## Returns

A detached definition belonging to this artifact, never the latest uncompiled source definition.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The publication cannot be decoded in the current owner generation.
