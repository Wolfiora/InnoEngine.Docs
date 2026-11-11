---
title: "SerializationMemberMetadata"
description: "Reference for SerializationMemberMetadata in Inno.Core.Serialization."
uid: api.inno.core.serialization.9aef015422855559
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationMemberMetadata`

This reference describes `SerializationMemberMetadata` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e7f577d3d17d0752) | Method |
| [`GetValue`](#api-a70fa1db4097d8dd) | Method |
| [`SetValue`](#api-9acafe9d7bbd26e3) | Method |
| [`name`](#api-ad6da8a02d383381) | Property |
| [`type`](#api-cfddd46aea18038c) | Property |
| [`visibility`](#api-70f13cbe9fa5a8e3) | Property |

## Type declaration

<a id="api-9aef015422855559"></a>
<!-- api: T:Inno.Core.Serialization.SerializationMemberMetadata 21186c272875f49b67c873451713c7989fba21bbbe6a60bd6af9980789f2f769 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationMemberMetadata
```

Captures one ordered serialization key and its generation-owned accessors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationMemberMetadata.cs#L8).

## `#ctor`

<a id="api-e7f577d3d17d0752"></a>
<!-- api: M:Inno.Core.Serialization.SerializationMemberMetadata.#ctor(System.String,System.Type,Inno.Core.Serialization.PropertyVisibility,System.Func{System.Object,System.Object},System.Action{System.Object,System.Object}) 661d5a7742047c7516aeb8bf033bcc6a56535d7419529fc40ee7e22824d80393 -->

```csharp
public Inno.Core.Serialization.SerializationMemberMetadata.SerializationMemberMetadata(string name, System.Type type, Inno.Core.Serialization.PropertyVisibility visibility, System.Func<object, object?>? getter, System.Action<object, object?>? setter)
```

Defines a member whose access is implemented by the selected metadata provider.

**Parameter `name`:** The exact persistent key.

**Parameter `type`:** The declared value type.

**Parameter `visibility`:** Persistent and runtime access permissions.

**Parameter `getter`:** A read accessor, or null when reading is not permitted.

**Parameter `setter`:** A write accessor, or null when writing is not permitted.

**Throws `System.ArgumentException`:** The name is empty or an accessor required by the visibility is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationMemberMetadata.cs#L34).

## `GetValue`

<a id="api-a70fa1db4097d8dd"></a>
<!-- api: M:Inno.Core.Serialization.SerializationMemberMetadata.GetValue(System.Object) 9ee1ccd97a3af860adb19b17e89d339ae0d34b3b2325751b0506795da23905b0 -->

```csharp
public object? Inno.Core.Serialization.SerializationMemberMetadata.GetValue(object target)
```

Reads the current value through the selected declaration accessor.

**Parameter `target`:** The declaring object; ownership remains with the caller.

**Returns:** The current value, including null when allowed by the declaration.

**Throws `System.InvalidOperationException`:** Reading is not permitted by this metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationMemberMetadata.cs#L81).

## `SetValue`

<a id="api-9acafe9d7bbd26e3"></a>
<!-- api: M:Inno.Core.Serialization.SerializationMemberMetadata.SetValue(System.Object,System.Object) 3d9bf5d2606cdd37a371733ed172a8a7e34e8f3154a9597d1f7a9dca37bfe6f7 -->

```csharp
public void Inno.Core.Serialization.SerializationMemberMetadata.SetValue(object target, object? value)
```

Writes a value through the selected declaration accessor.

**Parameter `target`:** The object receiving the value.

**Parameter `value`:** A value compatible with the declared member type.

**Throws `System.InvalidOperationException`:** Writing is not permitted by this metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationMemberMetadata.cs#L97).

## `name`

<a id="api-ad6da8a02d383381"></a>
<!-- api: P:Inno.Core.Serialization.SerializationMemberMetadata.name 5f0c01bad08401ffecd2492e64f0b661f65f777a5cc103a3483b2c5b7993546d -->

```csharp
public string Inno.Core.Serialization.SerializationMemberMetadata.name { get; }
```

Gets the exact persistent key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationMemberMetadata.cs#L57).

## `type`

<a id="api-cfddd46aea18038c"></a>
<!-- api: P:Inno.Core.Serialization.SerializationMemberMetadata.type 5aa74a595d72a556174b10e9e57d8cb8b2ee4356bef2320a66b9fb0ccf86690d -->

```csharp
public System.Type Inno.Core.Serialization.SerializationMemberMetadata.type { get; }
```

Gets the declared value type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationMemberMetadata.cs#L62).

## `visibility`

<a id="api-70f13cbe9fa5a8e3"></a>
<!-- api: P:Inno.Core.Serialization.SerializationMemberMetadata.visibility 76539a272651f5eaeba105a167c9c04f5959cce7da675df2d019cc17250b2481 -->

```csharp
public Inno.Core.Serialization.PropertyVisibility Inno.Core.Serialization.SerializationMemberMetadata.visibility { get; }
```

Gets the member's persistent and runtime access permissions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationMemberMetadata.cs#L67).
