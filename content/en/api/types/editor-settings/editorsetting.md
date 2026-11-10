---
title: "EditorSetting"
description: "Reference for EditorSetting in Inno.Editor.Settings."
uid: api.inno.editor.settings.be5332dcc539a1e8
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# `EditorSetting`

This reference describes `EditorSetting` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6eda555c28359e20) | Method |
| [`Draw`](#api-f1a559641684c45e) | Method |
| [`IsDefault`](#api-cf16ed70a1d78e89) | Method |
| [`OnDraw`](#api-8bf30fa95217f9be) | Method |
| [`defaultValue`](#api-538db028c21159a0) | Property |
| [`description`](#api-caf7986f7b8f4bc4) | Property |
| [`hasValue`](#api-ae70a8f61b3069e4) | Property |
| [`label`](#api-9a86d7142dac3276) | Property |
| [`order`](#api-15b0bc3c501b685c) | Property |
| [`pagePath`](#api-bbd9f815aac36800) | Property |
| [`path`](#api-3ad06d4c684853bc) | Property |
| [`section`](#api-1aa95b2c27b7a550) | Property |

## Type declaration

<a id="api-be5332dcc539a1e8"></a>
<!-- api: T:Inno.Editor.Settings.EditorSetting cd9770c4bcd971730429e0b55d2a42fa9f24ee486890550370af2bcb34053ff7 -->

```csharp
public abstract class Inno.Editor.Settings.EditorSetting
```

Defines one path-addressed Settings page or one custom-drawn Settings field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L10).

## `#ctor`

<a id="api-6eda555c28359e20"></a>
<!-- api: M:Inno.Editor.Settings.EditorSetting.#ctor 3947b5e5a500a458c20fd61160b10d512e78184c1f930470017dde09f5720f5f -->

```csharp
protected Inno.Editor.Settings.EditorSetting.EditorSetting()
```

Creates a Settings definition. A field supplies its persisted default through
`Inno.Editor.Settings.EditorSetting.defaultValue`; a page keeps the base implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L23).

## `Draw`

<a id="api-f1a559641684c45e"></a>
<!-- api: M:Inno.Editor.Settings.EditorSetting.Draw(Inno.Editor.Settings.EditorSettingObject) adf79b750198cdd499e86ad19cc04080a656f836dfdff4129affb89b22640d1e -->

```csharp
public bool Inno.Editor.Settings.EditorSetting.Draw(Inno.Editor.Settings.EditorSettingObject setting)
```

Draws this field inside the frontend-managed content container.

**Parameter `setting`:** The isolated mutable object being edited.

**Returns:** `true` when the staged object differs from the value it held when this
    frontend first drew that object.

**Throws `System.ArgumentNullException`:** Thrown when `setting` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L85).

## `IsDefault`

<a id="api-cf16ed70a1d78e89"></a>
<!-- api: M:Inno.Editor.Settings.EditorSetting.IsDefault(Inno.Editor.Settings.EditorSettingObject) a2d85cebff8f566a93a12941f14e61988f8d1c7cdf9d513e3ec51a2959c2cef2 -->

```csharp
public bool Inno.Editor.Settings.EditorSetting.IsDefault(Inno.Editor.Settings.EditorSettingObject setting)
```

Determines whether a staged field object equals this definition's bound default value.

**Parameter `setting`:** The isolated staged object to compare.

**Returns:** `true` when every stored property equals the field default.

**Throws `System.ArgumentNullException`:** Thrown when `setting` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when this definition describes a page rather than a field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L110).

## `OnDraw`

<a id="api-8bf30fa95217f9be"></a>
<!-- api: M:Inno.Editor.Settings.EditorSetting.OnDraw(Inno.Editor.Settings.EditorSettingObject) 0fc2b28791051188c7e188569c5526ed6cba108ad7a776584dc1cf0bad3a03f1 -->

```csharp
protected virtual void Inno.Editor.Settings.EditorSetting.OnDraw(Inno.Editor.Settings.EditorSettingObject setting)
```

Draws the field using the staged JSON object owned by the Settings frontend.
A type that does not override this method describes a page.

**Parameter `setting`:** The isolated mutable object being edited.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L126).

## `defaultValue`

<a id="api-538db028c21159a0"></a>
<!-- api: P:Inno.Editor.Settings.EditorSetting.defaultValue 98cf94b7b0c0242a2c293a02c2ec7acda5f9affb65b30c4c1ea14623f00cb405 -->

```csharp
public virtual Inno.Editor.Settings.EditorSettingObject Inno.Editor.Settings.EditorSetting.defaultValue { get; }
```

Creates the default object for a field. Page definitions keep the base implementation,
whose internal value is `null`.

**Constraints:** Field implementations must return a newly owned object on every access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L59).

## `description`

<a id="api-caf7986f7b8f4bc4"></a>
<!-- api: P:Inno.Editor.Settings.EditorSetting.description 96a4ac45624f8ae454d6a3144c773a496db824f99140a780f5190d219464b469 -->

```csharp
public virtual string Inno.Editor.Settings.EditorSetting.description { get; }
```

Gets the page or field explanation displayed by the Settings frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L70).

## `hasValue`

<a id="api-ae70a8f61b3069e4"></a>
<!-- api: P:Inno.Editor.Settings.EditorSetting.hasValue 24a122e033ce6450e73ef9661d883eae274658b868c84be096efe9bf6ea897c4 -->

```csharp
public bool Inno.Editor.Settings.EditorSetting.hasValue { get; }
```

Gets whether this definition owns one persisted JSON object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L50).

## `label`

<a id="api-9a86d7142dac3276"></a>
<!-- api: P:Inno.Editor.Settings.EditorSetting.label 45e21ed558a5061bec98a5b544d056f61fa393b7a844217a54190dbac103c5da -->

```csharp
public string Inno.Editor.Settings.EditorSetting.label { get; }
```

Gets the display label derived from the final path segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L40).

## `order`

<a id="api-15b0bc3c501b685c"></a>
<!-- api: P:Inno.Editor.Settings.EditorSetting.order b553e0e0cf9e4a5ec9e36d1c990dd9731448cd90a2907a2b521ecba9e49e9693 -->

```csharp
public int Inno.Editor.Settings.EditorSetting.order { get; }
```

Gets the stable order among fields with the same section and label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L45).

## `pagePath`

<a id="api-bbd9f815aac36800"></a>
<!-- api: P:Inno.Editor.Settings.EditorSetting.pagePath 1a92dee70908b4696a8b8516bd94344531f9ba63eba3adbf5730e75ff55d4b2d -->

```csharp
public string Inno.Editor.Settings.EditorSetting.pagePath { get; }
```

Gets the page that owns this field, or this page's own path for a page definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L35).

## `path`

<a id="api-3ad06d4c684853bc"></a>
<!-- api: P:Inno.Editor.Settings.EditorSetting.path b650c54b066622f2b5e2744f23938c2a7b7391eb929e912fb1db4dec80f716b9 -->

```csharp
public string Inno.Editor.Settings.EditorSetting.path { get; }
```

Gets the complete slash-delimited identity and placement path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L30).

## `section`

<a id="api-1aa95b2c27b7a550"></a>
<!-- api: P:Inno.Editor.Settings.EditorSetting.section 73540288b1fd9dbf9b67aaa0cda961185a9b0e105f03f181644a25d292a08622 -->

```csharp
public virtual string Inno.Editor.Settings.EditorSetting.section { get; }
```

Gets the section heading used to group fields alphabetically. Definitions without a
section keep the base implementation, whose internal value is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L65).
