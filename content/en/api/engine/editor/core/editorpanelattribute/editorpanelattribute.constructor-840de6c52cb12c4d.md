---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.840de6c52cb12c4d1f3e1627957e42c47b5eab56dea298f34d0286db9ecb6a69
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanelAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean,System.String,System.Boolean)
title: EditorPanelAttribute.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 367f5214da108afb0acfcfd24b9b6be8fb593d728229f900f30fddaec726567e
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
