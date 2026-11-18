---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.529bf27702f0f4f578d6dc264e024e245d4faa9e49779693c371aa1989f1b7cb
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Extract(Inno.Rendering.Shaders.ShaderIrValue,System.Int32)
title: ShaderIrBuilder.Extract
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 44119049b0a0c3cdd433ab231ff11805e0fc445f3ea6ede2f98ab2b664c17d74
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
