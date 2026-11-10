---
title: "ProjectSettingEditor`1"
description: "Reference for ProjectSettingEditor`1 in Inno.Editor.Settings."
uid: api.inno.editor.settings.f3c65486f1ad1216
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# ``ProjectSettingEditor`1``

This reference describes ``ProjectSettingEditor`1`` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Settings.ProjectSettingEditor`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f704f9cb9c03e1aa) | Method |
| [`OnDraw`](#api-923d473d1e914f20) | Method |

## Type declaration

<a id="api-f3c65486f1ad1216"></a>
<!-- api: T:Inno.Editor.Settings.ProjectSettingEditor`1 646e66df271a132a4545090b74b897ea29e75796d16fde701e487527460ec92b -->

```csharp
public abstract class Inno.Editor.Settings.ProjectSettingEditor<TSetting> where TSetting : class, Inno.Core.Serialization.ISerializable : Inno.Editor.Settings.ProjectSettingEditor
```

Provides a typed drawing extension for one runtime project setting protocol.

**Type parameter `TSetting`:** The exact serializable setting type registered by the runtime Plugin or host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L173).

## `#ctor`

<a id="api-f704f9cb9c03e1aa"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingEditor`1.#ctor 1238d9bead464ed8a9bcd1d9162e7d2e8e3072502db98d77e66568c99181ae30 -->

```csharp
protected Inno.Editor.Settings.ProjectSettingEditor<TSetting>.ProjectSettingEditor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L173).

## `OnDraw`

<a id="api-923d473d1e914f20"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingEditor`1.OnDraw(`0) 63238e399d7395210e1bcfd6e1312a60ada4b0255bbdba11bb2002105890a9f9 -->

```csharp
protected abstract void Inno.Editor.Settings.ProjectSettingEditor<TSetting>.OnDraw(TSetting setting)
```

Draws the isolated staged value. Mutations remain local until the Settings frontend applies them.

**Parameter `setting`:** The isolated current-generation setting snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L184).
