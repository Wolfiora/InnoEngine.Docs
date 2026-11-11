---
title: "ShaderTargetRegistry"
description: "Reference for ShaderTargetRegistry in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.e02f4de7b4225f6f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderTargetRegistry`

This reference describes `ShaderTargetRegistry` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a0d71c26d4648cef) | Method |
| [`Dispose`](#api-dcd023eddce14ea8) | Method |
| [`Expand`](#api-37453efeae37812e) | Method |
| [`ids`](#api-c8dad68d0229b4be) | Property |

## Type declaration

<a id="api-e02f4de7b4225f6f"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderTargetRegistry 7ab758a2f4e97d944e86563180785b5932283b1ec4892ea6ae19552776382b1a -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderTargetRegistry : System.IDisposable
```

Resolves domain targets under the same generation lease as their graph expansion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetRegistry.cs#L15).

## `#ctor`

<a id="api-a0d71c26d4648cef"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderTargetRegistry.#ctor(Inno.Extensibility.Types.TypeCatalog) 858a61192d2b46d9c82440da36523fea485da172c33620ecd58aaea086ef2954 -->

```csharp
public Inno.Rendering.Shaders.ShaderTargetRegistry.ShaderTargetRegistry(Inno.Extensibility.Types.TypeCatalog types)
```

Creates a target owner participating in shared candidate publication and retirement.

**Parameter `types`:** The authoring catalog, which must outlive this registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetRegistry.cs#L26).

## `Dispose`

<a id="api-dcd023eddce14ea8"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderTargetRegistry.Dispose 292485bc50bb8df95bf7ff1d4446ca8d3e4d4941d0e6c22171e5afb99ae20788 -->

```csharp
public void Inno.Rendering.Shaders.ShaderTargetRegistry.Dispose()
```

Retires the target snapshot through the shared registry lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetRegistry.cs#L93).

## `Expand`

<a id="api-37453efeae37812e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderTargetRegistry.Expand(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken) fb780106de38dfcc97dab6fd50c475fbdb4c4ca79308b506708147a183610cd2 -->

```csharp
public Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderTargetRegistry.Expand(Inno.Core.Graphs.GraphDocument document, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Expands an assigned target, or copies an explicitly authored low-level graph with no domain target.

**Parameter `document`:** Authored source, never modified by this operation.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Parameter `cancellationToken`:** Cancellation before and during extension invocation.

**Returns:** Detached explicit stage graph consumed by the existing compiler.

**Throws `Inno.Rendering.Shaders.ShaderTargetUnavailableException`:** The assigned target is absent from this generation.

**Throws `System.InvalidOperationException`:** The target returns an invalid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetRegistry.cs#L68).

## `ids`

<a id="api-c8dad68d0229b4be"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderTargetRegistry.ids 0f39925b559ff67ef9d3fd5a9aeb619365c751210e053b04cd4fe88220133431 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Shaders.ShaderTargetRegistry.ids { get; }
```

Gets detached stable target identities available in the current generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetRegistry.cs#L35).
