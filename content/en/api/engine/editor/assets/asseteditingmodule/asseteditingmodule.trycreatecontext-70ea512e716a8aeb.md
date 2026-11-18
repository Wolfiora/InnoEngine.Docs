---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.70ea512e716a8aeb0b31dde92fe5652d084e7763d2a2c6e32ad27f758ddd1b87
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.TryCreateContext(Inno.Editor.Core.EditorContext,System.String,Inno.Editor.Assets.AssetEditorContext@)
title: AssetEditingModule.TryCreateContext
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
sourceFingerprint: b20da28ef58008b79813c8c94c9bb784c9a3c9752d8f43e54620ad06f855488f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editor`:** The current editor context used only during this invocation.

**Parameter `relativePath`:** The isolated source-relative path to resolve.

**Parameter `context`:** Receives the current source snapshot, or null when the source is unavailable.

## Returns

True when the request is accepted; otherwise false.
