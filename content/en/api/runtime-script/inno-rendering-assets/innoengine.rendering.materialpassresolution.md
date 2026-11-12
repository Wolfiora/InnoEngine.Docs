---
title: "MaterialPassResolution"
description: "Reference for MaterialPassResolution in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.33f0f579858a4f73
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `MaterialPassResolution`

This reference describes `MaterialPassResolution` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c00df2bb29ecff3d) | Method |
| [`pass`](#api-96ae76bfa6ff04d1) | Property |
| [`technique`](#api-905bd6cd2f2a8947) | Property |

## Type declaration

<a id="api-33f0f579858a4f73"></a>
<!-- api: T:InnoEngine.Rendering.MaterialPassResolution 5263048e0d7918d9a9446272423abc622aefe436e9ecb59233baa278b98cecbc -->

```csharp
public sealed class InnoEngine.Rendering.MaterialPassResolution
```

Describes one capability-compatible material pass selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolution.cs#L16).

## `#ctor`

<a id="api-c00df2bb29ecff3d"></a>
<!-- api: M:InnoEngine.Rendering.MaterialPassResolution.#ctor(InnoEngine.Rendering.ShaderTechniqueDefinition,InnoEngine.Rendering.ShaderPassDefinition) a9b878b562d6c31711b0162d93f1f9e7478bff225aa2d5cf699fb04a303b673f -->

```csharp
public InnoEngine.Rendering.MaterialPassResolution.MaterialPassResolution(InnoEngine.Rendering.ShaderTechniqueDefinition technique, InnoEngine.Rendering.ShaderPassDefinition pass)
```

Creates a material pass resolution.

**Parameter `technique`:** Selected open-contract technique.

**Parameter `pass`:** Concrete pass mapped to the requested role.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolution.cs#L30).

## `pass`

<a id="api-96ae76bfa6ff04d1"></a>
<!-- api: P:InnoEngine.Rendering.MaterialPassResolution.pass 02a1fcd1c312fc4904d52c150f01ee745074400e21203129bcbe0c1b18d8716f -->

```csharp
public InnoEngine.Rendering.ShaderPassDefinition InnoEngine.Rendering.MaterialPassResolution.pass { get; }
```

Gets the concrete shader pass with detached metadata storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolution.cs#L46).

## `technique`

<a id="api-905bd6cd2f2a8947"></a>
<!-- api: P:InnoEngine.Rendering.MaterialPassResolution.technique 46202f59e10a3867affb13a38818c2db8dc46ff4d76367049167b7893a283446 -->

```csharp
public InnoEngine.Rendering.ShaderTechniqueDefinition InnoEngine.Rendering.MaterialPassResolution.technique { get; }
```

Gets the selected technique with detached role mapping storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolution.cs#L41).
