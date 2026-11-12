---
title: "SerializedProperty"
description: "Reference for SerializedProperty in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.0cc1ee8c0bbf1608
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `SerializedProperty`

This reference describes `SerializedProperty` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-287384aa7ac3f777) | Method |
| [`GetValue`](#api-7a8330ce45e4eeea) | Method |
| [`SetValue`](#api-2c81a9e7e834674d) | Method |
| [`canRead`](#api-17f61483580452fd) | Property |
| [`canWrite`](#api-f2c510ea8067817e) | Property |
| [`name`](#api-64294d2b13f5fbed) | Property |
| [`propertyType`](#api-338ba61321548447) | Property |
| [`visibility`](#api-fbcfea1250443e8a) | Property |

## Type declaration

<a id="api-0cc1ee8c0bbf1608"></a>
<!-- api: T:InnoEngine.Serialization.SerializedProperty 46e166ed4afbe97f99b4a8269f97f6d8450351556e8a55619f6995227b04e3b1 -->

```csharp
public sealed class InnoEngine.Serialization.SerializedProperty
```

Represents a discoverable property in editor and persistence workflows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L8).

## `#ctor`

<a id="api-287384aa7ac3f777"></a>
<!-- api: M:InnoEngine.Serialization.SerializedProperty.#ctor 62260d8d70f1976dd659c8f9c406574b5585a7421d7d35a5847bf13fba8e009a -->

```csharp
public InnoEngine.Serialization.SerializedProperty.SerializedProperty()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L8).

## `GetValue`

<a id="api-7a8330ce45e4eeea"></a>
<!-- api: M:InnoEngine.Serialization.SerializedProperty.GetValue 1da2b0fdf8ff30aeafabaee770701ec84e2c3669f577a77cf055272350186836 -->

```csharp
public object? InnoEngine.Serialization.SerializedProperty.GetValue()
```

Gets the current value.

**Returns:** The value produced by the getter delegate.

**Throws `System.InvalidOperationException`:** Thrown when runtime reads are not permitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L79).

## `SetValue`

<a id="api-2c81a9e7e834674d"></a>
<!-- api: M:InnoEngine.Serialization.SerializedProperty.SetValue(System.Object) e99a11dc42679de7503ff05189774de61a87e51f5cd58f5ea45560033a087ec2 -->

```csharp
public void InnoEngine.Serialization.SerializedProperty.SetValue(object? value)
```

Sets the current value.

**Parameter `value`:** The value to assign.

**Throws `System.InvalidOperationException`:** Thrown when runtime writes are not permitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L95).

## `canRead`

<a id="api-17f61483580452fd"></a>
<!-- api: P:InnoEngine.Serialization.SerializedProperty.canRead 99e0bf2e6ae2b88ca2bfd00e55013adffbbfb68b122e51d23716aa38aaaed64e -->

```csharp
public bool InnoEngine.Serialization.SerializedProperty.canRead { get; }
```

Gets whether runtime callers may read this property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L37).

## `canWrite`

<a id="api-f2c510ea8067817e"></a>
<!-- api: P:InnoEngine.Serialization.SerializedProperty.canWrite ed870771b4a1c7ca314a61ac17acf5458d542ee9b6c28c2eab561659d62bc84e -->

```csharp
public bool InnoEngine.Serialization.SerializedProperty.canWrite { get; }
```

Gets whether runtime callers may write this property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L42).

## `name`

<a id="api-64294d2b13f5fbed"></a>
<!-- api: P:InnoEngine.Serialization.SerializedProperty.name feb4876001ef335476f88d1d4dddc54cf030abb0be7c76654fe50f856e9e8f74 -->

```csharp
public string InnoEngine.Serialization.SerializedProperty.name { get; }
```

Gets the display and serialization key name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L22).

## `propertyType`

<a id="api-338ba61321548447"></a>
<!-- api: P:InnoEngine.Serialization.SerializedProperty.propertyType b8e4a5f909d2a299bcdbb62c8679d802306487b3f868cd5d82f34a75d895bf2e -->

```csharp
public System.Type InnoEngine.Serialization.SerializedProperty.propertyType { get; }
```

Gets the declared CLR type of this property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L27).

## `visibility`

<a id="api-fbcfea1250443e8a"></a>
<!-- api: P:InnoEngine.Serialization.SerializedProperty.visibility 1b1ae2bfaeb54d956e9c4c5a182c6c12770259340b974d76a711524e003f59ca -->

```csharp
public InnoEngine.Serialization.PropertyVisibility InnoEngine.Serialization.SerializedProperty.visibility { get; }
```

Gets the visibility of this property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L32).
