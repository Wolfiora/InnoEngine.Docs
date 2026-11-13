---
uid: api.840de6c52cb12c4d1f3e1627957e42c47b5eab56dea298f34d0286db9ecb6a69
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanelAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean,System.String,System.Boolean)"
source: xml
reviewed: a8bb44a7357fa241824673a59d7cf0aee9e898c652321f22e8283c79a31ef162
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Creates a dockable panel registration with stable identity and presentation metadata.

**Parameter `id`:** The stable identity used for Panel-menu routing and reload-state retention.

**Parameter `title`:** The visible dockable-window title.

**Parameter `order`:** The stable panel and generated Panel-menu ordering value.

**Parameter `defaultOpen`:** Whether a newly discovered panel is visible before retained state is available.

**Parameter `menuPath`:** The optional slash-delimited category path under the generated `Panel` menu.

**Parameter `separatorBefore`:** Whether the generated toggle is preceded by a separator within its final menu category.

**Exception `T:System.ArgumentException`:** Thrown when `id` or `title` is empty, or when `menuPath` contains an empty segment.
