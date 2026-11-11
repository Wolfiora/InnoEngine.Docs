---
title: "ReflectionSerializationMetadataSource"
description: "Reference for ReflectionSerializationMetadataSource in Inno.Adapter.Serialization.DotNet."
uid: api.inno.adapter.serialization.dotnet.556fca6b315e8257
kind: api
owners:
  - Inno.Adapter.Serialization.DotNet
apiSurface: source-clr
contracts:
  - project.inno-adapter-serialization-dotnet#dynamic-metadata-contract
---
# `ReflectionSerializationMetadataSource`

This reference describes `ReflectionSerializationMetadataSource` in `Inno.Adapter.Serialization.DotNet`. Read the [shared contract](../../projects/inno-adapter-serialization-dotnet.md#dynamic-metadata-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializationMetadataSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8391889e4c2aac48) | Method |
| [`GetMetadata`](#api-1c221ab1a4e02d70) | Method |

## Type declaration

<a id="api-556fca6b315e8257"></a>
<!-- api: T:Inno.Adapter.Serialization.DotNet.ReflectionSerializationMetadataSource bbf64c98a309adde145bc285cb71a3494107e3bbc46236000af761e5d484a0f7 -->

```csharp
public sealed class Inno.Adapter.Serialization.DotNet.ReflectionSerializationMetadataSource : Inno.Core.Serialization.ISerializationMetadataSource
```

Supplies desktop authoring member access through weakly cached runtime reflection metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/backends/DotNet/runtime/Inno.Adapter.Serialization.DotNet/ReflectionSerializationMetadataSource.cs#L13).

## `#ctor`

<a id="api-8391889e4c2aac48"></a>
<!-- api: M:Inno.Adapter.Serialization.DotNet.ReflectionSerializationMetadataSource.#ctor 4fb1880451a4de96fa1618384f56b7cb660d78f677c9a1bf9cc10d6ef620f28f -->

```csharp
public Inno.Adapter.Serialization.DotNet.ReflectionSerializationMetadataSource.ReflectionSerializationMetadataSource()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/backends/DotNet/runtime/Inno.Adapter.Serialization.DotNet/ReflectionSerializationMetadataSource.cs#L13).

## `GetMetadata`

<a id="api-1c221ab1a4e02d70"></a>
<!-- api: M:Inno.Adapter.Serialization.DotNet.ReflectionSerializationMetadataSource.GetMetadata(System.Type) a0a6ec0840bc7fa9fd6f0a326b0d8b46be38c2630dbda492a0fd3e0c6f83cb54 -->

```csharp
public Inno.Core.Serialization.SerializationTypeMetadata Inno.Adapter.Serialization.DotNet.ReflectionSerializationMetadataSource.GetMetadata(System.Type type)
```

Resolves a complete serialization shape for the current declaration.

**Parameter `type`:** The exact closed declaration, including its generic arguments.

**Returns:** Immutable access metadata; an unsupported declaration throws instead of probing another provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/backends/DotNet/runtime/Inno.Adapter.Serialization.DotNet/ReflectionSerializationMetadataSource.cs#L18).
