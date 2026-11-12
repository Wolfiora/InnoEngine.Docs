---
title: "ISerializable"
description: "Reference for ISerializable in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.ada592a2bc25428a
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `ISerializable`

This reference describes `ISerializable` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Type declaration

<a id="api-ada592a2bc25428a"></a>
<!-- api: T:InnoEngine.Serialization.ISerializable af9af627da3773d7304934edb777ff1276eb6cf98e9b0dec9215179819d6a014 -->

```csharp
public interface InnoEngine.Serialization.ISerializable
```

Marks a reference type whose annotated properties can participate in property-based serialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Contracts/ISerializable.cs#L6).
