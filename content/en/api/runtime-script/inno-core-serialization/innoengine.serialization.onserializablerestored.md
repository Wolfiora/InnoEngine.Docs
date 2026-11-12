---
title: "OnSerializableRestored"
description: "Reference for OnSerializableRestored in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.4cc3cbb911a42b44
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `OnSerializableRestored`

This reference describes `OnSerializableRestored` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-43b4fab337e380f1) | Method |

## Type declaration

<a id="api-4cc3cbb911a42b44"></a>
<!-- api: T:InnoEngine.Serialization.OnSerializableRestored c8f88b5f157adffed37eb54b090fa0c231b905d94aefcae94cf8f9ec3b6d458d -->

```csharp
public sealed class InnoEngine.Serialization.OnSerializableRestored : System.Attribute
```

Marks one nonvirtual instance method to run after restoration succeeds, optionally receiving its SerializationContext.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/OnSerializableRestored.cs#L9).

## `#ctor`

<a id="api-43b4fab337e380f1"></a>
<!-- api: M:InnoEngine.Serialization.OnSerializableRestored.#ctor f77b3805a83b1d7039868626a65b2eb601a067fc0f09e2cc1a5304b019579902 -->

```csharp
public InnoEngine.Serialization.OnSerializableRestored.OnSerializableRestored()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/OnSerializableRestored.cs#L9).
