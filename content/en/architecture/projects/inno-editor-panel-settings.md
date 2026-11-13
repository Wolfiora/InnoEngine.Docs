---
title: Inno.Editor.Panel.Settings
description: "Internal staged Settings frontend coordinating Editor, Project and Build scopes."
uid: project.inno-editor-panel-settings
kind: project
owners: [Inno.Editor.Panel.Settings]
exampleMode: host
exampleProjects: [Inno.Editor.Settings, Inno.Editor.ImGui, Inno.Core.Settings, Inno.Core.Serialization]
---
# Inno.Editor.Panel.Settings

Internal staged Settings frontend coordinating Editor, Project and Build scopes.

Start with the task linked below; assembly names are secondary implementation reference.

## User workflow

[Change settings](../../manual/editor/settings.md) covers navigation, scope ownership, Apply, Reset, rollback and reload admission. Business extensions reference Inno.Editor.Settings, not this internal panel.

## Session and transaction mechanism

SettingsEditSession owns staged objects, modified IDs, original effective defaults and necessary reset intent per scope. Editor state compares against its definition baseline; Project state compares Inno Serialization property bytes; Build state uses an isolated typed copy. Only dirty scopes apply.

The frontend coordinates a shared History transaction while each owner atomically writes its own document. A failed write or History entry rolls back; inability to prove restored state remains Faulted and disables Apply. This is not a crash-atomic distributed file transaction.

A reload admission guard protects borrowed definitions while the draft is open. Quarantine cancels temporary ownership and releases admission; a failed close must retain resources still required for recovery. Navigation tracks neutral session revision, not an old editing-session object.

## Presentation boundary

Automatic row height keeps label, content and reset aligned. After a fixed reset width, label/content use a shared 2:3 ratio. Long labels wrap within their own column. Tables use actual content width; decorative gutters do not alter layout or create false scrolling. Internal SettingsStyle reads current-frame scale without placing Session policy in shared metrics.

Child scopes own navigation/page scrolling. Every Begin/End, Push/Pop and disabled scope unwinds on failure. Business field types, layers, tags and rendering models belong to their features; the frontend has no central business-type switch.

## Public surface

The captured assembly has no public CLR types. The Settings definition/drawer APIs and the actual host examples below are distinct from private panel implementation.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using Inno.Editor.ImGui;
using Inno.Editor.Settings;

[EditorSettingPath("Editor/Authoring/Snap")]
public sealed class SnapSetting : EditorSetting
{
    public override EditorSettingObject defaultValue
    {
        get
        {
            var value = new EditorSettingObject();
            value.SetAsBoolean("value", true);
            return value;
        }
    }

    protected override void OnDraw(EditorSettingObject setting)
    {
        bool value = setting.GetAsBoolean("value", true);
        if (ImGui.Checkbox("##snap", ref value))
            setting.SetAsBoolean("value", value);
    }
}
```
```csharp
using Inno.Core.Serialization;
using Inno.Core.Settings;
using Inno.Editor.ImGui;
using Inno.Editor.Settings;

[ProjectSettingDefinition("example.gameplay")]
public sealed class GameplaySettings : ISerializable
{
    [SerializableProperty]
    public bool enabled { get; set; } = true;
}

[ProjectSettingPath("Project/Gameplay/Enabled")]
public sealed class GameplaySettingsEditor : ProjectSettingEditor<GameplaySettings>
{
    protected override void OnDraw(GameplaySettings setting)
    {
        bool enabled = setting.enabled;
        if (ImGui.Checkbox("##enabled", ref enabled))
            setting.enabled = enabled;
    }
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Settings/Inno.Editor.Panel.Settings.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.
