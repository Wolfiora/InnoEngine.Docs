---
title: "ShaderPreviewContext"
description: "Reference for ShaderPreviewContext in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.cec268921d9dc5c8
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders
---
# `ShaderPreviewContext`

This reference describes `ShaderPreviewContext` in `Inno.Editor.Shaders`. Read the [shared contract](../../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ee053b07553c0c68) | Method |
| [`artifact`](#api-ed75c7021f5ffc78) | Property |
| [`definition`](#api-123745de6ec130ed) | Property |
| [`diagnostics`](#api-4bc576943224c4c9) | Property |
| [`material`](#api-f0eb503b1dbd15e9) | Property |
| [`pixelHeight`](#api-a33bab3b2d2aedf8) | Property |
| [`pixelWidth`](#api-5b0ac395c4ba3bb7) | Property |
| [`resourceId`](#api-db863f0e472dc24a) | Property |

## Type declaration

<a id="api-cec268921d9dc5c8"></a>
<!-- api: T:Inno.Editor.Shaders.ShaderPreviewContext 24fcfecf325a9d26687613f89fc534353d725b927f6f174481edcfbfc286460f -->

```csharp
public sealed class Inno.Editor.Shaders.ShaderPreviewContext
```

Carries frame-only preview inputs; persistent provider state must retain stable values rather than this object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L46).

## `#ctor`

<a id="api-ee053b07553c0c68"></a>
<!-- api: M:Inno.Editor.Shaders.ShaderPreviewContext.#ctor(Inno.Rendering.Runtime.RenderPersistentResourceId,Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.RenderShaderArtifact,Inno.Rendering.Assets.ShaderDefinition,Inno.Core.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32) 5283b0ab256415081f4e3da9cec378594d15f5d2351a49de03b7884acf56baff -->

```csharp
public Inno.Editor.Shaders.ShaderPreviewContext.ShaderPreviewContext(Inno.Rendering.Runtime.RenderPersistentResourceId resourceId, Inno.Rendering.Assets.MaterialAsset material, Inno.Rendering.Assets.RenderShaderArtifact artifact, Inno.Rendering.Assets.ShaderDefinition definition, Inno.Core.Diagnostics.IDiagnosticReporter diagnostics, int pixelWidth, int pixelHeight)
```

Creates a preview invocation from host-owned detached inputs.

**Parameter `resourceId`:** Isolated material publication and viewport resource identity.

**Parameter `material`:** Detached values with a current Shader reference; do not modify the reference.

**Parameter `artifact`:** Compiled candidate, never published as a canonical Shader.

**Parameter `definition`:** Detached contract captured by the candidate.

**Parameter `diagnostics`:** Preview-local reporter; errors must not contaminate project diagnostics.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L72).

## `artifact`

<a id="api-ed75c7021f5ffc78"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderPreviewContext.artifact 72617ceb9f7dc6498c5fd325c242e8b7aac7d0afc9e366a863fd8ac03678719c -->

```csharp
public Inno.Rendering.Assets.RenderShaderArtifact Inno.Editor.Shaders.ShaderPreviewContext.artifact { get; }
```

Gets the complete immutable GPU candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L100).

## `definition`

<a id="api-123745de6ec130ed"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderPreviewContext.definition 48eba862c7c6011abe1d5a5a07b185e22f4be4fe75086a01843e12c54dcad3ec -->

```csharp
public Inno.Rendering.Assets.ShaderDefinition Inno.Editor.Shaders.ShaderPreviewContext.definition { get; }
```

Gets the candidate's exact contract, not the latest uncompiled source interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L104).

## `diagnostics`

<a id="api-4bc576943224c4c9"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderPreviewContext.diagnostics 1bc0795fa425f7e2e5ca5562d41450504000accd15dc150cb4e693a2c1df3393 -->

```csharp
public Inno.Core.Diagnostics.IDiagnosticReporter Inno.Editor.Shaders.ShaderPreviewContext.diagnostics { get; }
```

Gets the host-owned, isolated diagnostic producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L108).

## `material`

<a id="api-f0eb503b1dbd15e9"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderPreviewContext.material 665845cc4fa42fa6764f578c58a40b7415d9321e359efd618285780c4bb8e835 -->

```csharp
public Inno.Rendering.Assets.MaterialAsset Inno.Editor.Shaders.ShaderPreviewContext.material { get; }
```

Gets the invocation-local Material values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L96).

## `pixelHeight`

<a id="api-a33bab3b2d2aedf8"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderPreviewContext.pixelHeight a6d1c2947b6045d0447c60a5d3c9114f05e054933e9f19899cd7cade972d04a1 -->

```csharp
public int Inno.Editor.Shaders.ShaderPreviewContext.pixelHeight { get; }
```

Gets target height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L116).

## `pixelWidth`

<a id="api-5b0ac395c4ba3bb7"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderPreviewContext.pixelWidth ccfaa88ebaea8b63b9e28b9564712b25628b1e7110b6387cb79eaf22c3885235 -->

```csharp
public int Inno.Editor.Shaders.ShaderPreviewContext.pixelWidth { get; }
```

Gets target width in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L112).

## `resourceId`

<a id="api-db863f0e472dc24a"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderPreviewContext.resourceId 492cf38f165d7d65343774d1a4d6fc53fe89d863d5768bf43042d6510b8ba69c -->

```csharp
public Inno.Rendering.Runtime.RenderPersistentResourceId Inno.Editor.Shaders.ShaderPreviewContext.resourceId { get; }
```

Gets the publication scope released by the host when this preview closes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L92).
