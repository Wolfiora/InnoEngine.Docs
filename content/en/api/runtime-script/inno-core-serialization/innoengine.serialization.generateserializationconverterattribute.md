---
title: "GenerateSerializationConverterAttribute"
description: "Reference for GenerateSerializationConverterAttribute in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.9ae87b269132ef77
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `GenerateSerializationConverterAttribute`

This reference describes `GenerateSerializationConverterAttribute` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-085696472f45878d) | Method |

## Type declaration

<a id="api-9ae87b269132ef77"></a>
<!-- api: T:InnoEngine.Serialization.GenerateSerializationConverterAttribute cf3cda63487d1efb1bb467da2836f8232e650cbbfeb7a5636a11a753fc47b308 -->

```csharp
public sealed class InnoEngine.Serialization.GenerateSerializationConverterAttribute : System.Attribute
```

Requests a compile-time serialization converter for a closed data-transfer type.

**Constraints:** The annotated type must implement `InnoEngine.Serialization.ISerializable`, expose a constructor that generated
code can invoke, and use `InnoEngine.Serialization.SerializablePropertyAttribute` on every persisted member.
Types with polymorphic identity, reference graphs, or custom restoration invariants must use an
explicit converter instead.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/GenerateSerializationConverterAttribute.cs#L15).

## `#ctor`

<a id="api-085696472f45878d"></a>
<!-- api: M:InnoEngine.Serialization.GenerateSerializationConverterAttribute.#ctor e162f97f6e626864913e88f51ea375d50669cc6315e51143bd081e939c3ebaed -->

```csharp
public InnoEngine.Serialization.GenerateSerializationConverterAttribute.GenerateSerializationConverterAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/GenerateSerializationConverterAttribute.cs#L15).
