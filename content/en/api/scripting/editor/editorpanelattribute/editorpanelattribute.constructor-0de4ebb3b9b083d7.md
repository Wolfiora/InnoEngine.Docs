---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0de4ebb3b9b083d7cb205bc1a060d9e6f5e98f09ca92ce8d4d53bbb2a4f393de
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanelAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean,System.String,System.Boolean)
title: EditorPanelAttribute.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 5ed9ac7a7f3e4e93874ab968c26a9ccc5f379af786a34e23abf0d26c06c5c444
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable identity used for Panel-menu routing and reload-state retention.

**Parameter `title`:** The visible dockable-window title.

**Parameter `order`:** The stable panel and generated Panel-menu ordering value.

**Parameter `defaultOpen`:** Whether a newly discovered panel is visible before retained state is available.

**Parameter `menuPath`:** The optional slash-delimited category path under the generated `Panel` menu.

**Parameter `separatorBefore`:** Whether the generated toggle is preceded by a separator within its final menu category.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` or `title` is empty, or when `menuPath` contains an empty segment.
