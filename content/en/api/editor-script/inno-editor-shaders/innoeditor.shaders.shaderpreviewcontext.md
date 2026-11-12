---
title: "ShaderPreviewContext"
description: "Reference for ShaderPreviewContext in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.editor-script.808336373f081597
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders
  - manual.scripting.use-script-api
---
# `ShaderPreviewContext`

This reference describes `ShaderPreviewContext` in `Inno.Editor.Shaders`. Read the [shared contract](../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-70c285c5726a0471) | Method |
| [`artifact`](#api-3965934678c58ded) | Property |
| [`definition`](#api-78b4f48ea8feebbf) | Property |
| [`diagnostics`](#api-b76931943732c066) | Property |
| [`material`](#api-3e2e075019c01787) | Property |
| [`pixelHeight`](#api-de4aad554e53bbf8) | Property |
| [`pixelWidth`](#api-4f97db497cee963a) | Property |
| [`resourceId`](#api-eba0e71d333dcf1f) | Property |

## Type declaration

<a id="api-808336373f081597"></a>
<!-- api: T:InnoEditor.Shaders.ShaderPreviewContext 97517370c83ed729c64f55df9ea40caad7c15bbedbcb9a7b174c6ac1f4a20f04 -->

```csharp
public sealed class InnoEditor.Shaders.ShaderPreviewContext
```

Carries frame-only preview inputs; persistent provider state must retain stable values rather than this object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L46).

## `#ctor`

<a id="api-70c285c5726a0471"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviewContext.#ctor(InnoEngine.Rendering.RenderPersistentResourceId,InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.RenderShaderArtifact,InnoEngine.Rendering.ShaderDefinition,InnoEngine.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32) ce297c41ca6cb36f2cd8bdb6ceccf0a9ce85eec795d5b51d4ab827dd995e1e93 -->

```csharp
public InnoEditor.Shaders.ShaderPreviewContext.ShaderPreviewContext(InnoEngine.Rendering.RenderPersistentResourceId resourceId, InnoEngine.Rendering.MaterialAsset material, InnoEngine.Rendering.RenderShaderArtifact artifact, InnoEngine.Rendering.ShaderDefinition definition, InnoEngine.Diagnostics.IDiagnosticReporter diagnostics, int pixelWidth, int pixelHeight)
```

Creates a preview invocation from host-owned detached inputs.

**Parameter `resourceId`:** Isolated material publication and viewport resource identity.

**Parameter `material`:** Detached values with a current Shader reference; do not modify the reference.

**Parameter `artifact`:** Compiled candidate, never published as a canonical Shader.

**Parameter `definition`:** Detached contract captured by the candidate.

**Parameter `diagnostics`:** Preview-local reporter; errors must not contaminate project diagnostics.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L72).

## `artifact`

<a id="api-3965934678c58ded"></a>
<!-- api: P:InnoEditor.Shaders.ShaderPreviewContext.artifact c883d60d8154b93ed68e8ae92bc64dc543afa96894af3be0f84f1f679731ea8b -->

```csharp
public InnoEngine.Rendering.RenderShaderArtifact InnoEditor.Shaders.ShaderPreviewContext.artifact { get; }
```

Gets the complete immutable GPU candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L100).

## `definition`

<a id="api-78b4f48ea8feebbf"></a>
<!-- api: P:InnoEditor.Shaders.ShaderPreviewContext.definition 2f857745d733b211bc14cd82789d052c79e5986b1b7f40fe11ce55769b5960a2 -->

```csharp
public InnoEngine.Rendering.ShaderDefinition InnoEditor.Shaders.ShaderPreviewContext.definition { get; }
```

Gets the candidate's exact contract, not the latest uncompiled source interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L104).

## `diagnostics`

<a id="api-b76931943732c066"></a>
<!-- api: P:InnoEditor.Shaders.ShaderPreviewContext.diagnostics 7e291d49ddb6d1e30bb26aa57ce5d023ce8901df7bd64ef638fd3fd1b00bf0c4 -->

```csharp
public InnoEngine.Diagnostics.IDiagnosticReporter InnoEditor.Shaders.ShaderPreviewContext.diagnostics { get; }
```

Gets the host-owned, isolated diagnostic producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L108).

## `material`

<a id="api-3e2e075019c01787"></a>
<!-- api: P:InnoEditor.Shaders.ShaderPreviewContext.material e1613f1e6e600daf616fccf5a648c8613007303fab94301621e2d8801c71b9f1 -->

```csharp
public InnoEngine.Rendering.MaterialAsset InnoEditor.Shaders.ShaderPreviewContext.material { get; }
```

Gets the invocation-local Material values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L96).

## `pixelHeight`

<a id="api-de4aad554e53bbf8"></a>
<!-- api: P:InnoEditor.Shaders.ShaderPreviewContext.pixelHeight 93d8499783d339daa8edb1dcae50c3c696dca5850a4f66bccc39257331df308e -->

```csharp
public int InnoEditor.Shaders.ShaderPreviewContext.pixelHeight { get; }
```

Gets target height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L116).

## `pixelWidth`

<a id="api-4f97db497cee963a"></a>
<!-- api: P:InnoEditor.Shaders.ShaderPreviewContext.pixelWidth 043d63b527c7268691c7565f9425536415518464ccf4df4ebdb05018aa415c66 -->

```csharp
public int InnoEditor.Shaders.ShaderPreviewContext.pixelWidth { get; }
```

Gets target width in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L112).

## `resourceId`

<a id="api-eba0e71d333dcf1f"></a>
<!-- api: P:InnoEditor.Shaders.ShaderPreviewContext.resourceId a60cf06b088efa7180845580fdc6fc8284ad96bc42ba342d43d293c643cc067d -->

```csharp
public InnoEngine.Rendering.RenderPersistentResourceId InnoEditor.Shaders.ShaderPreviewContext.resourceId { get; }
```

Gets the publication scope released by the host when this preview closes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L92).
