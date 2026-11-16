---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.529bf27702f0f4f578d6dc264e024e245d4faa9e49779693c371aa1989f1b7cb
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Extract(Inno.Rendering.Shaders.ShaderIrValue,System.Int32)
title: ShaderIrBuilder.Extract
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 17dbf775c0f1b26cb02577e89a2fdc5938d3ad8470cfce75fa8be278bad614f7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** Aggregate value from this builder.

**Parameter `memberIndex`:** Zero-based member index; a matrix index selects a column vector.

## Returns

The precisely typed selected member.

## Exceptions

**Exception `T:System.ArgumentException`:** The input is not an aggregate.

**Exception `T:System.ArgumentOutOfRangeException`:** The member index is outside the aggregate layout.
