---
title: "SerializationPropertyRestoreMode"
description: "Reference for SerializationPropertyRestoreMode in Inno.Core.Serialization."
uid: api.inno.core.serialization.b2943ce188a12723
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationPropertyRestoreMode`

This reference describes `SerializationPropertyRestoreMode` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`CollectFailures`](#api-55dbb29725179fc0) | Field |
| [`Strict`](#api-68c62e4ea7f49767) | Field |

## Type declaration

<a id="api-b2943ce188a12723"></a>
<!-- api: T:Inno.Core.Serialization.SerializationPropertyRestoreMode 95329d1e0f3a73ef04318bd453bed834b5ef0dfa248a6220bf3c50312c18b2ae -->

```csharp
public enum Inno.Core.Serialization.SerializationPropertyRestoreMode : int
```

Defines how independently captured serialized properties handle restore failures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreMode.cs#L6).

## `CollectFailures`

<a id="api-55dbb29725179fc0"></a>
<!-- api: F:Inno.Core.Serialization.SerializationPropertyRestoreMode.CollectFailures 96bb7b8a5e23f0767729ae4d3d87758ad18f1724c1fcbe520d9615c50af49c4e -->

```csharp
Inno.Core.Serialization.SerializationPropertyRestoreMode.CollectFailures = 1
```

Continues restoring independent properties and reports every rejected value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreMode.cs#L16).

## `Strict`

<a id="api-68c62e4ea7f49767"></a>
<!-- api: F:Inno.Core.Serialization.SerializationPropertyRestoreMode.Strict f595cd2c2ccbc004ceec54594ebdcd29a615532245af2b007c6797cb4d4c77c7 -->

```csharp
Inno.Core.Serialization.SerializationPropertyRestoreMode.Strict = 0
```

Stops at the first property that cannot be restored into the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreMode.cs#L11).
