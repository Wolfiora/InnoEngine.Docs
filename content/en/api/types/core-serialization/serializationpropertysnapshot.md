---
title: "SerializationPropertySnapshot"
description: "Reference for SerializationPropertySnapshot in Inno.Core.Serialization."
uid: api.inno.core.serialization.60310733297dccbd
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationPropertySnapshot`

This reference describes `SerializationPropertySnapshot` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`data`](#api-94a07b344cd52a84) | Property |
| [`name`](#api-1aea42f283eade2d) | Property |
| [`propertyType`](#api-b48bf524e5c776e5) | Property |

## Type declaration

<a id="api-60310733297dccbd"></a>
<!-- api: T:Inno.Core.Serialization.SerializationPropertySnapshot 343f4d701fcffae6282b1af105d094929feb6220ce611577c93e0218aa83af60 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationPropertySnapshot
```

Stores one independently encoded serializable property and its original declared type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertySnapshot.cs#L8).

## `data`

<a id="api-94a07b344cd52a84"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertySnapshot.data bfc765dcc156759d69d5d41ef1c7d970bca52b89cd4c2860325651ae504c17c3 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Core.Serialization.SerializationPropertySnapshot.data { get; }
```

Gets the independently encoded property data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertySnapshot.cs#L35).

## `name`

<a id="api-1aea42f283eade2d"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertySnapshot.name f249a9f256a9352dc7c714ef1550b48c97bf8a381137f597944bb496c6d2118f -->

```csharp
public string Inno.Core.Serialization.SerializationPropertySnapshot.name { get; }
```

Gets the serialized member key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertySnapshot.cs#L25).

## `propertyType`

<a id="api-b48bf524e5c776e5"></a>
<!-- api: P:Inno.Core.Serialization.SerializationPropertySnapshot.propertyType b1139504acfa6f60763ae8bc736166163cde3e7740ddbcdc8d98c130b02f10ba -->

```csharp
public System.Type Inno.Core.Serialization.SerializationPropertySnapshot.propertyType { get; }
```

Gets the declared property type used when the value was captured.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/PropertyRestoration/SerializationPropertySnapshot.cs#L30).
