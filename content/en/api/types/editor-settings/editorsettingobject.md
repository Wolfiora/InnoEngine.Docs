---
title: "EditorSettingObject"
description: "Reference for EditorSettingObject in Inno.Editor.Settings."
uid: api.inno.editor.settings.b899ff2be4685015
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# `EditorSettingObject`

This reference describes `EditorSettingObject` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2d3b0fcbc105fad1) | Method |
| [`GetAsBoolean`](#api-52d344f4a6fe5ade) | Method |
| [`GetAsBooleanArray`](#api-2e0bed4527e06352) | Method |
| [`GetAsDouble`](#api-7984b58553b27520) | Method |
| [`GetAsDoubleArray`](#api-f7a1acb8c344eab1) | Method |
| [`GetAsInt32`](#api-63f063a508f1ed73) | Method |
| [`GetAsInt32Array`](#api-cd7a64b77078f384) | Method |
| [`GetAsInt64`](#api-35eb08e18fa487b4) | Method |
| [`GetAsSingle`](#api-bbb80dd033e00446) | Method |
| [`GetAsSingleArray`](#api-201731320fccd9d4) | Method |
| [`GetAsString`](#api-2ba1f77cf1ac4a53) | Method |
| [`GetAsStringArray`](#api-652a931e9b9a8c4f) | Method |
| [`GetAsUInt32`](#api-b1eaf16fc6bf6b0e) | Method |
| [`GetAsUInt32Array`](#api-999f3779298cff37) | Method |
| [`GetAsUInt64`](#api-d843f95a8b0fddd1) | Method |
| [`SetAsBoolean`](#api-682e6bd33c37d398) | Method |
| [`SetAsBooleanArray`](#api-504220d58e235327) | Method |
| [`SetAsDouble`](#api-c08144e3ba5bded3) | Method |
| [`SetAsDoubleArray`](#api-ce9c1b6d5ab8ded9) | Method |
| [`SetAsInt32`](#api-aaf6331f9e327223) | Method |
| [`SetAsInt32Array`](#api-11a5919ca723195e) | Method |
| [`SetAsInt64`](#api-9a50df0f89d14699) | Method |
| [`SetAsSingle`](#api-19c69881d331bda9) | Method |
| [`SetAsSingleArray`](#api-9de7740540209997) | Method |
| [`SetAsString`](#api-a2dad42d7bfcab90) | Method |
| [`SetAsStringArray`](#api-1128593d209a243e) | Method |
| [`SetAsUInt32`](#api-581d174ebf7a6922) | Method |
| [`SetAsUInt32Array`](#api-5da95bd82ee751b3) | Method |
| [`SetAsUInt64`](#api-8befba820ea695b1) | Method |

## Type declaration

<a id="api-b899ff2be4685015"></a>
<!-- api: T:Inno.Editor.Settings.EditorSettingObject 1a9495f2fe7461cd3f1b5e4e6bc11b8da64a376712829d04182aa2d7ffa20a38 -->

```csharp
public sealed class Inno.Editor.Settings.EditorSettingObject : Inno.Core.Serialization.ISerializable
```

Represents one isolated, strongly typed object exposed to a Settings field and its consumers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L13).

## `#ctor`

<a id="api-2d3b0fcbc105fad1"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.#ctor 8fb4817c76ad367c696bf64464d432fd2070f9ae12fd6491b27e6631863ae7fe -->

```csharp
public Inno.Editor.Settings.EditorSettingObject.EditorSettingObject()
```

Creates an empty Settings object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L21).

## `GetAsBoolean`

<a id="api-52d344f4a6fe5ade"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsBoolean(System.String,System.Boolean) c580ed1f2358c341b2309e3fae8ef7b3f04b2b81c511e576383abc0643f545cb -->

```csharp
public bool Inno.Editor.Settings.EditorSettingObject.GetAsBoolean(string name, bool defaultValue = false)
```

Gets a Boolean property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored Boolean or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L42).

## `GetAsBooleanArray`

<a id="api-2e0bed4527e06352"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsBooleanArray(System.String,System.Boolean[]) 9a4bdfb6dda751c8d5a028bebbab7526aec39500b25e23acf115857de95aba65 -->

```csharp
public bool[] Inno.Editor.Settings.EditorSettingObject.GetAsBooleanArray(string name, bool[]? defaultValue = null)
```

Gets a Boolean array property, or a copied fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L304).

## `GetAsDouble`

<a id="api-7984b58553b27520"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsDouble(System.String,System.Double) 0162957670b060cc36c204c58937d80009623506e0990b0f17767f3971d7c209 -->

```csharp
public double Inno.Editor.Settings.EditorSettingObject.GetAsDouble(string name, double defaultValue = 0)
```

Gets a double-precision property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored number or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L235).

## `GetAsDoubleArray`

<a id="api-f7a1acb8c344eab1"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsDoubleArray(System.String,System.Double[]) ee4535b5603130f8e62f0a71920339f7d5a47badd25dfcb7226044710b987869 -->

```csharp
public double[] Inno.Editor.Settings.EditorSettingObject.GetAsDoubleArray(string name, double[]? defaultValue = null)
```

Gets a double-precision array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L428).

## `GetAsInt32`

<a id="api-63f063a508f1ed73"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsInt32(System.String,System.Int32) 88f349eae82128313b1516c130b201e4cdad3466f9ead665c9e0190d540e0c1f -->

```csharp
public int Inno.Editor.Settings.EditorSettingObject.GetAsInt32(string name, int defaultValue = 0)
```

Gets a 32-bit signed integer property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored integer or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L73).

## `GetAsInt32Array`

<a id="api-cd7a64b77078f384"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsInt32Array(System.String,System.Int32[]) 10f077d9a3dd29821618b6812058c278a171409171de2ad20fbc22cba84ad932 -->

```csharp
public int[] Inno.Editor.Settings.EditorSettingObject.GetAsInt32Array(string name, int[]? defaultValue = null)
```

Gets a 32-bit signed integer array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L335).

## `GetAsInt64`

<a id="api-35eb08e18fa487b4"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsInt64(System.String,System.Int64) 4c205c276944c0e5fc895231d1d97c3ae1b6e8c89d2369a35738911baef905c8 -->

```csharp
public long Inno.Editor.Settings.EditorSettingObject.GetAsInt64(string name, long defaultValue = 0)
```

Gets a 64-bit signed integer property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored integer or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L135).

## `GetAsSingle`

<a id="api-bbb80dd033e00446"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsSingle(System.String,System.Single) 72b68afbb5f84010e686da21b7c78e8ed0c5bf891eddefaa09d9a33a58e27e86 -->

```csharp
public float Inno.Editor.Settings.EditorSettingObject.GetAsSingle(string name, float defaultValue = 0)
```

Gets a single-precision property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored number or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L197).

## `GetAsSingleArray`

<a id="api-201731320fccd9d4"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsSingleArray(System.String,System.Single[]) d2adc93d6168d938c501731cbfdedc4edd1d39efe0fc0fdde5f4db3528b60ff6 -->

```csharp
public float[] Inno.Editor.Settings.EditorSettingObject.GetAsSingleArray(string name, float[]? defaultValue = null)
```

Gets a single-precision array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L397).

## `GetAsString`

<a id="api-2ba1f77cf1ac4a53"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsString(System.String,System.String) 8f1136199f8ea218cba94784bbe414575bf410a628e723abd001179bbfcf96ca -->

```csharp
public string? Inno.Editor.Settings.EditorSettingObject.GetAsString(string name, string? defaultValue = null)
```

Gets a string property, or a fallback when the property is absent or null.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent or null.

**Returns:** The stored string or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L273).

## `GetAsStringArray`

<a id="api-652a931e9b9a8c4f"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsStringArray(System.String,System.String[]) c9db51dd102024def0fef1eb9436d94aef1a3e14886af7cb6ec991cea059ba7d -->

```csharp
public string?[] Inno.Editor.Settings.EditorSettingObject.GetAsStringArray(string name, string?[]? defaultValue = null)
```

Gets a nullable string array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L459).

## `GetAsUInt32`

<a id="api-b1eaf16fc6bf6b0e"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsUInt32(System.String,System.UInt32) 95f851acbbfe368d0bfa4ddd651ccc285efe4bd1ad86cd44167d1b50bac1afdc -->

```csharp
public uint Inno.Editor.Settings.EditorSettingObject.GetAsUInt32(string name, uint defaultValue = 0)
```

Gets a 32-bit unsigned integer property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored integer or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L104).

## `GetAsUInt32Array`

<a id="api-999f3779298cff37"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsUInt32Array(System.String,System.UInt32[]) 48b2347f05c9481eb28ad558f5da3c7580b9143c1a0b152d619b72a972b8937d -->

```csharp
public uint[] Inno.Editor.Settings.EditorSettingObject.GetAsUInt32Array(string name, uint[]? defaultValue = null)
```

Gets a 32-bit unsigned integer array property, or a copied fallback when absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The array copied when the property is absent.

**Returns:** An independently owned array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L366).

## `GetAsUInt64`

<a id="api-d843f95a8b0fddd1"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.GetAsUInt64(System.String,System.UInt64) e77155d07afd4a9354670d4e224d3a59354cb16657285cfa3ef2a2fa62be5958 -->

```csharp
public ulong Inno.Editor.Settings.EditorSettingObject.GetAsUInt64(string name, ulong defaultValue = 0)
```

Gets a 64-bit unsigned integer property, or a fallback when the property is absent.

**Parameter `name`:** The stable property name.

**Parameter `defaultValue`:** The value returned when the property is absent.

**Returns:** The stored integer or `defaultValue`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L166).

## `SetAsBoolean`

<a id="api-682e6bd33c37d398"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsBoolean(System.String,System.Boolean) bf43b8cf612778da02ed62344a9806fcd9551b27341d17c1861325ba6cf7ae3f -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsBoolean(string name, bool value)
```

Sets a Boolean property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L56).

## `SetAsBooleanArray`

<a id="api-504220d58e235327"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsBooleanArray(System.String,System.Boolean[]) 9f9fb0161e90944544ce1009a1e7b4c91fbf054689e8839d27e0c2c7c23607b5 -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsBooleanArray(string name, bool[] value)
```

Sets a Boolean array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L318).

## `SetAsDouble`

<a id="api-c08144e3ba5bded3"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsDouble(System.String,System.Double) 0ca50b927c4a60a496020e455fbb890450c6b9708c39ea70d489a90cf0458b13 -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsDouble(string name, double value)
```

Sets a finite double-precision property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The finite value to store.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `value` is not finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L252).

## `SetAsDoubleArray`

<a id="api-ce9c1b6d5ab8ded9"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsDoubleArray(System.String,System.Double[]) ba7e4e9de2ae8a357082f635dacfa0736db5e5bf4bf72c80486e38015ec68f14 -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsDoubleArray(string name, double[] value)
```

Sets a double-precision array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L442).

## `SetAsInt32`

<a id="api-aaf6331f9e327223"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsInt32(System.String,System.Int32) 813b94c60df5ae2082ba909e9692881ff222ae2d1501ce8cf6fafbe3e5d9055d -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsInt32(string name, int value)
```

Sets a 32-bit signed integer property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L87).

## `SetAsInt32Array`

<a id="api-11a5919ca723195e"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsInt32Array(System.String,System.Int32[]) 742babda52c279c508fda18a245bea728ecd18d7087b98f2e4c3feb8ee048ede -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsInt32Array(string name, int[] value)
```

Sets a 32-bit signed integer array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L349).

## `SetAsInt64`

<a id="api-9a50df0f89d14699"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsInt64(System.String,System.Int64) db4c1c77f20d62a5c6af6e16f86eb043a863e05b4025365eeadf238e16a3421e -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsInt64(string name, long value)
```

Sets a 64-bit signed integer property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L149).

## `SetAsSingle`

<a id="api-19c69881d331bda9"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsSingle(System.String,System.Single) 13b58cdd0b9114d8194d6bb237360ebb0355f107fea7011401aa801eb3e89e63 -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsSingle(string name, float value)
```

Sets a finite single-precision property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The finite value to store.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `value` is not finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L214).

## `SetAsSingleArray`

<a id="api-9de7740540209997"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsSingleArray(System.String,System.Single[]) 84624a6dae2b8d73312cc281c0f64b1127d82e917435718ea9c36acc55e9b3ef -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsSingleArray(string name, float[] value)
```

Sets a single-precision array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L411).

## `SetAsString`

<a id="api-a2dad42d7bfcab90"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsString(System.String,System.String) bc2614cd3b74b0fef22dfee44546932e314bde0498d800f84691f44a7610d926 -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsString(string name, string? value)
```

Sets a nullable string property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L287).

## `SetAsStringArray`

<a id="api-1128593d209a243e"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsStringArray(System.String,System.String[]) 855b8d4193cd786b76ab97f65964737587d8eaed193945f6f8a9e1086183a9e9 -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsStringArray(string name, string?[] value)
```

Sets a nullable string array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L473).

## `SetAsUInt32`

<a id="api-581d174ebf7a6922"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsUInt32(System.String,System.UInt32) bf5ba10c90eccbdcad9190c75fba3286b81ac8ce8d55f5df0b209e774c2beb0c -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsUInt32(string name, uint value)
```

Sets a 32-bit unsigned integer property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L118).

## `SetAsUInt32Array`

<a id="api-5da95bd82ee751b3"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsUInt32Array(System.String,System.UInt32[]) 507f41940b612244515562e8cc9526be2533becfb4de9ce77f38f4de2a8ccb9a -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsUInt32Array(string name, uint[] value)
```

Sets a 32-bit unsigned integer array property by value.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The array copied into the object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L380).

## `SetAsUInt64`

<a id="api-8befba820ea695b1"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingObject.SetAsUInt64(System.String,System.UInt64) 65db6c7fc9c67d0a98089157df78d51fbe47d8d1aa81f73d32d912b183038060 -->

```csharp
public void Inno.Editor.Settings.EditorSettingObject.SetAsUInt64(string name, ulong value)
```

Sets a 64-bit unsigned integer property.

**Parameter `name`:** The stable property name.

**Parameter `value`:** The value to store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingObject.cs#L180).
