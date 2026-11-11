---
title: "SerializationPropertyRestoreResult"
description: "Reference for SerializationPropertyRestoreResult in Inno.Core.Serialization."
uid: api.inno.core.serialization.5af8a2ab5b6699b0
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationPropertyRestoreResult`

This reference describes `SerializationPropertyRestoreResult` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`failures`](#api-4e72807249a46bb8) | Property |
| [`ignoredCount`](#api-b218eb1f93da0741) | Property |
| [`restoredCount`](#api-2701b40425df87e9) | Property |
| [`success`](#api-b09d8c69cb6475bd) | Property |

## Type declaration

<a id="api-5af8a2ab5b6699b0"></a>
<!-- api: T:Inno.Core.Serialization.SerializationPropertyRestoreResult f6a99c470fdfb6d71947fc0567d00401e349f9bd433e1968b7dcff66b680fb12 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationPropertyRestoreResult
```

Summarizes an independently captured property restore operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreResult.cs#L8).

## `failures`

<a id="api-4e72807249a46bb8"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertyRestoreResult.failures 5ca0b1b409cdd876df19b8b1b655e62cb6714fa4e174d55f79c50509912c5d50 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializationPropertyRestoreFailure> Inno.Core.Serialization.SerializationPropertyRestoreResult.failures { get; }
```

Gets properties skipped because their previous data was incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreResult.cs#L33).

## `ignoredCount`

<a id="api-b218eb1f93da0741"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertyRestoreResult.ignoredCount 433340c05d31eb4f58d3668748cbf4010c256f03868909eca3def4c9dcf837cd -->

```csharp
public int Inno.Core.Serialization.SerializationPropertyRestoreResult.ignoredCount { get; }
```

Gets the number of removed or non-deserializable properties ignored by schema matching.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreResult.cs#L28).

## `restoredCount`

<a id="api-2701b40425df87e9"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertyRestoreResult.restoredCount afa7fd007114250d17a3365e172a0b34750052c8a3d3bef761dc8e188072e781 -->

```csharp
public int Inno.Core.Serialization.SerializationPropertyRestoreResult.restoredCount { get; }
```

Gets the number of properties successfully restored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreResult.cs#L23).

## `success`

<a id="api-b09d8c69cb6475bd"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertyRestoreResult.success 880ae61d7667a2b844b189126e2abac8dc0391cf1d6e0e526923ee050a92d427 -->

```csharp
public bool Inno.Core.Serialization.SerializationPropertyRestoreResult.success { get; }
```

Gets whether every matching property was restored successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreResult.cs#L38).
