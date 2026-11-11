---
title: "StaticSerializationMetadataSource"
description: "Reference for StaticSerializationMetadataSource in Inno.Core.Serialization."
uid: api.inno.core.serialization.1fcf78be948e81d4
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `StaticSerializationMetadataSource`

This reference describes `StaticSerializationMetadataSource` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializationMetadataSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-67d98027decd9f44) | Method |
| [`GetMetadata`](#api-a49866863c36222e) | Method |

## Type declaration

<a id="api-1fcf78be948e81d4"></a>
<!-- api: T:Inno.Core.Serialization.StaticSerializationMetadataSource ba01c6ec0b159a1581970cc26c5f75f196b22835cfdb36b46deb65ca2c3c7242 -->

```csharp
public sealed class Inno.Core.Serialization.StaticSerializationMetadataSource : Inno.Core.Serialization.ISerializationMetadataSource
```

Resolves exact serialization shapes from explicit generated contributions without reflection fallback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/StaticSerializationMetadataSource.cs#L9).

## `#ctor`

<a id="api-67d98027decd9f44"></a>
<!-- api: M:Inno.Core.Serialization.StaticSerializationMetadataSource.#ctor(System.Collections.Generic.IReadOnlyList{System.Action{System.Action{Inno.Core.Serialization.SerializationTypeMetadata}}}) 0d6f8350da8a220813466e8877cebc8cbab25d9ddad016d3399c4848b954e38c -->

```csharp
public Inno.Core.Serialization.StaticSerializationMetadataSource.StaticSerializationMetadataSource(System.Collections.Generic.IReadOnlyList<System.Action<System.Action<Inno.Core.Serialization.SerializationTypeMetadata>>> catalogs)
```

Freezes generated declaration contributions supplied by the Player composition.

**Parameter `catalogs`:** Assembly-local registration methods; delegates are released after construction.

**Throws `System.ArgumentException`:** A registration is null or two assemblies disagree about a closed shape.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/StaticSerializationMetadataSource.cs#L22).

## `GetMetadata`

<a id="api-a49866863c36222e"></a>
<!-- api: M:Inno.Core.Serialization.StaticSerializationMetadataSource.GetMetadata(System.Type) 0ff57ea88adb6b36c761066ddd69bb1cb21c9da04b45164733ee4e0fcedcb92c -->

```csharp
public Inno.Core.Serialization.SerializationTypeMetadata Inno.Core.Serialization.StaticSerializationMetadataSource.GetMetadata(System.Type type)
```

Resolves a complete serialization shape for the current declaration.

**Parameter `type`:** The exact closed declaration, including its generic arguments.

**Returns:** Immutable access metadata; an unsupported declaration throws instead of probing another provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/StaticSerializationMetadataSource.cs#L33).
