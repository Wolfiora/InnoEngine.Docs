---
title: "SerializedProperty"
description: "Reference for SerializedProperty in Inno.Core.Serialization."
uid: api.inno.core.serialization.a1acfec87581e0fc
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializedProperty`

This reference describes `SerializedProperty` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetValue`](#api-4d339a2966882cb4) | Method |
| [`SetValue`](#api-76feabdb37c33904) | Method |
| [`canRead`](#api-5abd0081ffdcdbe5) | Property |
| [`canWrite`](#api-ec0db583776c8fae) | Property |
| [`name`](#api-12a07181f28482cf) | Property |
| [`propertyType`](#api-b5983f7cb8e9be8b) | Property |
| [`visibility`](#api-2680032fc99015bb) | Property |

## Type declaration

<a id="api-a1acfec87581e0fc"></a>
<!-- api: T:Inno.Core.Serialization.SerializedProperty 3d78d478beb981dd02e4f8ad9ea8a4d6c43b1b773cc001c96634d8ed5092f3db -->

```csharp
public sealed class Inno.Core.Serialization.SerializedProperty
```

Represents a discoverable property in editor and persistence workflows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L8).

## `GetValue`

<a id="api-4d339a2966882cb4"></a>
<!-- api: M:Inno.Core.Serialization.SerializedProperty.GetValue b5d145a0b678ba11efa6f5c05abdb5af59863972fb24f924997f8fbc504e0fff -->

```csharp
public object? Inno.Core.Serialization.SerializedProperty.GetValue()
```

Gets the current value.

**Returns:** The value produced by the getter delegate.

**Throws `System.InvalidOperationException`:** Thrown when runtime reads are not permitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L79).

## `SetValue`

<a id="api-76feabdb37c33904"></a>
<!-- api: M:Inno.Core.Serialization.SerializedProperty.SetValue(System.Object) 2cbc3cbb370f0c07bf4451ead6e03a5d741d17724161b178c22b52604c3b208d -->

```csharp
public void Inno.Core.Serialization.SerializedProperty.SetValue(object? value)
```

Sets the current value.

**Parameter `value`:** The value to assign.

**Throws `System.InvalidOperationException`:** Thrown when runtime writes are not permitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L95).

## `canRead`

<a id="api-5abd0081ffdcdbe5"></a>
<!-- api: P:Inno.Core.Serialization.SerializedProperty.canRead b02fa51e6e7252e20988e2020ad815cb0ba0f757b111986fe5f55e917ab16ef0 -->

```csharp
public bool Inno.Core.Serialization.SerializedProperty.canRead { get; }
```

Gets whether runtime callers may read this property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L37).

## `canWrite`

<a id="api-ec0db583776c8fae"></a>
<!-- api: P:Inno.Core.Serialization.SerializedProperty.canWrite 4bd64498031b934ecef95632a5cad628b18b446cbd8bed63ea103d1ffbe53e6a -->

```csharp
public bool Inno.Core.Serialization.SerializedProperty.canWrite { get; }
```

Gets whether runtime callers may write this property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L42).

## `name`

<a id="api-12a07181f28482cf"></a>
<!-- api: P:Inno.Core.Serialization.SerializedProperty.name dd656a5f293afdd05d6df638aefd01643322db3eae1b2f79602ad22b604358a5 -->

```csharp
public string Inno.Core.Serialization.SerializedProperty.name { get; }
```

Gets the display and serialization key name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L22).

## `propertyType`

<a id="api-b5983f7cb8e9be8b"></a>
<!-- api: P:Inno.Core.Serialization.SerializedProperty.propertyType 5bdf72940c6b84fbfeb94e1b37c927a18d89c489faef88036da8c5ad11924ff9 -->

```csharp
public System.Type Inno.Core.Serialization.SerializedProperty.propertyType { get; }
```

Gets the declared CLR type of this property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L27).

## `visibility`

<a id="api-2680032fc99015bb"></a>
<!-- api: P:Inno.Core.Serialization.SerializedProperty.visibility a1318b8cacdbc6e505080a6ea4cf7ce347d40e28932e2891679adb94de17a95d -->

```csharp
public Inno.Core.Serialization.PropertyVisibility Inno.Core.Serialization.SerializedProperty.visibility { get; }
```

Gets the visibility of this property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializedProperty.cs#L32).
