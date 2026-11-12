---
title: "EditorSetting"
description: "Reference for EditorSetting in Inno.Editor.Settings."
uid: api.inno.editor.settings.editor-script.e6afd8e6bd1017e4
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
  - manual.scripting.use-script-api
---
# `EditorSetting`

This reference describes `EditorSetting` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3c7ef65519a6bb3c) | Method |
| [`Draw`](#api-86ca653d7aad325e) | Method |
| [`IsDefault`](#api-ac9a104fa0fc8399) | Method |
| [`OnDraw`](#api-1214cd60e661a380) | Method |
| [`defaultValue`](#api-83716c1c4a2b86dd) | Property |
| [`description`](#api-73160fb67c8b319e) | Property |
| [`hasValue`](#api-5bff18cdd8f9f8fe) | Property |
| [`label`](#api-88a003a629541832) | Property |
| [`order`](#api-e9a23b838dfdb2a9) | Property |
| [`pagePath`](#api-7fd5f83be2c28a9d) | Property |
| [`path`](#api-339af3dc9b8687b5) | Property |
| [`section`](#api-81218f2adfa6aed2) | Property |

## Type declaration

<a id="api-e6afd8e6bd1017e4"></a>
<!-- api: T:InnoEditor.Settings.EditorSetting 50c494c7257a009b04aa2bdc2c255568e56099cf0a3dac0dd2e6df857675794e -->

```csharp
public abstract class InnoEditor.Settings.EditorSetting
```

Defines one path-addressed Settings page or one custom-drawn Settings field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L10).

## `#ctor`

<a id="api-3c7ef65519a6bb3c"></a>
<!-- api: M:InnoEditor.Settings.EditorSetting.#ctor f4dbce196514d9fc2fe884f91b95382b7a070009618495491e4ba75c3e4ce541 -->

```csharp
protected InnoEditor.Settings.EditorSetting.EditorSetting()
```

Creates a Settings definition. A field supplies its persisted default through
`InnoEditor.Settings.EditorSetting.defaultValue`; a page keeps the base implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L23).

## `Draw`

<a id="api-86ca653d7aad325e"></a>
<!-- api: M:InnoEditor.Settings.EditorSetting.Draw(InnoEditor.Settings.EditorSettingObject) 0ee041aab71b02c62ee28385d9a7a102c7eabcf6d35c248c12238f781d5ba88b -->

```csharp
public bool InnoEditor.Settings.EditorSetting.Draw(InnoEditor.Settings.EditorSettingObject setting)
```

Draws this field inside the frontend-managed content container.

**Parameter `setting`:** The isolated mutable object being edited.

**Returns:** `true` when the staged object differs from the value it held when this
            frontend first drew that object.

**Throws `System.ArgumentNullException`:** Thrown when `setting` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L85).

## `IsDefault`

<a id="api-ac9a104fa0fc8399"></a>
<!-- api: M:InnoEditor.Settings.EditorSetting.IsDefault(InnoEditor.Settings.EditorSettingObject) 2d3457b2496d6ffca01b6c21e487f570b7f87ddf4c3245846458ad9734b38af4 -->

```csharp
public bool InnoEditor.Settings.EditorSetting.IsDefault(InnoEditor.Settings.EditorSettingObject setting)
```

Determines whether a staged field object equals this definition's bound default value.

**Parameter `setting`:** The isolated staged object to compare.

**Returns:** `true` when every stored property equals the field default.

**Throws `System.ArgumentNullException`:** Thrown when `setting` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when this definition describes a page rather than a field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L110).

## `OnDraw`

<a id="api-1214cd60e661a380"></a>
<!-- api: M:InnoEditor.Settings.EditorSetting.OnDraw(InnoEditor.Settings.EditorSettingObject) 208a073236ac32b25f15cfadf9e52d6fe491a4ebe4d0e37ede58afac751cb696 -->

```csharp
protected virtual void InnoEditor.Settings.EditorSetting.OnDraw(InnoEditor.Settings.EditorSettingObject setting)
```

Draws the field using the staged JSON object owned by the Settings frontend.
A type that does not override this method describes a page.

**Parameter `setting`:** The isolated mutable object being edited.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L126).

## `defaultValue`

<a id="api-83716c1c4a2b86dd"></a>
<!-- api: P:InnoEditor.Settings.EditorSetting.defaultValue e0fab53e215aeee2ddcc660c30913567b826124321bad4252a1ae6f4aa93b3de -->

```csharp
public virtual InnoEditor.Settings.EditorSettingObject InnoEditor.Settings.EditorSetting.defaultValue { get; }
```

Creates the default object for a field. Page definitions keep the base implementation,
whose internal value is `null`.

**Constraints:** Field implementations must return a newly owned object on every access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L59).

## `description`

<a id="api-73160fb67c8b319e"></a>
<!-- api: P:InnoEditor.Settings.EditorSetting.description 8c51311b9ddc01a5ee79e0aa229a61e17c9f91ce6cc581f5301f779059944c48 -->

```csharp
public virtual string InnoEditor.Settings.EditorSetting.description { get; }
```

Gets the page or field explanation displayed by the Settings frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L70).

## `hasValue`

<a id="api-5bff18cdd8f9f8fe"></a>
<!-- api: P:InnoEditor.Settings.EditorSetting.hasValue 3b7793c80460a0bddffb116d3b13c81ff92e8df5279a2741df033438d295603b -->

```csharp
public bool InnoEditor.Settings.EditorSetting.hasValue { get; }
```

Gets whether this definition owns one persisted JSON object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L50).

## `label`

<a id="api-88a003a629541832"></a>
<!-- api: P:InnoEditor.Settings.EditorSetting.label 84261195d104563338086319eb60880aa8e8676229c40bc305001fd5dc592e94 -->

```csharp
public string InnoEditor.Settings.EditorSetting.label { get; }
```

Gets the display label derived from the final path segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L40).

## `order`

<a id="api-e9a23b838dfdb2a9"></a>
<!-- api: P:InnoEditor.Settings.EditorSetting.order 4350c710382ef918a3f0b473fa363239372221bbc1a336597fac06bccc0d1ecb -->

```csharp
public int InnoEditor.Settings.EditorSetting.order { get; }
```

Gets the stable order among fields with the same section and label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L45).

## `pagePath`

<a id="api-7fd5f83be2c28a9d"></a>
<!-- api: P:InnoEditor.Settings.EditorSetting.pagePath f35530b0136c6b532a270d8b2fb2d07a63871e19cfeec4ebfba5b25acd16921b -->

```csharp
public string InnoEditor.Settings.EditorSetting.pagePath { get; }
```

Gets the page that owns this field, or this page's own path for a page definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L35).

## `path`

<a id="api-339af3dc9b8687b5"></a>
<!-- api: P:InnoEditor.Settings.EditorSetting.path cec451546a78da38912eed43ef3aabdd76f37b49995d47fa27504a8671b927e7 -->

```csharp
public string InnoEditor.Settings.EditorSetting.path { get; }
```

Gets the complete slash-delimited identity and placement path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L30).

## `section`

<a id="api-81218f2adfa6aed2"></a>
<!-- api: P:InnoEditor.Settings.EditorSetting.section 74f04474db3eeff0a77dcc4aff0af3d62c880b9c7d1f19084a5dc4bf8dfc8437 -->

```csharp
public virtual string InnoEditor.Settings.EditorSetting.section { get; }
```

Gets the section heading used to group fields alphabetically. Definitions without a
section keep the base implementation, whose internal value is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSetting.cs#L65).
