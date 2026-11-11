---
title: "SerializedIdentityRemapper"
description: "Reference for SerializedIdentityRemapper in Inno.Core.Serialization."
uid: api.inno.core.serialization.ab5f74e47b8b9dbb
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializedIdentityRemapper`

This reference describes `SerializedIdentityRemapper` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Rewrite`](#api-bfdfadfe0cd92669) | Method |

## Type declaration

<a id="api-ab5f74e47b8b9dbb"></a>
<!-- api: T:Inno.Core.Serialization.SerializedIdentityRemapper a705d9e1cf6acde439d4ed1ae60d47596f6c12bcf1889cd0b4fd23e393f42833 -->

```csharp
public static class Inno.Core.Serialization.SerializedIdentityRemapper
```

Rewrites selected scalar identities in a serialized value and its nested serialized payloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializedIdentityRemapper.cs#L11).

## `Rewrite`

<a id="api-bfdfadfe0cd92669"></a>
<!-- api: M:Inno.Core.Serialization.SerializedIdentityRemapper.Rewrite(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyDictionary{System.Guid,System.Guid},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) ab3ab2224970e740ae93f1d0e66523f5d1a69550c16ede7955c89bef617ad5b6 -->

```csharp
public static byte[] Inno.Core.Serialization.SerializedIdentityRemapper.Rewrite(System.ReadOnlySpan<byte> source, System.Collections.Generic.IReadOnlyDictionary<System.Guid, System.Guid> identities, System.Collections.Generic.IReadOnlyDictionary<string, string>? paths = null)
```

Replaces exact Guid and string values while retaining the binary serialization structure.

**Parameter `source`:** A complete serialized value or property snapshot.

**Parameter `identities`:** Old to new Guid values.

**Parameter `paths`:** Optional exact old to new string values.

**Returns:** A detached rewritten payload; unknown binary subvalues remain unchanged.

**Throws `System.IO.InvalidDataException`:** The recognized serialized format is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializedIdentityRemapper.cs#L34).
