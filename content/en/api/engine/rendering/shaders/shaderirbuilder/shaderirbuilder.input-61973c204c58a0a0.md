---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.61973c204c58a0a0a44b69546b8e15b6734e2284ccef8bac33506816a7ee8521
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Input(System.String,Inno.Rendering.Shaders.ShaderSourceType)
title: ShaderIrBuilder.Input
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: b97629b9423aaa7e24c53bf7003d1f8ab552d0b845fbf3c49d162f6c8d3a9d39
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** Stable interface identity; it is not emitted as native source verbatim.

**Parameter `type`:** Complete non-void input type.

## Returns

The shared input value for this name and type.

## Exceptions

**Exception `T:System.ArgumentException`:** The name is empty, type is void, or this input was already declared with another type.
