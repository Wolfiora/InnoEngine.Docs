---
title: "SerializationPropertyRestoreFailure"
description: "Reference for SerializationPropertyRestoreFailure in Inno.Core.Serialization."
uid: api.inno.core.serialization.f791e086bc6228d5
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationPropertyRestoreFailure`

This reference describes `SerializationPropertyRestoreFailure` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`currentPropertyType`](#api-b871a4144ca1898c) | Property |
| [`message`](#api-9a448ae3888e0dda) | Property |
| [`name`](#api-fef7f6d48804f5b9) | Property |
| [`previousPropertyType`](#api-1225a0cad0e85ae8) | Property |

## Type declaration

<a id="api-f791e086bc6228d5"></a>
<!-- api: T:Inno.Core.Serialization.SerializationPropertyRestoreFailure fd35050b15865eb97a29868ed562031737341cabed36976609f670adde3f8a30 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationPropertyRestoreFailure
```

Describes one property skipped during a compatible property restore.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreFailure.cs#L8).

## `currentPropertyType`

<a id="api-b871a4144ca1898c"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertyRestoreFailure.currentPropertyType 37cf00b9a2dc7a81c187d5ecd07a15ec0f7c6284bd94a36941cf0747f469d168 -->

```csharp
public System.Type Inno.Core.Serialization.SerializationPropertyRestoreFailure.currentPropertyType { get; }
```

Gets the current target member type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreFailure.cs#L35).

## `message`

<a id="api-9a448ae3888e0dda"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertyRestoreFailure.message 0ed4827c186ee126e561540c4dae76595ac9f0e45253f97efdb60d811ac4708c -->

```csharp
public string Inno.Core.Serialization.SerializationPropertyRestoreFailure.message { get; }
```

Gets the underlying compatibility failure message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreFailure.cs#L40).

## `name`

<a id="api-fef7f6d48804f5b9"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertyRestoreFailure.name 4681bb3f6b97c9c83980718ad1b75048e83fa80b3a95d54a1383223d710ebcf4 -->

```csharp
public string Inno.Core.Serialization.SerializationPropertyRestoreFailure.name { get; }
```

Gets the serialized member key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreFailure.cs#L25).

## `previousPropertyType`

<a id="api-1225a0cad0e85ae8"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertyRestoreFailure.previousPropertyType 0f39fd84c27087fce43ef6fb920402289c13f7e1507c1a3b19c6a7d6d9371d52 -->

```csharp
public System.Type Inno.Core.Serialization.SerializationPropertyRestoreFailure.previousPropertyType { get; }
```

Gets the type used to capture the previous value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertyRestoreFailure.cs#L30).
