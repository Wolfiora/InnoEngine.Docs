---
title: "PropertyVisibility"
description: "Reference for PropertyVisibility in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.f239cf4cb47803b1
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `PropertyVisibility`

This reference describes `PropertyVisibility` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Deserialize`](#api-908cf26745ffe61b) | Field |
| [`DeserializeOnly`](#api-69d3bade9e6dcb3d) | Field |
| [`Hide`](#api-a791f07c4b35df8b) | Field |
| [`None`](#api-94379b58ff9dee70) | Field |
| [`Readonly`](#api-e602ade9ba2054a4) | Field |
| [`RuntimeGet`](#api-ef5be6351754f322) | Field |
| [`RuntimeSet`](#api-94b6077a568965fa) | Field |
| [`Serialize`](#api-d6f90f80915e2afd) | Field |
| [`SerializeOnly`](#api-2b29ae7c317822ad) | Field |
| [`Show`](#api-25e8f360f302a5dd) | Field |
| [`Transient`](#api-2657c98a25633ef6) | Field |

## Type declaration

<a id="api-f239cf4cb47803b1"></a>
<!-- api: T:InnoEngine.Serialization.PropertyVisibility e05492c54078fd798202fbbb4252181f91a67eb99667b576e6b4572b80bf9ffb -->

```csharp
public enum InnoEngine.Serialization.PropertyVisibility : int
```

Defines member participation rules for persistence and runtime access.

**Constraints:** This is a flag enum. Prefer the named presets (`InnoEngine.Serialization.PropertyVisibility.Show`, `InnoEngine.Serialization.PropertyVisibility.Hide`, `InnoEngine.Serialization.PropertyVisibility.Readonly`,
`InnoEngine.Serialization.PropertyVisibility.Transient`, `InnoEngine.Serialization.PropertyVisibility.SerializeOnly`, `InnoEngine.Serialization.PropertyVisibility.DeserializeOnly`) for common configurations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L13).

## `Deserialize`

<a id="api-908cf26745ffe61b"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.Deserialize 980f8420f43ddf0e7cb3de7c0d0f4c569ecf9b743183b50b53f5caf42e7737cf -->

```csharp
InnoEngine.Serialization.PropertyVisibility.Deserialize = 2
```

Participates in deserialization (restore/read).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L28).

## `DeserializeOnly`

<a id="api-69d3bade9e6dcb3d"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.DeserializeOnly c3220c7ec20218f7cb3860ad4eae01ad5c391d863e416f3ae00ded5150b9d2c5 -->

```csharp
InnoEngine.Serialization.PropertyVisibility.DeserializeOnly = 14
```

Participates in deserialization only (no serialization), runtime can get/set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L69).

## `Hide`

<a id="api-a791f07c4b35df8b"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.Hide 7e1ddb6a0a559f4f3666fc01d7c31be695ed6b950c8e558c3a6d70529d8bf4a6 -->

```csharp
InnoEngine.Serialization.PropertyVisibility.Hide = 3
```

Can serialize and deserialize, but runtime code cannot get or set through `InnoEngine.Serialization.SerializedProperty`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L48).

## `None`

<a id="api-94379b58ff9dee70"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.None 0c084214e6a44b58ea0b9c00096c3112fe8a73289f7a7e141ea85745ac40f7e1 -->

```csharp
InnoEngine.Serialization.PropertyVisibility.None = 0
```

No participation in serialization, deserialization, or runtime access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L18).

## `Readonly`

<a id="api-e602ade9ba2054a4"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.Readonly d32965c8be659c4be8b953c3fa9808fd400a7269a963bd14b23f18a822d4f488 -->

```csharp
InnoEngine.Serialization.PropertyVisibility.Readonly = 7
```

Can serialize and deserialize, runtime can get but cannot set.
Runtime set attempts should be rejected (see `InnoEngine.Serialization.SerializedProperty.SetValue(System.Object)` behavior).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L54).

## `RuntimeGet`

<a id="api-ef5be6351754f322"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.RuntimeGet 9ca169f78b7f72f3e11666d8e5001f1ef578e4146d6357ce94baee11c7222f2c -->

```csharp
InnoEngine.Serialization.PropertyVisibility.RuntimeGet = 4
```

Allows runtime retrieval through the `InnoEngine.Serialization.SerializedProperty` API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L33).

## `RuntimeSet`

<a id="api-94b6077a568965fa"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.RuntimeSet e3de18db944e083727083312929306b393a905c7f37f45dbd69658388dba54e3 -->

```csharp
InnoEngine.Serialization.PropertyVisibility.RuntimeSet = 8
```

Allows runtime assignment through the `InnoEngine.Serialization.SerializedProperty` API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L38).

## `Serialize`

<a id="api-d6f90f80915e2afd"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.Serialize 57fca4a8db9cea5ccc1c299ed6665f64b6f80f6e8abaf7e4e879903d9821e68c -->

```csharp
InnoEngine.Serialization.PropertyVisibility.Serialize = 1
```

Participates in serialization output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L23).

## `SerializeOnly`

<a id="api-2b29ae7c317822ad"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.SerializeOnly 2ad767eb66f0cb64e953083e860a9d962165172f085c9efaca9f006be573212c -->

```csharp
InnoEngine.Serialization.PropertyVisibility.SerializeOnly = 13
```

Participates in serialization only (no deserialization), runtime can get/set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L64).

## `Show`

<a id="api-25e8f360f302a5dd"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.Show d4d3bdc0c8fbc094a2f79b56f2986af406d8ecfa1d69667638971f700a5eb910 -->

```csharp
InnoEngine.Serialization.PropertyVisibility.Show = 15
```

Can serialize, deserialize, and allow runtime get/set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L43).

## `Transient`

<a id="api-2657c98a25633ef6"></a>
<!-- api: F:InnoEngine.Serialization.PropertyVisibility.Transient 595a934a3a3ed4575f93f2ad18cd8c951b9a4118c190c000ad4a546fe8e6e56e -->

```csharp
InnoEngine.Serialization.PropertyVisibility.Transient = 12
```

Does not participate in serialization or deserialization, but runtime can get/set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/PropertyVisibility.cs#L59).
