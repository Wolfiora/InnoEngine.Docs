---
title: "ShaderPreviewProviderAttribute"
description: "Reference for ShaderPreviewProviderAttribute in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.e11c53e0bc4d5178
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders
---
# `ShaderPreviewProviderAttribute`

This reference describes `ShaderPreviewProviderAttribute` in `Inno.Editor.Shaders`. Read the [shared contract](../../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-38ee86e254ac59f3) | Method |
| [`contractId`](#api-1a29a7c07f6c72ed) | Property |

## Type declaration

<a id="api-e11c53e0bc4d5178"></a>
<!-- api: T:Inno.Editor.Shaders.ShaderPreviewProviderAttribute 8106a2ae83678cea9fcf60a3bb7a02e0c26ad5fdcfcf0dbc658d937df8df0fb7 -->

```csharp
public sealed class Inno.Editor.Shaders.ShaderPreviewProviderAttribute : System.Attribute
```

Associates a reloadable preview implementation with one open Shader contract.

**Parameter `contractId`:** Non-empty domain-owned contract identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L17).

## `#ctor`

<a id="api-38ee86e254ac59f3"></a>
<!-- api: M:Inno.Editor.Shaders.ShaderPreviewProviderAttribute.#ctor(System.String) ad3da8bc12d35ca8c80bc2ac0c7c4199e662e495fa7e1cf654cf13c549fc676a -->

```csharp
public Inno.Editor.Shaders.ShaderPreviewProviderAttribute.ShaderPreviewProviderAttribute(string contractId)
```

Associates a reloadable preview implementation with one open Shader contract.

**Parameter `contractId`:** Non-empty domain-owned contract identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L17).

## `contractId`

<a id="api-1a29a7c07f6c72ed"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderPreviewProviderAttribute.contractId 2328ae5fedf74d182f11a281cad8755f34fab7946806ab1cd9dba428b5ce082d -->

```csharp
public string Inno.Editor.Shaders.ShaderPreviewProviderAttribute.contractId { get; }
```

Gets the non-empty Shader contract consumed by this preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L22).
