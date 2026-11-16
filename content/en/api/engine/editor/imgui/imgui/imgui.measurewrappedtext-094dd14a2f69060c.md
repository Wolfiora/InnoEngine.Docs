---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.094dd14a2f69060c65543010365f67ad2d9e0136464903c660c077415007fdf3
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.MeasureWrappedText(System.String,System.Single)
title: ImGui.MeasureWrappedText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 94b9313eb48aa351622f8ca3eb44a7103ef60e3bd9f135d5e8715a83e1c3c70e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `text`:** The literal text, including explicit line breaks.

**Parameter `wrapWidth`:** The available width in already scaled presentation coordinates.

## Returns

The copied natural text extent at the specified width.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The text is null.

**Exception `T:System.ArgumentException`:** The text contains an embedded zero code unit.

**Exception `T:System.Text.EncoderFallbackException`:** The text contains invalid Unicode.

**Exception `T:System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Exception `T:System.InvalidOperationException`:** No drawing scope is active on the owning UI thread and native context.

**Exception `T:System.ObjectDisposedException`:** The active UI session has retired.
