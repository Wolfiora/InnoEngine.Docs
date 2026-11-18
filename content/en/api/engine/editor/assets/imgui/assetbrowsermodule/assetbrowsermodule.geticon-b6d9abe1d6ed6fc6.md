---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b6d9abe1d6ed6fc6551b02f862bf126b4eb1b166d452772580c29a1ea2c9d8e5
symbol: engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserModule.GetIcon(Inno.Assets.Pipeline.AssetFileEntry)
title: AssetBrowserModule.GetIcon
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: source-clr
sourceFingerprint: e646cca23b7f702e8c0b895f8462c6eda8987808be665481ee8c1665d1cae2f9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `entry`:** The source entry whose presentation icon should be resolved.

## Returns

The most specific registered icon, or the built-in directory or file icon when no registration matches the entry.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `entry` is `null`.
