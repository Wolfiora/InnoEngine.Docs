---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5ac36ce614cfd7e482a859ac7b193180d05e6e36036dd24bfbf9947d2a71985e
symbol: engine:Inno.Editor.Shaders:M:Inno.Editor.Shaders.ShaderParameterPresentation.Write(Inno.Core.Graphs.GraphDocument,Inno.Rendering.ShaderPropertyID,Inno.Editor.Shaders.ShaderParameterPresentation,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderParameterPresentation.Write
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: source-clr
sourceFingerprint: b7e3d29d23adcdb5ee98d486ec61edbfa19aa19eaf26086650fabff5cf533ef3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Detached graph owned by the caller's History transaction.

**Parameter `propertyID`:** Stable parameter identity.

**Parameter `presentation`:** Detached Inspector settings.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity or range is invalid, or a bound cannot be represented by a scalar Shader Float.
