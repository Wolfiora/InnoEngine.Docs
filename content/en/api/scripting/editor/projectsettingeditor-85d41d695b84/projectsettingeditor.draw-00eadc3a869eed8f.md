---
uid: api.00eadc3a869eed8f0c3f18473fd0781b421480a029b614109373b2d51a0bf196
symbol: "scripting:Inno.Editor.Settings:M:InnoEditor.Settings.ProjectSettingEditor.Draw(InnoEngine.Serialization.ISerializable)"
source: xml
reviewed: bda6754b564f0372e7e8a48f09afe96f4850b8114c347aeb5516fc02f2a5b418
title: "ProjectSettingEditor.Draw"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Draws one isolated staged value through this presentation.

## Parameters

**Parameter `value`:** The exact setting type owned by this presentation.

## Returns

`true` when the value differs from its first drawn state.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `value` has another runtime type.
