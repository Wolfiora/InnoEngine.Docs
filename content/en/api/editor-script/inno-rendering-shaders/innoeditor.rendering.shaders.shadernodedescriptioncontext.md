---
title: "ShaderNodeDescriptionContext"
description: "Reference for ShaderNodeDescriptionContext in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.b772bc518bd3bd0f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderNodeDescriptionContext`

This reference describes `ShaderNodeDescriptionContext` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-08627f4cba68c43a) | Method |
| [```Read``1```](#api-6983998ee5d6d1ab) | Method |
| [`definitionId`](#api-38a0f8c31b74a9dc) | Property |
| [`implementationId`](#api-a7fe17095fad4e09) | Property |
| [`nodeId`](#api-29e4abf51ec96f55) | Property |
| [`sourceModule`](#api-300d526e3f159a4b) | Property |
| [`stageInput`](#api-3419ab9a7df042cd) | Property |

## Type declaration

<a id="api-b772bc518bd3bd0f"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext d445b59b1e7d5d6cacb2028d6e47ccd231ac22261c288de3e50f3493d05b9dc5 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext
```

Provides invocation-scoped property decoding through the complete owner serialization context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L66).

## `#ctor`

<a id="api-08627f4cba68c43a"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.#ctor 8eab2585a6a23825bd2ca65bfe5ddd1d31a34d0166b3ef511d2955ac71a7d29b -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.ShaderNodeDescriptionContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L66).

## ```Read``1```

<a id="api-6983998ee5d6d1ab"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.Read``1(System.String,``0) 14f1685f8692684537e58768610665435d0aac9cd02690ffea37e0db62f83c23 -->

```csharp
public T InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.Read<T>(string id, T defaultValue)
```

Reads a property using the owner's converter generation and complete reference resolver context.

**Type parameter `T`:** Declared property type supported by the native serializer.

**Parameter `id`:** Stable property identity.

**Parameter `defaultValue`:** Value used only when the property is absent, never after corrupt-data failure.

**Returns:** The deserialized value or the supplied absent-property default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L124).

## `definitionId`

<a id="api-38a0f8c31b74a9dc"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.definitionId 1790edb53d94c9bd26fb7a29fde55599881ae5fde29ef35d35eec0f763a60df6 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.definitionId { get; }
```

Gets the node definition's stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L95).

## `implementationId`

<a id="api-a7fe17095fad4e09"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.implementationId 5b4fd00734b03189d19d2982ab222113ce99e7621932e281e5a26849fde66012 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.implementationId { get; }
```

Gets the exact implementation key chosen by the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L103).

## `nodeId`

<a id="api-29e4abf51ec96f55"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.nodeId 73965a4afd4d1f4f5bc61f0f3467f8b86151fd23eb2b1874d4cc28da02543ead -->

```csharp
public InnoEngine.Graphs.GraphNodeId InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.nodeId { get; }
```

Gets the node's stable identity, never its editor runtime handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L91).

## `sourceModule`

<a id="api-300d526e3f159a4b"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.sourceModule 1e62ffa9f4b91f18512ad756f96f377af083b74c9fad8e94a463318f65403cd0 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis? InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.sourceModule { get; }
```

Gets a frozen module resolved by the asset owner; null means unassigned or unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L99).

## `stageInput`

<a id="api-3419ab9a7df042cd"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.stageInput 199424f8c50e1f36c11e0495c2e57ee654511de4a02b23d85f8105e9f6e789dd -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrStageInput? InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.stageInput { get; }
```

Gets the target-assigned stage input for this node, when applicable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L107).
