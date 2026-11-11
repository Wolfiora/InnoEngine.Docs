---
title: "ISerializationMetadataSource"
description: "Reference for ISerializationMetadataSource in Inno.Core.Serialization."
uid: api.inno.core.serialization.ce5500d26cc2e970
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `ISerializationMetadataSource`

This reference describes `ISerializationMetadataSource` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`GetMetadata`](#api-d9c4551a4752e1ba) | Method |

## Type declaration

<a id="api-ce5500d26cc2e970"></a>
<!-- api: T:Inno.Core.Serialization.ISerializationMetadataSource 8ba6cdf5ba31d1f2ee3ccfcea4dbcdcfdb4117dd96f491fc22f01c465a176e4c -->

```csharp
public interface Inno.Core.Serialization.ISerializationMetadataSource
```

Supplies declaration access and construction without choosing a runtime reflection implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/ISerializationMetadataSource.cs#L8).

## `GetMetadata`

<a id="api-d9c4551a4752e1ba"></a>
<!-- api: M:Inno.Core.Serialization.ISerializationMetadataSource.GetMetadata(System.Type) 55876bc6f85adb2fbf968adaa7be19d4fbafb8144f7291d4fbbd81c790d8a7be -->

```csharp
Inno.Core.Serialization.SerializationTypeMetadata Inno.Core.Serialization.ISerializationMetadataSource.GetMetadata(System.Type type)
```

Resolves a complete serialization shape for the current declaration.

**Parameter `type`:** The exact closed declaration, including its generic arguments.

**Returns:** Immutable access metadata; an unsupported declaration throws instead of probing another provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/ISerializationMetadataSource.cs#L19).
