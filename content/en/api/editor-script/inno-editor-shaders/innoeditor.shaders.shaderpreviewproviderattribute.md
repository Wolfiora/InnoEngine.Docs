---
title: "ShaderPreviewProviderAttribute"
description: "Reference for ShaderPreviewProviderAttribute in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.editor-script.61041feb8576bee3
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders
  - manual.scripting.use-script-api
---
# `ShaderPreviewProviderAttribute`

This reference describes `ShaderPreviewProviderAttribute` in `Inno.Editor.Shaders`. Read the [shared contract](../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-be6eb84ce9f482e5) | Method |
| [`contractId`](#api-c1d85f7f11e8dd1b) | Property |

## Type declaration

<a id="api-61041feb8576bee3"></a>
<!-- api: T:InnoEditor.Shaders.ShaderPreviewProviderAttribute 42bec23efe0275490f76ee996931132dad9a24285fbec90c0e2ad608b9efe44c -->

```csharp
public sealed class InnoEditor.Shaders.ShaderPreviewProviderAttribute : System.Attribute
```

Associates a reloadable preview implementation with one open Shader contract.

**Parameter `contractId`:** Non-empty domain-owned contract identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L17).

## `#ctor`

<a id="api-be6eb84ce9f482e5"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviewProviderAttribute.#ctor(System.String) e07f9d1180c6cbf046e7f201a149fd5c77324631a546600a153b4b60454b9f40 -->

```csharp
public InnoEditor.Shaders.ShaderPreviewProviderAttribute.ShaderPreviewProviderAttribute(string contractId)
```

Associates a reloadable preview implementation with one open Shader contract.

**Parameter `contractId`:** Non-empty domain-owned contract identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L17).

## `contractId`

<a id="api-c1d85f7f11e8dd1b"></a>
<!-- api: P:InnoEditor.Shaders.ShaderPreviewProviderAttribute.contractId 290b319b8152e8ae14c25c9046c20755040340a068254a9dd6a9b711fd5fd9f3 -->

```csharp
public string InnoEditor.Shaders.ShaderPreviewProviderAttribute.contractId { get; }
```

Gets the non-empty Shader contract consumed by this preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L22).
