---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.781f4366efe3fe81ba6fca4adc9b4563531c1ea3b9d066438b2cc64c601bddc8
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Loop(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue},System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,InnoEditor.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue},System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}})
title: ShaderIrBuilder.Loop
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: 099148b9ab00b4b611b1c134c79c5d01ee0955f9229eeaf1c747eba562b0fcf5
apiScope: Editor
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
