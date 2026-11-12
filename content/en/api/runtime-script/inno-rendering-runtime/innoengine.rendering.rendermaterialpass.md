---
title: "RenderMaterialPass"
description: "Reference for RenderMaterialPass in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.c48785094a836fd2
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderMaterialPass`

This reference describes `RenderMaterialPass` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f8e76cf98d5f6912) | Method |
| [`Bind`](#api-37a9419a86d9a0b5) | Method |
| [`UsesBinding`](#api-3c8e19ad6039f790) | Method |
| [`computePipeline`](#api-2deaa329c241a84b) | Property |
| [`definition`](#api-1931c8f82e6389ea) | Property |
| [`graphicsPipeline`](#api-dbd2abcc4163f3d6) | Property |
| [`isCompute`](#api-bb2dc76cc090ddad) | Property |
| [`isGraphics`](#api-60965ffb95a4260e) | Property |

## Type declaration

<a id="api-c48785094a836fd2"></a>
<!-- api: T:InnoEngine.Rendering.RenderMaterialPass 8c244e6c6e9a32ae0c58c95668912e07eb8821f2ae9d7278bdff84d80ea661d3 -->

```csharp
public sealed class InnoEngine.Rendering.RenderMaterialPass
```

Represents one frame-resolved material pass and its material-owned bindings.

**Constraints:** The instance is scoped to the active render device generation. Pipeline-owned graph textures and
buffers remain explicit and are bound by the caller after this material state is applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L36).

## `#ctor`

<a id="api-f8e76cf98d5f6912"></a>
<!-- api: M:InnoEngine.Rendering.RenderMaterialPass.#ctor 976a6db8256cd82973ab4fb74a8ebd8b37f9dafb364dba80be0d2c7f73118322 -->

```csharp
public InnoEngine.Rendering.RenderMaterialPass.RenderMaterialPass()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L36).

## `Bind`

<a id="api-37a9419a86d9a0b5"></a>
<!-- api: M:InnoEngine.Rendering.RenderMaterialPass.Bind(InnoEngine.Rendering.RenderCommandEncoder) 0dc5b638d947ff44049ac8a9a973c31aafe4621ed8e27bfd0caa150a9d8edf7a -->

```csharp
public void InnoEngine.Rendering.RenderMaterialPass.Bind(InnoEngine.Rendering.RenderCommandEncoder commands)
```

Binds the program and all material-owned values and textures.

**Parameter `commands`:** Current pass command encoder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L132).

## `UsesBinding`

<a id="api-3c8e19ad6039f790"></a>
<!-- api: M:InnoEngine.Rendering.RenderMaterialPass.UsesBinding(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderShaderBindingKind) 96feb679876cd3e334bba9ceb1e923742b23f608a87ca3fd24fb46cb70e9299e -->

```csharp
public bool InnoEngine.Rendering.RenderMaterialPass.UsesBinding(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.RenderShaderBindingKind kind)
```

Gets whether the compiled program actively consumes one declared binding.

**Parameter `binding`:** Stable binding declared by the shader contract.

**Parameter `kind`:** Expected command-binding domain.

**Returns:** `true` when the final compiled pass reflects the binding; otherwise,
            `false` when the compiler proved the declared binding unused and removed it.

**Throws `System.ArgumentException`:** The binding is not declared by the shader, or its declared kind differs from `kind`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L109).

## `computePipeline`

<a id="api-2deaa329c241a84b"></a>
<!-- api: P:InnoEngine.Rendering.RenderMaterialPass.computePipeline 486bcc82ab7f6549ad06b114699683143ce673a698f348b52a23768d0b46012b -->

```csharp
public InnoEngine.Rendering.ComputePipelineHandle InnoEngine.Rendering.RenderMaterialPass.computePipeline { get; }
```

Gets the compute pipeline, or an invalid handle for a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L81).

## `definition`

<a id="api-1931c8f82e6389ea"></a>
<!-- api: P:InnoEngine.Rendering.RenderMaterialPass.definition 9179cd2e0317c80fc4de0e5bb02252251134b4e79440c538da7b57853bda279c -->

```csharp
public InnoEngine.Rendering.ShaderPassDefinition InnoEngine.Rendering.RenderMaterialPass.definition { get; }
```

Gets the selected provider-defined shader pass with detached metadata storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L71).

## `graphicsPipeline`

<a id="api-dbd2abcc4163f3d6"></a>
<!-- api: P:InnoEngine.Rendering.RenderMaterialPass.graphicsPipeline 578c19420cb978a857282fe70c60c32aabfa71ba85d5346018fa8d1d67cb48b2 -->

```csharp
public InnoEngine.Rendering.GraphicsPipelineHandle InnoEngine.Rendering.RenderMaterialPass.graphicsPipeline { get; }
```

Gets the graphics pipeline, or an invalid handle for a compute pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L76).

## `isCompute`

<a id="api-bb2dc76cc090ddad"></a>
<!-- api: P:InnoEngine.Rendering.RenderMaterialPass.isCompute 44a785496d0324a68d6a1f9bbf8a17ee785305cd7b9345cc96d674224f89a260 -->

```csharp
public bool InnoEngine.Rendering.RenderMaterialPass.isCompute { get; }
```

Gets whether this is a compute material pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L91).

## `isGraphics`

<a id="api-60965ffb95a4260e"></a>
<!-- api: P:InnoEngine.Rendering.RenderMaterialPass.isGraphics a9cb474f5fbba6c594110d3a55404178db5e5c65414d2849c25c2482ebd55d00 -->

```csharp
public bool InnoEngine.Rendering.RenderMaterialPass.isGraphics { get; }
```

Gets whether this is a graphics material pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L86).
