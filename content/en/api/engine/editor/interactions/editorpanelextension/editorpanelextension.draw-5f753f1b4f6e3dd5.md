---
uid: api.5f753f1b4f6e3dd59c23ee94f82bf030f3aa19d29716ed778f4e8924112b02d1
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPanelExtension.Draw(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: a0c6e50dad5b80a241837fc8c0a53b31b67defe89d9df2a01c91e513d4ff8a28
title: "EditorPanelExtension.Draw"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Safely draws the panel body and quarantines a failing extension instance.

## Parameters

**Parameter `context`:** The active editor context supplied by the presentation backend.

## Returns

`true` when the panel completed drawing without being quarantined.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
