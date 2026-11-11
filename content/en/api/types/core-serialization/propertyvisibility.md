---
title: "PropertyVisibility"
description: "Reference for PropertyVisibility in Inno.Core.Serialization."
uid: api.inno.core.serialization.3c81aa3af425f240
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `PropertyVisibility`

This reference describes `PropertyVisibility` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Deserialize`](#api-7723ebed8c34fe6d) | Field |
| [`DeserializeOnly`](#api-1c16044e68c1cfda) | Field |
| [`Hide`](#api-e80a773076a47fc6) | Field |
| [`None`](#api-9d8577197199382c) | Field |
| [`Readonly`](#api-647d6a5a0d983848) | Field |
| [`RuntimeGet`](#api-bad46a449fef09a3) | Field |
| [`RuntimeSet`](#api-4f980081668617b5) | Field |
| [`Serialize`](#api-98b7a5d314f417fe) | Field |
| [`SerializeOnly`](#api-4903d78a6db8e14f) | Field |
| [`Show`](#api-6fc8c291836f188f) | Field |
| [`Transient`](#api-b9fc50382d707d72) | Field |

## Type declaration

<a id="api-3c81aa3af425f240"></a>
<!-- api: T:Inno.Core.Serialization.PropertyVisibility 84c2172ec524d0df0c616a6eb2eace6ebc87c381c441a7413ad4dca202b3751c -->

```csharp
public enum Inno.Core.Serialization.PropertyVisibility : int
```

Defines member participation rules for persistence and runtime access.

**Constraints:** This is a flag enum. Prefer the named presets (`Inno.Core.Serialization.PropertyVisibility.Show`, `Inno.Core.Serialization.PropertyVisibility.Hide`, `Inno.Core.Serialization.PropertyVisibility.Readonly`,
`Inno.Core.Serialization.PropertyVisibility.Transient`, `Inno.Core.Serialization.PropertyVisibility.SerializeOnly`, `Inno.Core.Serialization.PropertyVisibility.DeserializeOnly`) for common configurations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L13).

## `Deserialize`

<a id="api-7723ebed8c34fe6d"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.Deserialize 77d07731d8c90799a73c6828ee58ef213336269652a66d90a0e35f6b23cdaa4f -->

```csharp
Inno.Core.Serialization.PropertyVisibility.Deserialize = 2
```

Participates in deserialization (restore/read).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L28).

## `DeserializeOnly`

<a id="api-1c16044e68c1cfda"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.DeserializeOnly 1022e9ad15fa93472d74e9aaed9b93735958f820f865eed14ff8cff85efddecf -->

```csharp
Inno.Core.Serialization.PropertyVisibility.DeserializeOnly = Inno.Core.Serialization.PropertyVisibility.Deserialize | Inno.Core.Serialization.PropertyVisibility.Transient
```

Participates in deserialization only (no serialization), runtime can get/set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L69).

## `Hide`

<a id="api-e80a773076a47fc6"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.Hide 2e8a5143c006221418cb894fbcb2340ff2e0b09a13b2485d508f7b25d00006e3 -->

```csharp
Inno.Core.Serialization.PropertyVisibility.Hide = Inno.Core.Serialization.PropertyVisibility.Serialize | Inno.Core.Serialization.PropertyVisibility.Deserialize
```

Can serialize and deserialize, but runtime code cannot get or set through `Inno.Core.Serialization.SerializedProperty`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L48).

## `None`

<a id="api-9d8577197199382c"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.None fa994c3b8abc935832e1cf90e7dc53d6d28d0aa6cd2edfa375937c0ff5c92532 -->

```csharp
Inno.Core.Serialization.PropertyVisibility.None = 0
```

No participation in serialization, deserialization, or runtime access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L18).

## `Readonly`

<a id="api-647d6a5a0d983848"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.Readonly cf7ae80eeb167ce7232e3fa0b33238ae6060bfac2f830be4d317b128e58b5a59 -->

```csharp
Inno.Core.Serialization.PropertyVisibility.Readonly = Inno.Core.Serialization.PropertyVisibility.Hide | Inno.Core.Serialization.PropertyVisibility.RuntimeGet
```

Can serialize and deserialize, runtime can get but cannot set.
Runtime set attempts should be rejected (see `Inno.Core.Serialization.SerializedProperty.SetValue(System.Object)` behavior).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L54).

## `RuntimeGet`

<a id="api-bad46a449fef09a3"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.RuntimeGet de702d525993187d5abdbf40c56abfc7ef2ec60097d804f795a79bcd608312b9 -->

```csharp
Inno.Core.Serialization.PropertyVisibility.RuntimeGet = 4
```

Allows runtime retrieval through the `Inno.Core.Serialization.SerializedProperty` API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L33).

## `RuntimeSet`

<a id="api-4f980081668617b5"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.RuntimeSet a725699684f6dd0fe5659f32380bd2d5d37d3588f42e7e02940e4e839f7f9412 -->

```csharp
Inno.Core.Serialization.PropertyVisibility.RuntimeSet = 8
```

Allows runtime assignment through the `Inno.Core.Serialization.SerializedProperty` API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L38).

## `Serialize`

<a id="api-98b7a5d314f417fe"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.Serialize c5a1807286179a973565b4de82c4c71b0eed82a322717203dfbed25ec30dac79 -->

```csharp
Inno.Core.Serialization.PropertyVisibility.Serialize = 1
```

Participates in serialization output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L23).

## `SerializeOnly`

<a id="api-4903d78a6db8e14f"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.SerializeOnly 3d8634535169d906923dbc319aa5ad5431fc72a9702654a8cbc4d5c429e35855 -->

```csharp
Inno.Core.Serialization.PropertyVisibility.SerializeOnly = Inno.Core.Serialization.PropertyVisibility.Serialize | Inno.Core.Serialization.PropertyVisibility.Transient
```

Participates in serialization only (no deserialization), runtime can get/set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L64).

## `Show`

<a id="api-6fc8c291836f188f"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.Show b51615088e1980cb3d6045d9a51265f1841729935653d789e04313b9f38fa51c -->

```csharp
Inno.Core.Serialization.PropertyVisibility.Show = Inno.Core.Serialization.PropertyVisibility.Serialize | Inno.Core.Serialization.PropertyVisibility.DeserializeOnly
```

Can serialize, deserialize, and allow runtime get/set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L43).

## `Transient`

<a id="api-b9fc50382d707d72"></a>
<!-- api: F:Inno.Core.Serialization.PropertyVisibility.Transient 2f0b611d29819770c53d7e03980367f5c6ed09de679ccfa3b3a0a0acfb43ec40 -->

```csharp
Inno.Core.Serialization.PropertyVisibility.Transient = Inno.Core.Serialization.PropertyVisibility.RuntimeGet | Inno.Core.Serialization.PropertyVisibility.RuntimeSet
```

Does not participate in serialization or deserialization, but runtime can get/set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L59).
