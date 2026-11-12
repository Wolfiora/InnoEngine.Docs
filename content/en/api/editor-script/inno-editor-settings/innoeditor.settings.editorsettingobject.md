---
title: "EditorSettingObject"
description: "Reference for EditorSettingObject in Inno.Editor.Settings."
uid: api.inno.editor.settings.editor-script.e8c130d6a5865e5c
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
  - manual.scripting.use-script-api
---
# `EditorSettingObject`

This reference describes `EditorSettingObject` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-501d5ef919fd01e1) | Method |
| [`GetAsBoolean`](#api-82a226dafe7d9234) | Method |
| [`GetAsBooleanArray`](#api-089691f33fbffd91) | Method |
| [`GetAsDouble`](#api-2ab07290d94b9959) | Method |
| [`GetAsDoubleArray`](#api-a7880009ed45a236) | Method |
| [`GetAsInt32`](#api-187a7b640f191788) | Method |
| [`GetAsInt32Array`](#api-10aef146ecc527b7) | Method |
| [`GetAsInt64`](#api-5607e81f6ef3b993) | Method |
| [`GetAsSingle`](#api-ea297bd28cb449c0) | Method |
| [`GetAsSingleArray`](#api-c0da71ec90f7bdad) | Method |
| [`GetAsString`](#api-a9f80831dc136a8f) | Method |
| [`GetAsStringArray`](#api-ea9962a31f094ce0) | Method |
| [`GetAsUInt32`](#api-0b261a41e04d67df) | Method |
| [`GetAsUInt32Array`](#api-81f2f476479891e3) | Method |
| [`GetAsUInt64`](#api-7cf0353c8b6c5abb) | Method |
| [`SetAsBoolean`](#api-c4cab60f8d10e6b4) | Method |
| [`SetAsBooleanArray`](#api-b418c61949be8289) | Method |
| [`SetAsDouble`](#api-e6e23bec4ddc1b3a) | Method |
| [`SetAsDoubleArray`](#api-8523b31dfc43ddb4) | Method |
| [`SetAsInt32`](#api-fb0c773bb4a6ea17) | Method |
| [`SetAsInt32Array`](#api-20508d7d59fbfaa3) | Method |
| [`SetAsInt64`](#api-c302d735f51a8296) | Method |
| [`SetAsSingle`](#api-584dbed9c3c79d85) | Method |
| [`SetAsSingleArray`](#api-e07390305d843250) | Method |
| [`SetAsString`](#api-8424dfc1e0a52485) | Method |
| [`SetAsStringArray`](#api-8de2acf2fd494b07) | Method |
| [`SetAsUInt32`](#api-9c96760fe5609293) | Method |
| [`SetAsUInt32Array`](#api-c3d441a3ba39b5b6) | Method |
| [`SetAsUInt64`](#api-25131bc5bc7a7356) | Method |

## Type declaration

<a id="api-e8c130d6a5865e5c"></a>
<!-- api: T:InnoEditor.Settings.EditorSettingObject 871d6691b7ad7f9d1231e598738fdc2ceea1b4eb3518a1bf841fd50223c1a55f -->

```csharp
public sealed class InnoEditor.Settings.EditorSettingObject : InnoEngine.Serialization.ISerializable
```

Represents one isolated, strongly typed object exposed to a Settings field and its consumers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L13).

## `#ctor`

<a id="api-501d5ef919fd01e1"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.#ctor 3b9aacb10ce25843cae36c0a40a15650a7ca7819b8d477472834d9593ee3cb7c -->

```csharp
public InnoEditor.Settings.EditorSettingObject.EditorSettingObject()
```

Creates an empty Settings object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L21).

## `GetAsBoolean`

<a id="api-82a226dafe7d9234"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsBoolean(System.String,System.Boolean) 11a2468a6b7e3c919329dda98e416f5c50eca94b272cd57b0e591baffee596dc -->

```csharp
public bool InnoEditor.Settings.EditorSettingObject.GetAsBoolean(string name, bool defaultValue = false)
```

Gets a Boolean property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored Boolean or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L42).

## `GetAsBooleanArray`

<a id="api-089691f33fbffd91"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsBooleanArray(System.String,System.Boolean[]) e9a52fb28f346a78144c87910237a3ddd2c0af3571ba1b555f062e0de50a7fc3 -->

```csharp
public bool[] InnoEditor.Settings.EditorSettingObject.GetAsBooleanArray(string name, bool[]? defaultValue = null)
```

Gets a Boolean array property, or a copied fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L304).

## `GetAsDouble`

<a id="api-2ab07290d94b9959"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsDouble(System.String,System.Double) e68fff09ae93ef221ff8022202bfa51c9e4a7e0eef6c7baf175e08edb13928bd -->

```csharp
public double InnoEditor.Settings.EditorSettingObject.GetAsDouble(string name, double defaultValue = 0)
```

Gets a double-precision property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored number or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L235).

## `GetAsDoubleArray`

<a id="api-a7880009ed45a236"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsDoubleArray(System.String,System.Double[]) 9f4862118d0909a1dec8cd9df7a025a0307e967a7b8dd06ee8edd167500f9134 -->

```csharp
public double[] InnoEditor.Settings.EditorSettingObject.GetAsDoubleArray(string name, double[]? defaultValue = null)
```

Gets a double-precision array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L428).

## `GetAsInt32`

<a id="api-187a7b640f191788"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsInt32(System.String,System.Int32) 5d4a83bbd4d5cfb91c13ac154c95468cbc9a2a995a160a4959126cf6620cb4ba -->

```csharp
public int InnoEditor.Settings.EditorSettingObject.GetAsInt32(string name, int defaultValue = 0)
```

Gets a 32-bit signed integer property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored integer or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L73).

## `GetAsInt32Array`

<a id="api-10aef146ecc527b7"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsInt32Array(System.String,System.Int32[]) e03d45c4d52c959e8d777f6d401b9690aff8d4a8bf9beedff7ae7f9018d72281 -->

```csharp
public int[] InnoEditor.Settings.EditorSettingObject.GetAsInt32Array(string name, int[]? defaultValue = null)
```

Gets a 32-bit signed integer array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L335).

## `GetAsInt64`

<a id="api-5607e81f6ef3b993"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsInt64(System.String,System.Int64) fcfaf836c5f3a4962cec94cbedc817c645ae05560790354a118e7648e5ceebe4 -->

```csharp
public long InnoEditor.Settings.EditorSettingObject.GetAsInt64(string name, long defaultValue = 0)
```

Gets a 64-bit signed integer property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored integer or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L135).

## `GetAsSingle`

<a id="api-ea297bd28cb449c0"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsSingle(System.String,System.Single) 303afe32df174752b7d3a29fb3fab3531b68bd88acb20d3545688f52b3e10b8a -->

```csharp
public float InnoEditor.Settings.EditorSettingObject.GetAsSingle(string name, float defaultValue = 0)
```

Gets a single-precision property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored number or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L197).

## `GetAsSingleArray`

<a id="api-c0da71ec90f7bdad"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsSingleArray(System.String,System.Single[]) 3128c5ef7cdcfad50b552d75dcf9958d89e48ca53bf23d9b2900c1001154725f -->

```csharp
public float[] InnoEditor.Settings.EditorSettingObject.GetAsSingleArray(string name, float[]? defaultValue = null)
```

Gets a single-precision array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L397).

## `GetAsString`

<a id="api-a9f80831dc136a8f"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsString(System.String,System.String) 08e36d0a34d373e596a47509f6c7efb2d3087a65c59beab3be1671f108fa3929 -->

```csharp
public string? InnoEditor.Settings.EditorSettingObject.GetAsString(string name, string? defaultValue = null)
```

Gets a string property, or a fallback when the property is absent or null.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent or null.

**Returns:** The stored string or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L273).

## `GetAsStringArray`

<a id="api-ea9962a31f094ce0"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsStringArray(System.String,System.String[]) af7e2753256e892d10306914b1623cd809a805bc54e9e38e56610e64f1a90aa2 -->

```csharp
public string?[] InnoEditor.Settings.EditorSettingObject.GetAsStringArray(string name, string?[]? defaultValue = null)
```

Gets a nullable string array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L459).

## `GetAsUInt32`

<a id="api-0b261a41e04d67df"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsUInt32(System.String,System.UInt32) 3a188909447307dbe912c855e7d870104bf39a231886754e5edbc552476e6284 -->

```csharp
public uint InnoEditor.Settings.EditorSettingObject.GetAsUInt32(string name, uint defaultValue = 0)
```

Gets a 32-bit unsigned integer property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored integer or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L104).

## `GetAsUInt32Array`

<a id="api-81f2f476479891e3"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsUInt32Array(System.String,System.UInt32[]) 7529ab97c7db509fc5802588142ece02ed2308989b378194a2f67543f8e1899c -->

```csharp
public uint[] InnoEditor.Settings.EditorSettingObject.GetAsUInt32Array(string name, uint[]? defaultValue = null)
```

Gets a 32-bit unsigned integer array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L366).

## `GetAsUInt64`

<a id="api-7cf0353c8b6c5abb"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.GetAsUInt64(System.String,System.UInt64) 1c77982424a28a507fa5c90747c3235edcb60294b989c7bd2329c15793bb1f88 -->

```csharp
public ulong InnoEditor.Settings.EditorSettingObject.GetAsUInt64(string name, ulong defaultValue = 0)
```

Gets a 64-bit unsigned integer property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored integer or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L166).

## `SetAsBoolean`

<a id="api-c4cab60f8d10e6b4"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsBoolean(System.String,System.Boolean) 4003c46d6d38bcfd11cbf4158e5ba6a3506ca730be8817e98fbe8015ddf49e48 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsBoolean(string name, bool value)
```

Sets a Boolean property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L56).

## `SetAsBooleanArray`

<a id="api-b418c61949be8289"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsBooleanArray(System.String,System.Boolean[]) feb1d429ba82beb31e38f3c4c769804e931f461df7813849145867e29935da76 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsBooleanArray(string name, bool[] value)
```

Sets a Boolean array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L318).

## `SetAsDouble`

<a id="api-e6e23bec4ddc1b3a"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsDouble(System.String,System.Double) 3218db925b2f5edaab231d29716bedb3d7a9b4375ff888d92e34629d15f9590c -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsDouble(string name, double value)
```

Sets a finite double-precision property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The finite value to store.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `value` is not finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L252).

## `SetAsDoubleArray`

<a id="api-8523b31dfc43ddb4"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsDoubleArray(System.String,System.Double[]) b4cd38c6607049c2b8e8e4908d622d82ae8d19f640e659bad3715d9a9f1a0b12 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsDoubleArray(string name, double[] value)
```

Sets a double-precision array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L442).

## `SetAsInt32`

<a id="api-fb0c773bb4a6ea17"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsInt32(System.String,System.Int32) 5866ee7dc29e6183bf853a9067d3077717736c3f01177e42ba1e5b33e8db97b1 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsInt32(string name, int value)
```

Sets a 32-bit signed integer property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L87).

## `SetAsInt32Array`

<a id="api-20508d7d59fbfaa3"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsInt32Array(System.String,System.Int32[]) b3570f9630b8a37e6505c6e6ca748862b3150bfcd88a54ffe69f506177475306 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsInt32Array(string name, int[] value)
```

Sets a 32-bit signed integer array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L349).

## `SetAsInt64`

<a id="api-c302d735f51a8296"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsInt64(System.String,System.Int64) 23e46b2d98fd4af4bd48024be5c2227e4cc3f103cd3e85245485a3973f5bcaa6 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsInt64(string name, long value)
```

Sets a 64-bit signed integer property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L149).

## `SetAsSingle`

<a id="api-584dbed9c3c79d85"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsSingle(System.String,System.Single) 134ebd0ff9fdae9cd982ec2f1812efad21d4de8ea68136dc6c337fe5020edb39 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsSingle(string name, float value)
```

Sets a finite single-precision property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The finite value to store.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `value` is not finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L214).

## `SetAsSingleArray`

<a id="api-e07390305d843250"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsSingleArray(System.String,System.Single[]) a74f99b7622ab416add9652e055c7a49821a6c08f3ffa04b02c9b4d00ae502c7 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsSingleArray(string name, float[] value)
```

Sets a single-precision array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L411).

## `SetAsString`

<a id="api-8424dfc1e0a52485"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsString(System.String,System.String) a570b72276865b0996a20ee09c9c79f688a672e4f210425b01e58c593b36b5c9 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsString(string name, string? value)
```

Sets a nullable string property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L287).

## `SetAsStringArray`

<a id="api-8de2acf2fd494b07"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsStringArray(System.String,System.String[]) b6772d7a536d5c4a8d20c021f45417b5865a9c5ea33f6558f5d92aa43677ce02 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsStringArray(string name, string?[] value)
```

Sets a nullable string array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L473).

## `SetAsUInt32`

<a id="api-9c96760fe5609293"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsUInt32(System.String,System.UInt32) 9a4527648fb51553b75f082fa2e3b4805b7e277ac122dfd7fe783833ff2f52cb -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsUInt32(string name, uint value)
```

Sets a 32-bit unsigned integer property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L118).

## `SetAsUInt32Array`

<a id="api-c3d441a3ba39b5b6"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsUInt32Array(System.String,System.UInt32[]) 7b72fac76f1a74b246d65012afb086921f952ca26e22ca3f4bd5dcb71cf53896 -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsUInt32Array(string name, uint[] value)
```

Sets a 32-bit unsigned integer array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L380).

## `SetAsUInt64`

<a id="api-25131bc5bc7a7356"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingObject.SetAsUInt64(System.String,System.UInt64) ef081aaabaddcb6081b731fe004fc46bb38c7e22b16c3a443ab5ed5399367c2f -->

```csharp
public void InnoEditor.Settings.EditorSettingObject.SetAsUInt64(string name, ulong value)
```

Sets a 64-bit unsigned integer property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L180).
