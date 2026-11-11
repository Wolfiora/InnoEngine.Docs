---
title: "OnSerializableRestored"
description: "Reference for OnSerializableRestored in Inno.Core.Serialization."
uid: api.inno.core.serialization.92cbb79273dcda20
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `OnSerializableRestored`

This reference describes `OnSerializableRestored` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2430dbbbdc08844b) | Method |

## Type declaration

<a id="api-92cbb79273dcda20"></a>
<!-- api: T:Inno.Core.Serialization.OnSerializableRestored ab12df828b83d61d7dfcc5e4e6146fc40a87da529e8f47bbeed605a5ae0ffbab -->

```csharp
public sealed class Inno.Core.Serialization.OnSerializableRestored : System.Attribute
```

Marks one nonvirtual instance method to run after restoration succeeds, optionally receiving its SerializationContext.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Attributes/OnSerializableRestored.cs#L9).

## `#ctor`

<a id="api-2430dbbbdc08844b"></a>
<!-- api: M:Inno.Core.Serialization.OnSerializableRestored.#ctor 21a62774cd642749f14b08c9a42ba12adbb1498977f67e029903905dbc36fcab -->

```csharp
public Inno.Core.Serialization.OnSerializableRestored.OnSerializableRestored()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Attributes/OnSerializableRestored.cs#L9).
