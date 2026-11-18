---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7ed9e3c464ee93ee1ae471103f7a5e6fbc51f3695e3ddf1ac5014abc56b06ccb
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Loop(Inno.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue},System.Func{Inno.Rendering.Shaders.ShaderIrBuilder,Inno.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}})
title: ShaderIrBuilder.Loop
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: e76f80eb75ec8de292b2fca1a5a71979480638ed34ca3830858158d4f3efd8a8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `iterations`:** Unsigned iteration count, evaluated once before entering the loop.

**Parameter `initialState`:** Named values used before the first iteration and returned unchanged for zero iterations.

**Parameter `body`:** Transient callback receiving its builder, uint iteration index and typed carried values.

## Returns

Final carried values in the enclosing scope; an empty state map permits effect-only loops.

## Exceptions

**Exception `T:System.ArgumentException`:** The count is not uint or the body's output state changes names or types.

**Exception `T:System.InvalidOperationException`:** The body mutates the enclosing builder.
