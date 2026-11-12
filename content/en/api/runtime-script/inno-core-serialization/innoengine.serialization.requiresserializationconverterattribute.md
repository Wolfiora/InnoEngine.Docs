---
title: "RequiresSerializationConverterAttribute"
description: "Reference for RequiresSerializationConverterAttribute in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.25d536a27e3a3d20
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `RequiresSerializationConverterAttribute`

This reference describes `RequiresSerializationConverterAttribute` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0e7f8fa86a80733d) | Method |

## Type declaration

<a id="api-25d536a27e3a3d20"></a>
<!-- api: T:InnoEngine.Serialization.RequiresSerializationConverterAttribute f18ea46d4a118b37f6ae425cd3a6d005282359413a7a5791181228029ca2b7d5 -->

```csharp
public sealed class InnoEngine.Serialization.RequiresSerializationConverterAttribute : System.Attribute
```

Requires a serializable type to use an explicitly discovered converter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/RequiresSerializationConverterAttribute.cs#L9).

## `#ctor`

<a id="api-0e7f8fa86a80733d"></a>
<!-- api: M:InnoEngine.Serialization.RequiresSerializationConverterAttribute.#ctor 0aafec54571be622a9a4f1dbcab9b6b73977f739967c4a79b5d77a8dcdf8b9ff -->

```csharp
public InnoEngine.Serialization.RequiresSerializationConverterAttribute.RequiresSerializationConverterAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/RequiresSerializationConverterAttribute.cs#L9).
