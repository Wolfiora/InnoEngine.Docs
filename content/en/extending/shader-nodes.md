---
title: Add a shader compiler primitive
description: Implement an Editor-scoped lowering extension only when reusable
  graphs and public IR cannot express the operation.
uid: extending.shader-nodes
kind: how-to
owners:
  - Inno.Rendering.Shaders
  - Inno.Core.Graphs
contracts:
  - project.inno-rendering-shaders
exampleMode: editor-script
exampleProjects:
  - Inno.Rendering.Shaders
  - Inno.Core.Graphs
---
# Add a shader compiler primitive

Most reusable nodes belong in an ordinary `.ishader` graph. Implement `IShaderNodeCompiler` for a new primitive that existing nodes and public IR cannot represent; it is not the default way to package a convenient subgraph.

## Define explicit typed ports

The following Editor script contributes a single float output. Place it in an `.editor.cs` source file using the logical Editor namespace:

```csharp
using System.Collections.Generic;
using InnoEngine.Graphs;
using InnoEditor.Rendering.Shaders;

public sealed class HalfNodeCompiler : IShaderNodeCompiler
{
    public string definitionId => "project.shader.half";
    public IReadOnlyList<ShaderNodePort> GetPorts(ShaderNodeDescriptionContext context)
        => [new("value", ShaderSourceType.Atomic("float"), GraphPortDirection.Output)];
    public IReadOnlyDictionary<string, ShaderIrValue> Lower(ShaderNodeLoweringContext context)
        => new Dictionary<string, ShaderIrValue> { ["value"] = context.builder.Constant(0.5f) };
}
```

This example demonstrates the actual Editor script API. It does not establish a complete custom node's drawing, creation-menu behavior, reload or GPU execution. Runtime scripts cannot reference these authoring types.

## Lower through the shared builder

Use the supplied context and builder to return declared outputs with exact types. Preserve stable port IDs; invalid old connections remain visible for repair rather than being matched by position. The compiler checks aggregate/member conflicts and required input validity without mutating the authored source graph.

Follow [typed IR rules](../architecture/shader-ir.md) for numeric operations, nested regions, stage legality and side effects. Do not insert a native string or capture a hidden GPU global as a shortcut.

## Separate drawing from compilation

Custom node presentation belongs to the independent Editor.Shaders `ShaderNodeDrawContext.Read/Write` contract. It edits neutral data rather than becoming a compiler callback. Script graph helpers borrow the host's serialization/reference context; they do not create their own registry or retain converter generations.

Verify both the generated IDE facade and real Editor script compile path, then run the relevant authoring/reload and backend checks for the behavior added. A compiling extension interface is not device or unload certification.
