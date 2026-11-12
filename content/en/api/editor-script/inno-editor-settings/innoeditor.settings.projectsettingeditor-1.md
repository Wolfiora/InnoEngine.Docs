---
title: "ProjectSettingEditor`1"
description: "Reference for ProjectSettingEditor`1 in Inno.Editor.Settings."
uid: api.inno.editor.settings.editor-script.eaf68aa06279c71e
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
  - manual.scripting.use-script-api
---
# ``ProjectSettingEditor`1``

This reference describes ``ProjectSettingEditor`1`` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Settings.ProjectSettingEditor`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2a7c1cbcd9c74471) | Method |
| [`OnDraw`](#api-fec01c054cda083c) | Method |

## Type declaration

<a id="api-eaf68aa06279c71e"></a>
<!-- api: T:InnoEditor.Settings.ProjectSettingEditor`1 e3bb95ba5f51afe76c6e171c18e0c9ba1cfa3304ebfa1651b8fea92c76d313d8 -->

```csharp
public abstract class InnoEditor.Settings.ProjectSettingEditor<TSetting> where TSetting : class, InnoEngine.Serialization.ISerializable : InnoEditor.Settings.ProjectSettingEditor
```

Provides a typed drawing extension for one runtime project setting protocol.

**Type parameter `TSetting`:** The exact serializable setting type registered by the runtime Plugin or host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L173).

## `#ctor`

<a id="api-2a7c1cbcd9c74471"></a>
<!-- api: M:InnoEditor.Settings.ProjectSettingEditor`1.#ctor 37a28d43b52ca50d70bdaca0bafe8fe7e3e256b48970dae331eb77c84207482a -->

```csharp
protected InnoEditor.Settings.ProjectSettingEditor<TSetting>.ProjectSettingEditor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L173).

## `OnDraw`

<a id="api-fec01c054cda083c"></a>
<!-- api: M:InnoEditor.Settings.ProjectSettingEditor`1.OnDraw(`0) 539ca81d0663bea54e9cfc524ebf1d19df718492a6c379ff007db8bc0e5f7c7a -->

```csharp
protected abstract void InnoEditor.Settings.ProjectSettingEditor<TSetting>.OnDraw(TSetting setting)
```

Draws the isolated staged value. Mutations remain local until the Settings frontend applies them.

**Parameter `setting`:** The isolated current-generation setting snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L184).
